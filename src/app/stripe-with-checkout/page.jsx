"use client";
import CheckoutForm from "@/app/components/stripe/CheckoutForm";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function DonatePage() {
  const [uiMode, setUiMode] = useState("hosted");

  return (
    <div className="container mx-auto flex justify-center p-5">
      <div className="flex flex-col gap-6">
        <div>
          <h1>Example Custom Checkout Page</h1>
          <p>Place your order</p>
        </div>
        <RadioGroup onValueChange={(e) => setUiMode(e)} defaultValue="hosted">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="embedded" id="embedded" />
            <Label htmlFor="embedded">Embedded</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hosted" id="hosted" />
            <Label htmlFor="hosted">Hosted</Label>
          </div>
        </RadioGroup>
        <CheckoutForm uiMode={uiMode} />
      </div>
    </div>
  );
}
