"use server";
import AdmZip from "adm-zip";
import { NextResponse } from "next/server";
import path from "path";
import generateLayout from "../utils__/generateLayout";
import generateRootPage from "../utils__/generateRootPage";
import * as prettier from "prettier";

export async function POST(req) {
  const ui_components = path.join(process.cwd(), "uicomponents");
  const body = await req.json();

  const { components, ga_id = "", next_auth } = body;
  const zip = new AdmZip();

  const file_to_add = components.map(({ item_id, varient }) => {
    return `src/app/components/${item_id}/${varient}.jsx`;
  });

  zip.addLocalFolder(ui_components, "", (file) => {
    if (file.startsWith("src/app/components")) {
      if (file_to_add.includes(file)) {
        return true;
      }
      return false;
    }
    if (file.includes("__")) {
      return false;
    }

    if (file.includes("auth")) {
      if (next_auth === true) {
        return true;
      }
      return false;
    }
    return true;
  });

  zip.addFile(
    "src/app/layout.js",
    Buffer.from(
      await prettier.format(generateLayout({ ga_id }), {
        parser: "babel",
      })
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
${ga_id && `NEXT_PUBLIC_GOOGLE_ANALYTICS=${ga_id}`}
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
