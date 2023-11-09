"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";
import generateLayout from "../utils__/generateLayout";
import generateRootPage from "../utils__/generateRootPage";
import * as prettier from "prettier";

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
  "src/app/api/auth/[...nextauth]/route.ts",
  "src/app/api/auth/[...nextauth]",
];

export async function POST(req) {
  const ui_components = path.join(process.cwd(), "uicomponents");
  const body = await req.json();

  const { components, ga_id = "", crisp_id = "", premium_features } = body;
  const zip = new AdmZip();

  const is_next_auth = premium_features.find(
    ({ item_id }) => item_id === "next_auth"
  )?.selected;

  const is_database = premium_features.find(
    ({ item_id }) => item_id === "database"
  )?.selected;
  const file_to_add = components.map(({ item_id, varient }) => {
    return `src/app/components/${item_id}/${varient}.jsx`;
  });

  zip.addLocalFolder(ui_components, "", (file) => {
    if (DATABASE_FILES.includes(file)) {
      if (is_database || is_next_auth) {
        return true;
      }
      return false;
    }
    if (NEXT_AUTH_FILES.includes(file)) {
      if (is_next_auth) {
        return true;
      }
      return false;
    }
    if (file.startsWith("src/app/components")) {
      if (file_to_add.includes(file)) {
        return true;
      }
      return false;
    }
    if (file.includes("__")) {
      return false;
    }

    if (file.includes("/api/chat") || file.includes("/api/retrieval")) {
      return false;
    }
    return true;
  });

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
    ".env.local",
    Buffer.from(`
${ga_id ? `NEXT_PUBLIC_GOOGLE_ANALYTICS=${ga_id}` : ""}
${crisp_id ? `NEXT_PUBLIC_CRISP_SUPPORT=${crisp_id}` : ""}
`)
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
