'use client'
import React, { useEffect, useState } from "react";
import check from "../assets/images/Pricing/tick.svg";
import checkg from "../assets/images/Pricing/tick-green.png";
import Button from "./Button";
const cardFeatures = [
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
  {
    id: 5,
    name: "Full-Time or Freelance Hiring",
  },
  {
    id: 6,
    name: "24/7 support",
  },
];

const PricingCard = ({
  title = "Starter",
  features = cardFeatures.length,
  text = "Contact Us",
  variant = "light",
  price = "49",
  start = 3,
  deal = "Best Deal",
}) => {
  const [imageSrc, setImageSrc] = useState(check);
  useEffect(() => {
    const updateImage = () => {
      const src = window.matchMedia('(prefers-color-scheme: light)').matches
        ? check
        : checkg;
      setImageSrc(src);
    };

    updateImage(); // Initial update

    // Listen for changes in color scheme
    window.matchMedia('(prefers-color-scheme: light)');

    // Cleanup
    return () => {
      window.matchMedia('(prefers-color-scheme: light)');
    };
  }, []); // Run effect only once

  return (
    <div className="card  rounded-2xl py-8 px-8 lg:px-20 w-full md:w-auto space-y-4 border border-[#E0E3E8]/40 shadow gray-gradient max-w-[500px] max-md:mx-auto max-md:max-w-[400px]">
      <div className="card-header space-y-3">
        <div>
          <div className="flex flex-col md:flex-row gap-2 items- ">
            <p className="font-semibold text-text text-3xl tracking-wide capitalize leading-10">
              {title}
            </p>
            <p
              className={`text-xs text-black w-fit mb-3  font-semibold px-3 py-1 rounded-full bg-[#B9F143] ${
                deal === "" ? "hidden" : "block"
              }`}
            >
              {deal}
            </p>
          </div>
          <p className="text-light mb-5">For Individuals and Small Teams</p>
        </div>
        <div className="space-y-10">
          <div className="flex">
            <span className="text-3xl font-semibold">$</span>
            <div className="flex items-center gap-2 font-medium">
              <p className="text-5xl font-extrabold">{price}</p>
              <p className="text-[#98A2B2]">per month</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-xl font-medium">Include</p>
            <p className="text-[#536174] font-medium  ">
              Everything you get in this planng
            </p>
          </div>
        </div>
      </div>
      <ul className="card-features space-y-4  ">
        {cardFeatures.slice(start, features).map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="flex p-[1.5px] rounded-full">
            <img src={imageSrc.src} alt={item.name} width={14} height={8.3} />
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <Button text={text} variant={variant} />
    </div>
  );
};

export default PricingCard;
