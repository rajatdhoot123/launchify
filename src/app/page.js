"use client";
import Navbar1 from "@/app/components/navbar/varient-1";
import Navbar2 from "@/app/components/navbar/varient-2";
import Navbar3 from "@/app/components/navbar/varient-3";
import Hero1 from "@/app/components/hero/varient-1";
import Hero2 from "@/app/components/hero/varient-2";
import Hero3 from "@/app/components/hero/varient-3";
import Hero4 from "@/app/components/hero/varient-4";
import Pricing1 from "@/app/components/pricing/varient-1";
import Pricing2 from "@/app/components/pricing/varient-2";
import Pricing3 from "@/app/components/pricing/varient-3";
import Select from "@/app/components/select/varient-1";
import { useState } from "react";

const NAVBAR = {
  "varient-1": <Navbar1 />,
  "varient-2": <Navbar2 />,
  "varient-3": <Navbar3 />,
};

const HERO = {
  "varient-1": <Hero1 />,
  "varient-2": <Hero2 />,
  "varient-3": <Hero3 />,
  "varient-4": <Hero4 />,
};

const PRICING = {
  "varient-1": <Pricing1 />,
  "varient-2": <Pricing2 />,
  "varient-3": <Pricing3 />,
};

export default function Home() {
  const [state, setState] = useState({
    navbar: "varient-1",
    hero: "varient-1",
    pricing: "varient-1",
  });
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/12 h-full bg-white shadow-lg p-5 space-y-6">
          <Select setState={setState} item_key="navbar" />
          <Select setState={setState} item_key="hero" />
          <Select setState={setState} item_key="pricing" />
        </div>
        <div className="w-full overflow-scroll">
          {NAVBAR[state.navbar]}
          {HERO[state.hero]}
          {PRICING[state.pricing]}
        </div>
      </div>
    </>
  );
}
