import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server";
import { codeGenerate } from "./code-generate";

export async function POST(req: NextRequest) {
  const {
    image,
    apiKey = process.env.OPEN_AI_KEY,
    text,
    // theme = "light",
    previousPreviews = [],
  }: {
    image: string;
    apiKey: string;
    text: string;
    // theme?: string;
    previousPreviews;
  } = await req.json();

  const session = await auth()

  const is_premium_user = ["rajatdhoot123@gmail.com"].find(
    (puser) => puser === session?.user?.email
  );

  if (!is_premium_user) {
    return NextResponse.json(
      { message: "Contact hello.kwiktwik@gmail.com for access" },
      { status: 200 }
    );
  }
  if (!apiKey) throw Error("You need to provide an API key (sorry)");

  const response = await codeGenerate({
    image,
    apiKey,
    text,
    previousPreviews,
  });

  return NextResponse.json(response);
}
