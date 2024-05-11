"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";
import generateLayout from "../utils__/generateLayout";
import generateRootPage from "../utils__/generateRootPage";
import * as prettier from "prettier";
import { getServerSession } from "next-auth/next";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import { readFileSync, promises, existsSync } from "fs";
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
  NEXT_AUTH_FILES,
  STRIPE_HOSTED_EMBEDDED_PAGE,
  SHADCN_UI_FILE,
  SHADCN_UI_FOLDER,
} from "@/boilercode/constants";
import { updateCopywriting } from "../api/code-generation__/update-copywriting";
import { updateItemId } from "../utils__/helper";

function getSubstringBetweenCodeTags(code) {
  // Regular expression to find text between <code> and </code> tags
  const regex = /<code>(.*?)<\/code>/s;

  // Using match to find the first match in the string
  const match = code.match(regex);

  // Check if there is a match
  if (match) {
    // Return the extracted text (without the <code> tags)
    return match[1];
  } else {
    return null; // Return null if no <code> tags are found
  }
}

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
    copywriting_components,
    components,
    ga_id = "",
    twak_to_id = "",
    crisp_id = "",
    post_hog = "",
    premium_features = {},
    pages = {},
  } = body;

  const session = await getServerSession(AUTH_OPTIONS);

  if (!session) {
    return NextResponse.json({ message: "Invalid Session" }, { status: 403 });
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

  const all_file = copywriting_components.map(async (file) => {
    return promises.readFile(
      `${ui_components}/src/app/components/${file.item_id}/${file.variant}.jsx`,
      "utf8"
    );
  }, {});

  const get_all_files = await Promise.all(all_file);

  const files_with_copywriting = get_all_files.map((file, index) => {
    return updateCopywriting({
      use_case: body.use_case,
      jsx_code: file,
      apiKey: body.api_key,
    });
  });

  const files_with_copywriting_result = await Promise.all(
    files_with_copywriting
  );

  const add_file_with_copywriting = [];

  updateItemId(components).forEach(({ item_id, variant }) => {
    const select_comp_index = copywriting_components.findIndex(
      (file) => file.item_id === item_id
    );

    if (select_comp_index !== -1) {
      const string =
        getSubstringBetweenCodeTags(
          files_with_copywriting_result[select_comp_index]
        ) || "";

      add_file_with_copywriting.push({
        path: `src/app/components/${item_id}/index.jsx`,
        content: prettier.format(string, {
          parser: "babel",
        }),
      });
    } else {
      zip.addLocalFile(
        `${ui_components}/src/app/components/${item_id}/${variant}.jsx`,
        getFilePath(`src/app/components/${item_id}/index.jsx`)
      );
    }

    if (existsSync(`${ui_components}/src/app/components/${item_id}/actions`)) {
      zip.addLocalFolder(
        `${ui_components}/src/app/components/${item_id}/actions`,
        `src/app/components/${item_id}/actions`
      );
    }
  });

  const copywriting_formatted_string = await Promise.all(
    add_file_with_copywriting.map(({ content }) => content)
  );

  copywriting_formatted_string.forEach((string, index) => {
    zip.addFile(add_file_with_copywriting[index].path, Buffer.from(string));
  });

  zip.addFile(
    "src/app/layout.js",
    Buffer.from(
      await prettier.format(
        generateLayout({
          twak_to_id,
          ga_id,
          post_hog,
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
      await prettier.format(
        generateRootPage({ components, copywriting_components }),
        {
          parser: "babel",
        }
      )
    ),
    "utf8"
  );

  zip.addFile(
    ".env.local",
    Buffer.from(`
  ${ga_id ? `NEXT_PUBLIC_GOOGLE_ANALYTICS=${ga_id}` : ""}
  ${crisp_id ? `NEXT_PUBLIC_CRISP_SUPPORT=${crisp_id}` : ""}
  ${post_hog ? `NEXT_PUBLIC_POST_HOG=${post_hog}` : ""}
  ${twak_to_id ? `NEXT_PUBLIC_TWAK_TO=${twak_to_id}` : ""}
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
