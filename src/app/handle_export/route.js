"use server";
import fs from "fs";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";

export async function POST() {
  const folder_path = path.join(process.cwd());

  var zip = new AdmZip();

  zip.addLocalFolder(folder_path, undefined, (fname) => {
    if (fname.startsWith("node_modules")) {
      return false;
    }
    return true;
  });

  var zipFileContents = zip.toBuffer();
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
