const ORDER_CREATED = "order_created";
const ORDER_REFUNDED = "order_refunded";
const SUBSCRIPTION_CREATED = "subscription_created";
const SUBSCRIPTION_UPDATED = "subscription_updated";
const SUBSCRIPTION_CANCELLED = "subscription_cancelled";
const SUBSCRIPTION_RESUMED = "subscription_resumed";
const SUBSCRIPTION_EXPIRED = "subscription_expired";
const SUBSCRIPTION_PAUSED = "subscription_paused";
const SUBSCRIPTION_UNPAUSED = "subscription_unpaused";
const SUBSCRIPTION_PAYMENT_FAILED = "subscription_payment_failed";
const SUBSCRIPTION_PAYMENT_SUCCESS = "subscription_payment_success";
const SUBSCRIPTION_PAYMENT_RECOVERED = "subscription_payment_recovered";
const SUBSCRIPTION_PAYMENT_REFUNDED = "subscription_payment_refunded";
const SUBSCRIPTION_PLAN_CHANGED = "subscription_plan_changed";
const LICENSE_KEY_CREATED = "license_key_created";
const LICENSE_KEY_UPDATED = "license_key_updated";

import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@/lib/database/db";
import { subscriptions } from "@/lib/database/schema";

export async function POST(req: NextRequest) {
  const headersList = headers();
  const text = await req.text();

  const hmac = crypto.createHmac(
    "sha256",
    process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || ""
  );
  const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
  const signature = Buffer.from(
    headersList.get("x-signature") as string,
    "utf8"
  );

  if (!crypto.timingSafeEqual(digest, signature)) {
    return new Response("Invalid signature.", {
      status: 400,
    });
  }

  const body = JSON.parse(text);

  const {
    meta: { event_name, test_mode },
    data: {
      attributes: {
        user_email,
        product_id,
        first_order_item: { product_id: first_order_product_id = null } = {},
      },
    },
  } = body;

  switch (event_name) {
    case ORDER_CREATED:
      await db.insert(subscriptions).values({
        meta: body,
        product_id: first_order_product_id,
        email_id: user_email,
        is_active: true,
      });
      return NextResponse.json({ message: "order created" });
    case ORDER_REFUNDED:
      return NextResponse.json({ message: "order refunded" });
    case SUBSCRIPTION_CREATED:
      try {
        await db.insert(subscriptions).values({
          meta: body,
          product_id: product_id,
          email_id: user_email,
          is_active: true,
        });
        return NextResponse.json({ message: "subscription created" });
      } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "subscription failed" });
      }
    case SUBSCRIPTION_UPDATED:
      return NextResponse.json({ message: "subscription updated" });
    case SUBSCRIPTION_CANCELLED:
      try {
        await db.insert(subscriptions).values({
          meta: body,
          product_id: product_id,
          email_id: user_email,
          is_active: false,
        });
        return NextResponse.json({ message: "subscription created" });
      } catch (err) {
        return NextResponse.json({ message: "subscription failed" });
      }
      return NextResponse.json({ message: "subscription cancelled" });
    case SUBSCRIPTION_RESUMED:
      return NextResponse.json({ message: "subscription resumed" });
    case SUBSCRIPTION_EXPIRED:
      return NextResponse.json({ message: "subscription expired" });
    case SUBSCRIPTION_PAUSED:
      return NextResponse.json({ message: "subscription paused" });
    case SUBSCRIPTION_UNPAUSED:
      return NextResponse.json({ message: "subscription unpaused" });
    case SUBSCRIPTION_PAYMENT_FAILED:
      return NextResponse.json({ message: "subscription payment failed" });
    case SUBSCRIPTION_PAYMENT_SUCCESS:
      return NextResponse.json({ message: "subscription payment success" });
    case SUBSCRIPTION_PAYMENT_RECOVERED:
      return NextResponse.json({ message: "subscription payment recovered" });
    case SUBSCRIPTION_PAYMENT_REFUNDED:
      return NextResponse.json({ message: "subscription payment refunded" });
    case SUBSCRIPTION_PLAN_CHANGED:
      return NextResponse.json({ message: "subscription plan changed" });
    case LICENSE_KEY_CREATED:
      return NextResponse.json({ message: "license key created" });
    case LICENSE_KEY_UPDATED:
      return NextResponse.json({ message: "license key updated" });
    default:
      return NextResponse.json(
        { message: "something went wrong" },
        { status: 500 }
      );
  }
}
