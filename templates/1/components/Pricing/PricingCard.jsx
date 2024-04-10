import React from 'react'
import { config } from "../../config/index";
import check from '../../assets/icons/pricing/check.svg'
import Image from 'next/image';
import Button from '../Button/Button';

const PricingCard = ({ features = config.cardFeatures.length, text="Subscribe Now", variant="light" }) => {
  return (
    <div className="card gray-gradient max-w-[500px] max-md:mx-auto max-md:max-w-[400px]">
      <div className="card-header">
        <h3 className="text-2xl font-bold tracking-wide leading-10">
          Free <br></br> $0
        </h3>
        <p className="text-md text-[#7d7d82]">
          Description of the tier list will go here, copy should be concise and
          impactful.
        </p>
      </div>

      <hr className="bg-[#3e3e3e] opacity-50" />

      <ul className="card-features">
        {config.cardFeatures.slice(0, features).map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="flex items-center justify-center p-[1.5px] bg-[#4D4D4D] rounded-full">
              <Image 
                src={check}
                alt={item.name}
                width={14}
                height={8.3}
              />
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      
      <Button text={text} variant={variant} />
    </div>
  );
};

export default PricingCard
