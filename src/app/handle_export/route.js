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
    navbar = "varient-1",
    hero = "varient-1",
    pricing = "varient-1",
    testimonials = "varient-1",
    table = "varient-1",
    accordion = "varient-1",
    cards = "varient-1",
    random_varient = "varient-1",
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
        testimonials,
        navbar,
        pricing,
        hero,
        table,
        cards,
        random_varient,
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
        if (!entryName.includes(hero)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/navbar/")) {
        if (!entryName.includes(navbar)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/pricing/")) {
        if (!entryName.includes(pricing)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/testimonials/")) {
        if (!entryName.includes(testimonials)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/table/")) {
        if (!entryName.includes(table)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/accordion/")) {
        if (!entryName.includes(accordion)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/cards/")) {
        if (!entryName.includes(cards)) {
          files_to_delete.push(entry);
        }
      } else if (entryName.includes("/random-cards/")) {
        if (!entryName.includes(random_varient)) {
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
