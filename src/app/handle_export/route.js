"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";
import generateLayout from "../utils/generateLayout";
import generateRootPage from "../utils/generateRootPage";

export async function POST(req) {
  const ui_components = path.join(process.cwd(), "uicomponents");
  const body = await req.json();

  const {
    nav_varient = "varient-1",
    hero_varient = "varient-1",
    pricing_varient = "varient-1",
    testimonials_varient = "varient-1",
    sequence = [],
    ga_id = "",
  } = body;
  const zip = new AdmZip();

  zip.addLocalFolder(ui_components);

  zip.addFile("src/app/layout.js", Buffer.from(generateLayout({ ga_id })));

  zip.addFile(
    "src/app/page.js",
    Buffer.from(
      generateRootPage({
        sequence,
        testimonials_varient,
        nav_varient,
        pricing_varient,
        hero_varient,
      })
    ),
    "utf8"
  );

  zip.addFile(
    ".env.local",
    Buffer.from(`
${ga_id && `NEXT_PUBLIC_GOOGLE_ANALYTICS=${ga_id}`}
    `)
  );

  const files_to_delete = [];

  zip.getEntries().forEach(function (entry) {
    const entryName = entry.entryName;
    if (!entry.isDirectory) {
      if (entryName.includes("/hero/")) {
        if (!entryName.includes(hero_varient)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/navbar/")) {
        if (!entryName.includes(nav_varient)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/pricing/")) {
        if (!entryName.includes(pricing_varient)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/testimonials/")) {
        if (!entryName.includes(testimonials_varient)) {
          files_to_delete.push(entry);
        }
      }
    }
    if (entryName.includes("handle_export") || entryName.includes("floater")) {
      files_to_delete.push(entry);
    }
  });

  files_to_delete.forEach((file) => {
    zip.deleteFile(file);
  });

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
