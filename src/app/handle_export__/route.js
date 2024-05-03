"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";
import generateLayout from "../utils__/generateLayout";
import generateRootPage from "../utils__/generateRootPage";
import * as prettier from "prettier";
import { getServerSession } from "next-auth/next";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import { readFileSync } from "fs";
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
import {
  CREATE_FILE_NOT_PRESENT,
  NECESSARY_FILES,
  NECESSARY_FOLDERS,
  SUPPORT_PAGES,
  MARKDOWN_PAGES,
  DATABASE_FILES,
  LEMON_SQUEEZY_FILES,
  NEXT_AUTH_FILES,
  SHADCN_UI_FILE,
  SHADCN_UI_FOLDER,
  STRIPE_HOSTED_EMBEDDED_PAGE,
  SITE_MAP_FILES,
} from "@/boilercode/constants";

const getFilePath = (file) => {
  return file.split("/").length > 1
    ? file.split("/").slice(0, -1).join("/")
    : undefined;
};

export async function POST(req) {
  const ui_components = path.join(process.cwd(), "uicomponents");
  const template_path = path.join(process.cwd(), "templates");

  const package_json_path = path.join(process.cwd(), "package.json");
  const body = await req.json();
  const {
    dependencies = {},
    template = null,
    components = [],
    ga_id = "",
    twak_to_id = "",
    crisp_id = "",
    post_hog = "",
    premium_features = {},
    pages = {},
  } = body;

  const session = await getServerSession(AUTH_OPTIONS);

  if (!session) {
    return NextResponse.json(
      { message: "Subscribe to export" },
      { status: 403 }
    );
  }

  const get_user = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email_id, session?.user?.email));

  const is_premium_user = get_user.find((user) => user.is_active);

  if (!is_premium_user) {
    return NextResponse.json(
      { message: "Subscribe to export" },
      { status: 403 }
    );
  }

  const packageJson = JSON.parse(readFileSync(package_json_path, "utf-8"));
  delete packageJson.dependencies["@measured/puck"];
  delete packageJson.dependencies["nodemailer"];
  var zip = new AdmZip();

  NECESSARY_FILES.filter((f) =>
    template && f === "tailwind.config.js" ? false : true
  ).forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
  });

  SHADCN_UI_FILE.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
  });

  SITE_MAP_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
  });

  SHADCN_UI_FOLDER.forEach((folder) => {
    zip.addLocalFolder(`${ui_components}/${folder}`, folder);
  });

  NECESSARY_FOLDERS.forEach((folder) => {
    zip.addLocalFolder(`${ui_components}/${folder}`, folder);
  });

  if (
    premium_features.next_auth ||
    premium_features.stripe ||
    premium_features.lemon_squeezy ||
    premium_features.database
  ) {
    DATABASE_FILES.forEach((file) => {
      zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
    });
  }

  if (premium_features.lemon_squeezy) {
    LEMON_SQUEEZY_FILES.forEach((file) => {
      zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
    });
  }

  if (premium_features.next_auth) {
    NEXT_AUTH_FILES.forEach((file) => {
      zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
    });
  }

  if (premium_features.stripe_custom_checkout) {
    STRIPE_HOSTED_EMBEDDED_PAGE.forEach((file) => {
      zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
    });
  }

  SUPPORT_PAGES.forEach((file) => {
    if (!pages["privacy-policy"] && file.includes("privacy-policy")) {
      return;
    }
    if (!pages["terms-condition"] && file.includes("terms-condition")) {
      return;
    }
    zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
  });

  MARKDOWN_PAGES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
  });

  components.forEach(({ item_id, variant }) => {
    zip.addFile(
      `src/app/components/${item_id}/${variant}.jsx`,
      Buffer.from(
        readFileSync(
          path.join(
            ui_components,
            `src/app/components/${item_id}/${variant}.jsx`
          ),
          "utf-8"
        )
      )
    );
  });

  CREATE_FILE_NOT_PRESENT.forEach(({ path, content }) => {
    zip.addFile(path, content);
  });

  if (!template) {
    zip.addFile(
      "src/app/page.js",
      Buffer.from(
        await prettier.format(generateRootPage({ components }), {
          parser: "babel",
        })
      ),
      "utf8"
    );
  }

  zip.addFile(
    ".env.local",
    Buffer.from(`
  ${ga_id ? `NEXT_PUBLIC_GOOGLE_ANALYTICS=${ga_id}` : ""}
  ${crisp_id ? `NEXT_PUBLIC_CRISP_SUPPORT=${crisp_id}` : ""}
  ${post_hog ? `NEXT_PUBLIC_POST_HOG=${post_hog}` : ""}
  ${twak_to_id ? `NEXT_PUBLIC_TWAK_TO=${twak_to_id}` : ""}
  `)
  );

  if (template) {
    zip.addLocalFolder(`${template_path}/${template}`, `src/app`);
  }

  zip.addFile(
    "src/app/layout.js",
    Buffer.from(
      await prettier.format(
        generateLayout({
          template,
          twak_to_id,
          post_hog,
          ga_id,
          next_auth: premium_features.next_auth,
          crisp_id,
        }),
        {
          parser: "babel",
        }
      )
    )
  );

  zip.addFile(
    "package.json",
    Buffer.from(
      JSON.stringify(
        {
          ...packageJson,
          dependencies: { ...packageJson.dependencies, ...dependencies },
        },
        null,
        2
      )
    ),
    "utf8"
  );
  const zipFileContents = zip.toBuffer();
  const fileName = "uploads.zip";
  const fileType = "application/zip";

  return new NextResponse(zipFileContents, {
    // Create a new NextResponse for the file with the given stream from the disk
    status: 200, //STATUS 200: HTTP - Ok
    headers: new Headers({
      //Headers
      "content-disposition": `attachment; filename=${path.basename(fileName)}`, //State that this is a file attachment
      "content-type": fileType,
    }),
  });
}
