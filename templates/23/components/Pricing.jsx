"use client";
import React, { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import check from "../assets/images/Pricing/tick.svg";
import checkg from "../assets/images/Pricing/tick-green.png";
import Button from "./Button";

const Pricing = () => {
  const arr = [
    {
      id: 1,
      name: "Everything in 'Job Board'",
    },
    {
      id: 2,
      name: "Everything in 'Designer Search'",
    },
    {
      id: 3,
      name: "Swap out listings as needed",
    },
    {
      id: 4,
      name: "Average of 1.1K targeted clicks/mo",
    },
  ];
  const [imageSrc, setImageSrc] = useState(check);
  useEffect(() => {
    const updateImage = () => {
      const src = window.matchMedia("(prefers-color-scheme: light)").matches
        ? check
        : checkg;
      setImageSrc(src);
    };

    updateImage(); // Initial update

    // Listen for changes in color scheme
    window.matchMedia("(prefers-color-scheme: light)");

    // Cleanup
    return () => {
      window.matchMedia("(prefers-color-scheme: light)");
    };
  }, []); // Run effect only once

  return (
      <div className="section items-center pb-16 flex flex-col gap-6">
        <div className="flex justify-center"></div>
        <div>
          <p className="text-4xl font-extrabold max-w-2xl leading-10 text-center">
            Don &apos; t wait, sign up now and get 50% off your first month!
          </p>
        </div>
        <div></div>

        <div>
          {/* pricing cards */}
          <div className="flex flex-col flex-wrap md:flex-row items-start justify-center gap-10">
            {/* cards */}
            {/* card 1 free */}
            <PricingCard
              features={3}
              start={0}
              text="Try for Free"
              variant={"light"}
              price={10}
              desc="Let top creative talent come to you by posting your job listing on #1 Design Jobs Board."
            />
            {/* card 2 Paid */}
            <PricingCard title="Business" deal="" />
          </div>
          <div className="w-full mt-10 border text-left shadow border-[#E0E3E8]/50 rounded-lg px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:ml-10 space-y-4">
                <div className="space-y-1">
                  <p className="text-3xl font-semibold">Professional</p>
                  <p className="text-[#536174]">
                    For Individuals and Small Teams
                  </p>
                </div>
                <div className="flex">
                  <span className="text-3xl font-semibold">$</span>
                  <div className="flex items-center gap-2 font-medium">
                    <p className="text-3xl lg:text-5xl font-extrabold">
                      Custom
                    </p>
                    <p className="text-[#98A2B2]">per month</p>
                  </div>
                </div>
              </div>
              {/* right section  */}
              <div className="md:w-1/2 space-y-4">
                <div className="">
                  <p className="font-medium text-xl">Include</p>
                  <p className="text-[#536174]">
                    Everything you get in this plan{" "}
                  </p>
                </div>
                <ul className="card-features space-y-4">
                  {arr.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="flex p-[1.5px] rounded-full">
                        <img
                          src={imageSrc.src}
                          alt={item.name}
                          width={14}
                          height={8.3}
                        />
                      </div>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="md:pr-32">
                  <Button text={"Contact Us"}></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Pricing;
