import { NextResponse } from "next/server";
import { auth } from "@/auth"
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
const githubToken = process.env.GITHUB_CHROME_EXTENSION_TOKEN;
const repoOwner = "rajatdhoot123";
const repoName = "chrome-extension-boilerplate";
const branch = "master";

export async function GET(req) {
  const session = await auth()

  if (!session) {
    return NextResponse.json(
      { message: "Subscribe to export" },
      { status: 403 }
    );
  }

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

  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/tarball`;
  const headers = {
    Authorization: `token ${githubToken}`,
  };

  const response = await fetch(url, { headers, method: "GET" });

  if (response.ok) {
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename=${repoName}-${branch}.zip`,
      },
    });
  } else {
    return new NextResponse(
      JSON.stringify({ error: "Failed to download repository" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
