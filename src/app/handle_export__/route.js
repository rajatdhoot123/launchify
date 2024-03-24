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
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
import { inngest } from "@/inngest/client";

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

const LEMON_SQUEEZY_FILES = [
  "src/app/api/lemon-squeezy/webhook/route.ts",
  "src/app/api/lemon-squeezy/webhook",
  "src/app/api/lemon-squeezy",
];

const STRIPE_FILES = [
  "src/app/api/stripe/webhook/route.ts",
  "src/app/api/stripe/webhook",
  "src/app/api/stripe",
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
    premium_features = {},
    pages = [],
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
