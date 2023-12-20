"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";
import generateLayout from "../utils__/generateLayout";
import generateRootPage from "../utils__/generateRootPage";
import * as prettier from "prettier";
import { getServerSession } from "next-auth/next";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import fs from "fs";
import {
  formatComponentPath,
  removeBackticksAndJSX,
} from "@/app/utils__/helper";

const DATABASE_FILES = [
  "src/lib/database/db.js",
  "src/lib/database/schema.js",
  "src/lib/database",
  "drizzle.config.js",
];

const NEXT_AUTH_FILES = [
  "src/app/auth/EmailSignIn.js",
  "src/app/auth/GoogleSignIn.js",
  "src/app/auth/LoginButton.js",
  "src/app/auth/authenticated/page.js",
  "src/app/auth/authenticated",
  "src/app/auth/signin/page.js",
  "src/app/auth/signin",
  "src/app/auth",
  "src/app/nextauth/provider.js",
  "src/app/nextauth",
  "src/app/api/auth",
  "src/app/api/auth/[...nextauth]/route.ts",
  "src/app/api/auth/[...nextauth]/authOptions.ts",
  "src/app/api/auth/[...nextauth]",
];

const SUPPORT_PAGES = [
  "src/app/(markdown)/terms-condition/page.mdx",
  "src/app/(markdown)/privacy-policy/page.mdx",
];

export async function POST(req) {
  const ui_components = path.join(process.cwd(), "uicomponents");
  const package_json_path = path.join(process.cwd(), "package.json");
  const body = await req.json();
  const {
    components,
    ga_id = "",
    crisp_id = "",
    premium_features,
    pages = [],
  } = body;

  // mergeCode({ apiKey: process.env.OPEN_AI_KEY , html_code: , jsx_code: });

  const is_next_auth = premium_features.find(
    ({ item_id }) => item_id === "next_auth"
  )?.selected;

  const is_database = premium_features.find(
    ({ item_id }) => item_id === "database"
  )?.selected;
  const packageJson = JSON.parse(fs.readFileSync(package_json_path, "utf-8"));

  delete packageJson.dependencies["axios"];
  delete packageJson.dependencies["@craftjs/core"];
  // Remove a dependency based on a condition
  if (!(is_database && is_next_auth)) {
    delete packageJson.dependencies["drizzle-orm"];
    delete packageJson.devDependencies["drizzle-kit"];
    delete packageJson.scripts["postinstall"];
    delete packageJson.scripts["drizzle:push"];
    delete packageJson.scripts["introspect"];
  }

  const session = await getServerSession(AUTH_OPTIONS);

  const is_premium_user = ["rajatdhoot123@gmail.com"].find(
    (puser) => puser === session?.user?.email
  );

  const zip = new AdmZip();

  const pages_to_add = pages
    .filter((page) => page.selected)
    .map((item) => `src/app/(markdown)/${item.item_id}/page.mdx`);

  zip.addLocalFolder(ui_components, "", (file) => {
    // Remove File For Project Use
    if (file.includes("__") || ["src/app/globals.css"].includes(file)) {
      return false;
    }
    if (SUPPORT_PAGES.includes(file)) {
      return pages_to_add.includes(file);
    }
    if (DATABASE_FILES.includes(file)) {
      if (!is_premium_user) {
        return false;
      }
      if (is_database || is_next_auth) {
        return true;
      }
      return false;
    }
    if (NEXT_AUTH_FILES.includes(file)) {
      if (!is_premium_user) {
        return false;
      }
      if (is_next_auth) {
        return true;
      }
      return false;
    }
    if (file.startsWith("src/app/components")) {
      return false;
    }

    if (file.includes("/api/chat") || file.includes("/api/retrieval")) {
      return false;
    }

    return true;
  });

  await Promise.all(
    components.map(async ({ file_path, content }) =>
      zip.addFile(
        formatComponentPath(file_path),
        Buffer.from(
          await prettier.format(removeBackticksAndJSX(content), {
            parser: "babel",
          })
        ),
        "utf8"
      )
    )
  );

  zip.addFile(
    "src/app/layout.js",
    Buffer.from(
      await prettier.format(
        generateLayout({ ga_id, next_auth: is_next_auth, crisp_id }),
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
    "src/app/page.js",
    Buffer.from(
      await prettier.format(generateRootPage({ components }), {
        parser: "babel",
      })
    ),
    "utf8"
  );

  zip.addFile(
    "src/app/globals.css",
    Buffer.from(
      `
@tailwind base;
@tailwind components;
@tailwind utilities;
      `,
      {
        parser: "babel",
      }
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

  zip.addFile("package.json", Buffer.from(JSON.stringify(packageJson)), "utf8");
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