export const NECESSARY_FILES = [
  ".gitignore",
  ".eslintrc.json",
  "tailwind.config.js",
  "postcss.config.js",
  "tsconfig.json",
  ".env.example",
  "next.config.mjs",
  "src/lib/utils.js",
];

export const SHADCN_UI_FOLDER = ["src/components/ui"];
export const SHADCN_UI_FILES = ["components.json"];

export const NECESSARY_FOLDERS = ["public", "src/app/styles"];

export const DATABASE_FILES = [
  "src/lib/database/db.js",
  "src/lib/database/schema.js",
  "drizzle.config.js",
];

export const NEXT_AUTH_FILES = [
  "src/app/auth/EmailSignIn.js",
  "src/app/auth/GoogleSignIn.js",
  "src/app/auth/LoginButton.js",
  "src/app/auth/authenticated/page.js",
  "src/app/auth/signin/page.js",
  "src/app/nextauth/provider.js",
  "src/app/api/auth/[...nextauth]/route.ts",
  "src/app/api/auth/[...nextauth]/authOptions.ts",
];

export const LEMON_SQUEEZY_FILES = [
  "src/app/api/lemon-squeezy/webhook/route.ts",
];

export const STRIPE_FILES = ["src/app/api/stripe/webhook/route.ts"];

export const SUPPORT_PAGES = [
  "src/app/(markdown)/terms-condition/page.mdx",
  "src/app/(markdown)/privacy-policy/page.mdx",
];

export const MARKDOWN_PAGES = ["src/markdown.css", "src/mdx-components.tsx"];

export const SITE_MAP_FILES = ["next-sitemap.config.js"];
