"use server";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";
import path from "path";
import { getServerSession } from "next-auth/next";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import fs from "fs";
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";
import { eq } from "drizzle-orm";

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

  await inngest.send({
    name: "app/create-zip",
    data: body,
  });

  return NextResponse.json({ name: "Hello Inngest from Next!" });
}
