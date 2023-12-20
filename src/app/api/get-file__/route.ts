import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";
import fs from "fs";
import { join } from "path";
export async function POST(req: NextRequest) {
  const {
    files = [],
  }: {
    files: Array<string>;
  } = await req.json();

  const session = await getServerSession(AUTH_OPTIONS);

  if (!session?.user) {
    return NextResponse.json(
      { message: "Contact hello.kwiktwik@gmail.com for access" },
      { status: 200 }
    );
  }

  const response = await Promise.all(
    files.map(async ({ item_id, varient }: any) => {
      const data = fs.readFileSync(
        join(
          process.cwd(),
          "uicomponents",
          `src/app/components/${item_id}/${varient}.jsx`
        ),
        "utf8"
      );
      return {
        item_id,
        varient,
        key: `src/app/components/${item_id}/${varient}.jsx`,
        content: data,
      };
    }, {})
  );

  console.log(response);

  return NextResponse.json(response);
}
