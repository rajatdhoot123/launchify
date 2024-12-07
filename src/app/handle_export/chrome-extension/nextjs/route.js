import { NextResponse } from "next/server";
import { auth } from "@/auth"
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";
import AdmZip from "adm-zip";
import { eq } from "drizzle-orm";
import path from "path";
import { NECESSARY_FILES } from "@/boilercode/constants";
import { readFileSync } from "fs";
import * as prettier from "prettier";
import generateLayout from "../../../utils__/generateLayout";

const getFilePath = (file) => {
  return file.split("/").length > 1
    ? file.split("/").slice(0, -1).join("/")
    : undefined;
};

export async function GET(req) {
  const session = await auth()

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

  const zip = new AdmZip();
  const package_json_path = path.join(process.cwd(), "package.json");
  const ui_components = path.join(process.cwd(), "uicomponents");

  const packageJson = JSON.parse(readFileSync(package_json_path, "utf-8"));
  delete packageJson.dependencies["@measured/puck"];
  delete packageJson.dependencies["nodemailer"];

  NECESSARY_FILES.forEach((file) => {
    zip.addLocalFile(`${ui_components}/${file}`, getFilePath(file));
  });

  zip.addFile(
    "src/app/layout.js",
    Buffer.from(
      await prettier.format(generateLayout(), {
        parser: "babel",
      })
    )
  );

  zip.addFile(
    "package.json",
    Buffer.from(JSON.stringify(packageJson, null, 2)),
    "utf8"
  );

  const extension_path = path.join(process.cwd(), "extension-boilerplate");
  const app_path = path.join(process.cwd(), "/src");

  zip.addLocalFolder(`${extension_path}`, "/src/app");
  zip.addLocalFolder(`${ui_components}/src/app/styles`, "/src/app/styles");
  zip.addLocalFolder(`${ui_components}/src/components`, "/src/components");
  zip.addLocalFolder(`${app_path}/lib/supabase`, "/src/lib/supabase");

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
