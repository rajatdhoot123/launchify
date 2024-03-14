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

  const data = {
    type: "orders",
    id: "2290082",
    attributes: {
      store_id: 49190,
      customer_id: 2491725,
      identifier: "464d65f5-0cff-4fda-a687-184767d37dd8",
      order_number: 491903,
      user_name: "helo",
      user_email: "hello.kwiktwik@gmail.com",
      currency: "USD",
      currency_rate: "1.00000000",
      tax_name: "GST",
      tax_rate: 18,
      tax_inclusive: false,
      status: "paid",
      status_formatted: "Paid",
      refunded: false,
      refunded_at: null,
      subtotal: 2900,
      discount_total: 0,
      tax: 522,
      setup_fee: 0,
      total: 3422,
      subtotal_usd: 2900,
      discount_total_usd: 0,
      tax_usd: 522,
      setup_fee_usd: 0,
      total_usd: 3422,
      subtotal_formatted: "$29.00",
      discount_total_formatted: "$0.00",
      tax_formatted: "$5.22",
      setup_fee_formatted: "$0.00",
      total_formatted: "$34.22",
      first_order_item: {
        id: 2250951,
        order_id: 2290082,
        product_id: 125339,
        variant_id: 145239,
        price_id: 137616,
        product_name: "Boilercode App",
        variant_name: "Default",
        price: 2900,
        quantity: 1,
        created_at: "2024-03-14T05:07:49.000000Z",
        updated_at: "2024-03-14T05:07:49.000000Z",
        test_mode: true,
      },
      urls: {
        receipt:
          "https://app.lemonsqueezy.com/my-orders/464d65f5-0cff-4fda-a687-184767d37dd8?signature=03ecfa594268badd76ffb8561eeabba819f332da546545ce0333b1d931796ed5",
      },
      created_at: "2024-03-14T05:07:48.000000Z",
      updated_at: "2024-03-14T05:07:49.000000Z",
      test_mode: true,
    },
    relationships: {
      store: {
        links: {
          related: "https://api.lemonsqueezy.com/v1/orders/2290082/store",
          self: "https://api.lemonsqueezy.com/v1/orders/2290082/relationships/store",
        },
      },
      customer: {
        links: {
          related: "https://api.lemonsqueezy.com/v1/orders/2290082/customer",
          self: "https://api.lemonsqueezy.com/v1/orders/2290082/relationships/customer",
        },
      },
      "order-items": {
        links: {
          related: "https://api.lemonsqueezy.com/v1/orders/2290082/order-items",
          self: "https://api.lemonsqueezy.com/v1/orders/2290082/relationships/order-items",
        },
      },
      subscriptions: {
        links: {
          related:
            "https://api.lemonsqueezy.com/v1/orders/2290082/subscriptions",
          self: "https://api.lemonsqueezy.com/v1/orders/2290082/relationships/subscriptions",
        },
      },
      "license-keys": {
        links: {
          related:
            "https://api.lemonsqueezy.com/v1/orders/2290082/license-keys",
          self: "https://api.lemonsqueezy.com/v1/orders/2290082/relationships/license-keys",
        },
      },
      "discount-redemptions": {
        links: {
          related:
            "https://api.lemonsqueezy.com/v1/orders/2290082/discount-redemptions",
          self: "https://api.lemonsqueezy.com/v1/orders/2290082/relationships/discount-redemptions",
        },
      },
    },
    links: { self: "https://api.lemonsqueezy.com/v1/orders/2290082" },
  };

  const {
    meta: { event_name, test_mode },
  } = body;

  await db.insert(subscriptions).values({
    email_id: "rajatdhoot123@gmail.com",
    is_active: false,
  });

  switch (event_name) {
    case ORDER_CREATED:
      return NextResponse.json({ message: "order created" });
    case ORDER_REFUNDED:
      return NextResponse.json({ message: "order refunded" });
    case SUBSCRIPTION_CREATED:
      return NextResponse.json({ message: "subscription created" });
    case SUBSCRIPTION_UPDATED:
      return NextResponse.json({ message: "subscription updated" });
    case SUBSCRIPTION_CANCELLED:
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
