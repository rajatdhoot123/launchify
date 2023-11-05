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
import Pricing4 from "@/app/components/pricing/varient-4";
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
  "varient-4": <Pricing4 />,
};

export default function Home() {
  const [state, setState] = useState({
    navbar: "varient-1",
    hero: "varient-1",
    pricing: "varient-1",
  });

  const handleExport = async () => {
    const response = await fetch("/handle_export", {
      method: "POST",
      body: JSON.stringify({
        nav_varient: state.navbar,
        pricing_varient: state.pricing,
        hero_varient: state.hero,
      }),
    });
    const res_blob = await response.blob();
    const url = window.URL.createObjectURL(res_blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "uicomponents";
    link.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/12 h-full bg-white shadow-lg p-5 space-y-6 flex flex-col justify-between">
          <div>
            <div className="space-y-2">
              <div className="text-sm font-bold">Select Navbar</div>
              <Select
                list={Object.keys(NAVBAR)}
                setState={setState}
                item_key="navbar"
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold">Select Hero</div>
              <Select
                list={Object.keys(HERO)}
                setState={setState}
                item_key="hero"
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-bold">Select Pricing</div>
              <Select
                list={Object.keys(PRICING)}
                setState={setState}
                item_key="pricing"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleExport}
              className="font-bold bg-blue-500 w-full text-white p-2 rounded-lg"
            >
              Export
            </button>
          </div>
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
