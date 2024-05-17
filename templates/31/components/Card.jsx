import React from "react";

const PricingCard = ({
  title = "Calendar",
  desc = "Schedule your posts in advance to engage with your followers regularly and at their most active time. Even recurrently.",
  img,
  color = 'white'
}) => {
  return (
    <div className="rounded-2xl py-10 md:py-20 px-8  space-y-4  gray-gradient  max-md:mx-auto w-full ">
      <div className={`text-${color} text-center space-y-4`}>
        <img src={img.src} alt="" className="mx-auto" />
        <p className="text-3xl font-extrabold">{title}</p>
        <div className="flex justify-center">
        <p className="max-w-sm text-lg">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
