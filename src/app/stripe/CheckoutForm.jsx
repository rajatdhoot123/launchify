"use client";

import React, { useState } from "react";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import getStripe from "@/lib/stripe/client";
import { formatAmountForDisplay } from "@/app/utils/stripe";
import { createCheckoutSession } from "@/app/actions/stripe";
import { AMOUNT_STEP, CURRENCY, MAX_AMOUNT, MIN_AMOUNT } from "./contant";
import { Button } from "@/components/ui/button";

export default function CheckoutForm(props) {
  const [loading] = useState(false);
  const [input, setInput] = useState({
    template_price: Math.round((MAX_AMOUNT / AMOUNT_STEP) / 3),
  });
  const [clientSecret, setClientSecret] = useState(null);

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const formAction = async (data) => {
    const uiMode = data.get("uiMode");
    const { client_secret, url } = await createCheckoutSession(data);

    if (uiMode === "embedded") return setClientSecret(client_secret);

    window.location.assign(url);
  };

  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="uiMode" value={props.uiMode} />
        <input type="hidden" name="template_id" value={props.templateId} />
        <label className="flex flex-col justify-center items-center my-2">
          <input
            type="range"
            className="bg-black range accent-gray-600 w-full"
            name="template_price"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step={AMOUNT_STEP}
            currency={CURRENCY}
            onChange={handleInputChange}
            value={input.template_price}
          ></input>
          <span>
            {formatAmountForDisplay(MIN_AMOUNT, CURRENCY)}-
            {formatAmountForDisplay(MAX_AMOUNT, CURRENCY)}
          </span>
        </label>
        <Button className="w-full" type="submit" disabled={loading}>
          Buy {formatAmountForDisplay(input.template_price, CURRENCY)}
        </Button>
      </form>
      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={getStripe()}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : null}
    </>
  );
}
