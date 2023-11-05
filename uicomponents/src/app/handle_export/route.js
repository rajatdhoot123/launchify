"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import { readdir } from "fs/promises";

import path from "path";

const isProduction = process.env.NODE_ENV === "production";

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true })).map((dirent) => dirent.name);

export async function POST() {
  const folder_path = path.join(process.cwd());

  const new_path = path.join(process.cwd(), "test_folder");

  console.log({
    new_path: await getDirectories(new_path),
    src_path: await getDirectories(""),
  });
  const zip = new AdmZip();

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
