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

  const is_next_auth = premium_features.next_auth;
  const is_database = premium_features.database;

  const packageJson = JSON.parse(fs.readFileSync(package_json_path, "utf-8"));

  delete packageJson.dependencies["axios"];
  delete packageJson.dependencies["@craftjs/core"];
  // Remove a dependency based on a condition
  if (!(is_database && is_next_auth)) {
    delete packageJson.dependencies["drizzle-orm"];
    delete packageJson.devDependencies["drizzle-kit"];
    delete packageJson.scripts["postinstall"];
    delete packageJson.scripts["drizzle:push"];
    delete packageJson.scripts["introspect"];
  }

  if (!premium_features.stripe) {
    delete packageJson.dependencies["stripe"];
  }

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

  const zip = new AdmZip();

  components.forEach(({ item_id, variant }) => {
    zip.addFile(
      `src/app/components/${item_id}/index.jsx`,
      Buffer.from(
        fs.readFileSync(
          path.join(
            process.cwd(),
            "uicomponents",
            `src/app/components/${item_id}/${variant}.jsx`
          ),
          "utf-8"
        )
      )
    );
  });

  const pages_to_add = pages
    .filter((page) => page.selected)
    .map((item) => `src/app/(markdown)/${item.item_id}/page.mdx`);

  zip.addLocalFolder(ui_components, "", (file) => {
    if (file.includes("lemon-squeezy")) {
      if (premium_features.lemon_squeezy) {
        return true;
      }
      return false;
    }
    if (file.includes("stripe")) {
      if (premium_features.stripe) {
        return true;
      }
      return false;
    }
    if (SUPPORT_PAGES.includes(file)) {
      return pages_to_add.includes(file);
    }
    if (DATABASE_FILES.includes(file)) {
      if (is_database || is_next_auth) {
        return true;
      }
      return false;
    }
    if (NEXT_AUTH_FILES.includes(file)) {
      if (is_next_auth) {
        return true;
      }
      return false;
    }
    if (file.startsWith("src/app/components")) {
      return false;
    }
    if (file.includes("__") || ["src/app/globals.css"].includes(file)) {
      return false;
    }

    if (file.includes("/api/chat") || file.includes("/api/retrieval")) {
      return false;
    }

    return true;
  });

  zip.addFile(
    "src/app/layout.js",
    Buffer.from(
      await prettier.format(
        generateLayout({ ga_id, next_auth: is_next_auth, crisp_id }),
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
    "src/app/globals.css",
    Buffer.from(
      `
@tailwind base;
@tailwind components;
@tailwind utilities;
      `,
      {
        parser: "babel",
      }
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
