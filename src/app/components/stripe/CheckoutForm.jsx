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
    customDonation: Math.round(MAX_AMOUNT / AMOUNT_STEP),
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
        <label>
          Custom amount to pay ({formatAmountForDisplay(MIN_AMOUNT, CURRENCY)}-
          {formatAmountForDisplay(MAX_AMOUNT, CURRENCY)}):
          <input
            type="range"
            className="checkout-style"
            name="customDonation"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step={AMOUNT_STEP}
            currency={CURRENCY}
            onChange={handleInputChange}
            value={input.customDonation}
          ></input>
        </label>
        <div className="test-card-notice">
          Use any of the{" "}
          <a
            href="https://stripe.com/docs/testing#cards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe test cards
          </a>{" "}
          for this demo, e.g.{" "}
          <div className="card-number">
            4242<span></span>4242<span></span>4242<span></span>4242
          </div>
        </div>
        <Button
          className="checkout-style-background"
          type="submit"
          disabled={loading}
        >
          Donate {formatAmountForDisplay(input.customDonation, CURRENCY)}
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
