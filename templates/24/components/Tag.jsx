import React from "react";
import { Inter } from "next/font/google";


const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  });
const Tag = (props) => {
  return (
    <div>
      <div className="bg-pricingbg rounded-xl px-10 py-10  sm:py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col gap-6 ">
            <div className="flex gap-4 md:flex-row flex-col md:items-end items-start">
              <p className="text-4xl font-semibold">{props.item.title} </p>
              <span className={`font-bold font-lg tracking-tighter bg-[#DBE5FF] text-[#121A21] px-4 py-1 rounded-md ${props.item.for ? '' : 'hidden'}`}>
                {props.item.for}
              </span>
            </div>
            <p className="max-w-auto md:max-w-md md:text-2xl text-lg">{props.item.desc}</p>
          </div>

          <div>
            <div className="flex flex-col gap-6 items-start md:items-center">
              <p className="text-7xl font-bold text-left md:text-right">${props.item.cost}</p>
              <button className={` bg-pricingbtn rounded-lg text-white dark:text-black dark:font-semibold w-fit px-12 py-3 font-semibold`}>{props.item.button} &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
