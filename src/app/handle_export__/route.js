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
  SHADCN_UI_FILES,
  SHADCN_UI_FOLDER,
  SUPPORT_PAGES,
  MARKDOWN_PAGES,
} from "@/boilercode/constants";

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
    zip.addLocalFile(`${ui_components}/${file}`, file);
  });

  SHADCN_UI_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, file);
  });

  NECESSARY_FOLDERS.forEach((folder) => {
    zip.addLocalFolder(`${ui_components}/${folder}`, folder);
  });

  SHADCN_UI_FOLDER.forEach((folder) => {
    zip.addLocalFolder(`${ui_components}/${folder}`, folder);
  });

  DATABASE_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, file);
  });

  LEMON_SQUEEZY_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, file);
  });

  STRIPE_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, file);
  });

  NEXT_AUTH_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, file);
  });

  SUPPORT_PAGES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, file);
  });

  MARKDOWN_PAGES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, file);
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
