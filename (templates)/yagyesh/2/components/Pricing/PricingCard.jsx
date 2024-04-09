import React from "react";
import config from "../../config/index";
import check from "../../assets/icons/pricing/check.svg";
import Image from "next/image";
import Button from "../Button/Button";

const PricingCard = ({
  features = config.cardFeatures.length,
  title,
  price,
  text = "Join Free",
  variant = "dark",
}) => {
  return (
    <div
      className={`card text-dark max-w-[450px] max-md:mx-auto max-md:max-w-[350px] ${
        variant == "dark" ? "bg-white" : "bg-light-green"
      }`}
    >
      <div className="card-header">
        <h3 className="text-3xl font-semibold tracking-wide leading-10">
          {title} 
        </h3>
        <p className="text-md text-[#7d7d82]">
          Description of the tier list will go here, copy should be concise and
          impactful.
        </p>
        <h3 className="text-3xl font-semibold tracking-wide leading-10">
          ${price}
        </h3>
      </div>

      {/* <hr className="opacity-50" /> */}

      <ul className="card-features">
        {config.cardFeatures.slice(0, features).map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="flex items-center justify-center p-[1.5px] rounded-full">
              <Image src={check} alt={item.name} width={14} height={8.3} />
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <Button text={text} variant={variant} className={"py-4"} />
    </div>
  );
};

export default PricingCard;
