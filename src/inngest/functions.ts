import { inngest } from "./client";
import path from "path";
import AdmZip from "adm-zip";
import {
  DATABASE_FILES,
  LEMON_SQUEEZY_FILES,
  NEXT_AUTH_FILES,
  STRIPE_FILES,
} from "@/boilercode/constants";
import { promises as fsPromises } from "fs";

export const helloWorld = inngest.createFunction(
  { id: "create-zip" },
  { event: "app/create-zip" },
  async ({ event, step }) => {
    const ui_components = path.join(process.cwd(), "uicomponents");
    var zip = new AdmZip();

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
    const zipFileContents = zip.toBuffer();

    await fsPromises.writeFile(
      path.join(process.cwd(), "file.zip"),
      zipFileContents
    );
    return { event, body: "Hello, World!" };
  }
);
