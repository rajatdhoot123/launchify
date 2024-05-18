import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
// import AdmZip from "adm-zip";
import path from "path";
import { existsSync, readFileSync } from "fs";

export async function POST(req) {
  const session = await getServerSession(AUTH_OPTIONS);

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

  const body = await req.json();
  const { components = [] } = body;
  const ui_components = path.join(process.cwd(), "uicomponents");

  if (!components.length) {
    return NextResponse.json(
      { message: "No component selected" },
      { status: 400 }
    );
  }

  // var zip = new AdmZip();

  const files = [];

  components.forEach(({ item_id, variant }) => {
    let actions = "";
    if (existsSync(`${ui_components}/src/app/components/${item_id}/actions`)) {
      actions = readFileSync(
        path.join(ui_components, `/src/app/components/${item_id}/actions`)
      );
    }
    files.push({
      path: `src/app/components/${item_id}/${variant}.jsx`,
      file: readFileSync(
        path.join(
          ui_components,
          `src/app/components/${item_id}/${variant}.jsx`
        ),
        "utf-8"
      ),
      actions,
    });
  });

  return NextResponse.json(
    { files },
    {
      // Create a new NextResponse for the file with the given stream from the disk
      status: 200, //STATUS 200: HTTP - Ok
    }
  );
}
