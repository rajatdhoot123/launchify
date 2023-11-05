"use client";
import Select from "@/app/components/select/varient-1";
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
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path>
  </svg>
);

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

const Floter = ({ setState }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

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

  if (searchParams.get("floater")) {
    return (
      <button
        onClick={() => router.replace("/")}
        className="z-20 bottom-10 fixed right-10 bg-red-400 p-5 rounded-full h-24 w-24 text-xs font-bold text-white"
      >
        Modify
      </button>
    );
  }
  return (
    <div className="z-20 fixed md:top-1/2 md:right-4  md:transform  md:-translate-y-1/2 w-full md:w-3/12 md:h-[80vh] h-full bg-white rounded-lg shadow-xl border border-gray-200 p-5 space-y-6 flex flex-col justify-between">
      <button
        className="right-4 absolute cursor-pointer"
        onClick={() => router.replace("/?floater=true")}
      >
        <CloseIcon />
      </button>
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
  );
};

export default Floter;
