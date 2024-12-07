import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { join } from "path";
export async function POST(req: NextRequest) {
  const {
    files = [],
  }: {
    files: Array<string>;
  } = await req.json();

  const session = await auth()

  if (!session?.user) {
    return NextResponse.json(
      { message: "Contact hello.kwiktwik@gmail.com for access" },
      { status: 200 }
    );
  }

  const response = await Promise.all(
    files.map(async ({ item_id, variant }: any) => {
      const data = fs.readFileSync(
        join(
          process.cwd(),
          "uicomponents",
          `src/app/components/${item_id}/${variant}.jsx`
        ),
        "utf8"
      );
      return {
        item_id,
        variant,
        path: `src/app/components/${item_id}/${variant}.jsx`,
        content: data,
      };
    }, {})
  );

  return NextResponse.json(response);
}
