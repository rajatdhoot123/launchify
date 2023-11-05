"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";

export async function POST() {
  const ui_components = path.join(process.cwd(), "uicomponents");

  const zip = new AdmZip();

  zip.addLocalFolder(ui_components);

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
