import { db } from "@/lib/database/db";
import { document } from "@/lib/database/schema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, content, json } = await request.json();

    const response = await db.insert(document).values({
      title: "test",
      doc: json,
      site: "https://www.rajatdhoot.com",
    });

    console.log(response);

    return NextResponse.json(
      { message: "Blog post created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to create blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
