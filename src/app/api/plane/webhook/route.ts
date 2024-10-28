import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import axios from "axios";
import { createHmac, timingSafeEqual } from "crypto";

function generateTextFromJSON(data) {
  // Extract the relevant information
  const event = data.event;
  const action = data.action;
  const issueId = data.data.id;
  const issueName = data.data.name;
  const issueState = data.data.state.name;
  const createdAt = new Date(data.data.created_at).toLocaleString();
  const updatedAt = new Date(data.data.updated_at).toLocaleString();
  const actor = data.activity.actor;
  const updatedBy = `${actor.display_name} (${actor.email})`;

  // Create a meaningful text
  const resultText = `
------------------------------------------------------------
**Event:** ${event}
**Action:** ${action}
**Issue ID:** ${issueId}
**Issue Name:** ${issueName}
**Issue State:** ${issueState}
**Created At:** ${createdAt}
**Updated At:** ${updatedAt}
**Updated By:** ${updatedBy}
**Actor:** ${actor.first_name} ${actor.last_name}, Email: ${actor.email}
------------------------------------------------------------
`;

  // Return the formatted text
  return resultText.trim();
}

export async function POST(req: NextRequest) {
  const headersList = headers();
  const secretToken = process.env.PLANE_SO_WEBHOOK_SECRET;
  const text = await req.text();

  const hmac = createHmac("sha256", secretToken);
  const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
  const signature = Buffer.from(
    headersList.get("X-Plane-Signature") as string,
    "utf8"
  );

  if (!timingSafeEqual(digest, signature)) {
    return new Response("Invalid signature.", {
      status: 400,
    });
  }

  const body = JSON.parse(text);

  if (body.event === "issue") {
    try {
      const { data: api_data } = await axios.post(
        "https://api.pumble.com/workspaces/66634aa724b432039904134d/incomingWebhooks/postMessage/Qdhutmkh3C6KIHHfrnSN7H5F",
        {
          text: generateTextFromJSON(body),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return NextResponse.json({ message: "Done" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Not handled" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Not handled" }, { status: 400 });
  }
}
