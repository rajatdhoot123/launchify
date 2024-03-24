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
  NECESSARY_FILES,
  NECESSARY_FOLDERS,
  SUPPORT_PAGES,
  MARKDOWN_PAGES,
  DATABASE_FILES,
  LEMON_SQUEEZY_FILES,
  STRIPE_FILES,
  NEXT_AUTH_FILES,
  SHADCN_UI_FILE,
  SHADCN_UI_FOLDER,
} from "@/boilercode/constants";

const getFilePath = (file) => {
  return file.split("/").length > 1
    ? file.split("/").slice(0, -1).join("/")
    : undefined;
};

export async function POST(req) {
  const ui_components = path.join(process.cwd(), "uicomponents");
  const package_json_path = path.join(process.cwd(), "package.json");
  const body = await req.json();
  const {
    components,
    ga_id = "",
    crisp_id = "",
    premium_features = {},
    pages = {},
  } = body;

  const session = await getServerSession(AUTH_OPTIONS);

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

  var zip = new AdmZip();

  NECESSARY_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
  });

  SHADCN_UI_FILE.forEach((file) => {
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

  if (premium_features.stripe) {
    STRIPE_FILES.forEach((file) => {
      zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
    });
  }

  if (premium_features.next_auth) {
    NEXT_AUTH_FILES.forEach((file) => {
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
      `src/app/components/${item_id}/index.jsx`,
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

  zip.addFile(
    "src/app/layout.js",
    Buffer.from(
      await prettier.format(
        generateLayout({
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
    "src/app/page.js",
    Buffer.from(
      await prettier.format(generateRootPage({ components }), {
        parser: "babel",
      })
    ),
    "utf8"
  );

  zip.addFile(
    ".env.local",
    Buffer.from(`
  ${ga_id ? `NEXT_PUBLIC_GOOGLE_ANALYTICS=${ga_id}` : ""}
  ${crisp_id ? `NEXT_PUBLIC_CRISP_SUPPORT=${crisp_id}` : ""}
  `)
  );

  zip.addFile(
    "package.json",
    Buffer.from(JSON.stringify(packageJson, null, 2)),
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
