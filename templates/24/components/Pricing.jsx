import React from "react";
import Tag from "./Tag";

const arr = [
  {
    title: "Individual",
    desc: "For individuals that need more efficient way of coding",
    for: "",
    cost: "9",
    button: "Get Started",
  },
  {
    title: "Team",
    desc: "For a team that need advanced coding level like pro",
    for: "",
    cost: "39",
    button: "Get Started",
  },
];

const Pricing = () => {
  return (
    <div className="">
      {/* Heading  */}
      <div className="flex items-center flex-col gap-4">
        <p className="text-center font-bold text-2xl">Pricing for the Pro’s</p>
        <p className="text-center text-base font-medium">
        Choose a plan for the pro in you
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-16 flex flex-col w-full  gap-10">
          {arr.map((item) => (
            <div key={item.title}>
              <Tag item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
