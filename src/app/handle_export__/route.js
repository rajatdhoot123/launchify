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
import { mergeCode } from "../api/code-generation__/merge-code";
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
    premium_features,
    pages = [],
  } = body;

  // mergeCode({ apiKey: process.env.OPEN_AI_KEY , html_code: , jsx_code: });

  const is_next_auth = premium_features.find(
    ({ item_id }) => item_id === "next_auth"
  )?.selected;

  const is_database = premium_features.find(
    ({ item_id }) => item_id === "database"
  )?.selected;
  const packageJson = JSON.parse(fs.readFileSync(package_json_path, "utf-8"));

  delete packageJson.dependencies["axios"];
  delete packageJson.dependencies["cheerio"];
  delete packageJson.dependencies["@craftjs/core"];
  // Remove a dependency based on a condition
  if (!(is_database && is_next_auth)) {
    delete packageJson.dependencies["drizzle-orm"];
    delete packageJson.devDependencies["drizzle-kit"];
    delete packageJson.scripts["postinstall"];
    delete packageJson.scripts["drizzle:push"];
    delete packageJson.scripts["introspect"];
  }

  const session = await getServerSession(AUTH_OPTIONS);

  const is_premium_user = ["rajatdhoot123@gmail.com"].find(
    (puser) => puser === session?.user?.email
  );

  const zip = new AdmZip();

  const file_to_add = components.map(({ item_id, varient }) => {
    return `src/app/components/${item_id}/${varient}.jsx`;
  });

  const jsx_file = fs.readFileSync(file_to_add[1], "utf8");

  const jsx_code = `import Link from "next/link";\n\nexport default function Hero() {\n  return (\n    <>\n      <section className="container mx-auto flex items-center justify-center bg-white">\n        <div className="mx-auto max-w-[43rem]">\n          <div className="text-center">\n            <p className="text-lg font-medium leading-8 text-indigo-600/95">\n              Welcome to the Future of Brand Consistency\n            </p>\n            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">\n              Seamless Brand Integration Across All Platforms\n            </h1>\n            <p className="mt-3 text-lg leading-relaxed text-slate-400">\n              Specify streamlines your brand's presence by seamlessly syncing design tokens and assets, ensuring uniformity at every touchpoint.\n            </p>\n          </div>\n\n          <div className="mt-6 flex items-center justify-center gap-4">\n            <Link\n              href="/app__"\n              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"\n            >\n              Start Your Free Journey\n            </Link>\n            <a\n              className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"\n              target="_blank"\n            >\n              Explore a Live Demo\n            </a>\n          </div>\n        </div>\n      </section>\n    </>\n  );\n}`;

  // const response = await mergeCode({
  //   jsx_code: jsx_file,
  //   apiKey: process.env.OPEN_AI_KEY,
  //   html_code:
  //     '<section class="container mx-auto flex items-center justify-center bg-white">\n  <div class="mx-auto max-w-[43rem]">\n    <div class="text-center">\n      <p class="text-lg font-medium leading-8 text-indigo-600/95">Welcome to the Future of Brand Consistency</p>\n      <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Seamless Brand Integration Across All Platforms</h1>\n      <p class="mt-3 text-lg leading-relaxed text-slate-400">Specify streamlines your brand\'s presence by seamlessly syncing design tokens and assets, ensuring uniformity at every touchpoint.</p>\n    </div>\n    <div class="mt-6 flex items-center justify-center gap-4">\n      <a class="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700" href="/app__">Start Your Free Journey</a>\n      <a class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50" target="_blank">Explore a Live Demo</a>\n    </div>\n  </div>\n</section>',
  // });
  // console.log(JSON.stringify(response));

  const pages_to_add = pages
    .filter((page) => page.selected)
    .map((item) => `src/app/(markdown)/${item.item_id}/page.mdx`);

  zip.addLocalFolder(ui_components, "", (file) => {
    if (SUPPORT_PAGES.includes(file)) {
      return pages_to_add.includes(file);
    }
    if (DATABASE_FILES.includes(file)) {
      if (!is_premium_user) {
        return false;
      }
      if (is_database || is_next_auth) {
        return true;
      }
      return false;
    }
    if (NEXT_AUTH_FILES.includes(file)) {
      if (!is_premium_user) {
        return false;
      }
      if (is_next_auth) {
        return true;
      }
      return false;
    }
    if (file.startsWith("src/app/components")) {
      if (file_to_add.includes(file)) {
        return true;
      }
      return false;
    }
    if (file.includes("__")) {
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
    "src/app/code.jsx",
    Buffer.from(
      await prettier.format(jsx_code, {
        parser: "babel",
      })
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

  zip.addFile("package.json", Buffer.from(JSON.stringify(packageJson)), "utf8");
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
