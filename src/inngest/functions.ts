import { inngest } from "./client";
import path from "path";
import AdmZip from "adm-zip";
import {
  DATABASE_FILES,
  LEMON_SQUEEZY_FILES,
  NECESSARY_FILES,
  NECESSARY_FOLDERS,
  NEXT_AUTH_FILES,
  SHADCN_UI_FILES,
  SHADCN_UI_FOLDER,
  STRIPE_FILES,
} from "@/boilercode/constants";
import { promises as fsPromises, readFileSync } from "fs";

export const helloWorld = inngest.createFunction(
  { id: "create-zip" },
  { event: "app/create-zip" },
  async ({ event, step }) => {
    const ui_components = path.join(process.cwd(), "uicomponents");
    const package_json_path = path.join(process.cwd(), "package.json");

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
      "package.json",
      Buffer.from(JSON.stringify(packageJson, null, 2)),
      "utf8"
    );
    const zipFileContents = zip.toBuffer();

    await fsPromises.writeFile(
      path.join(process.cwd(), "file.zip"),
      zipFileContents
    );
    return { event, body: "Hello, World!" };
  }
);
