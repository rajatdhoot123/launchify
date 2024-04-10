import React from "react";
import Tag from "./Tag";

const arr = [
  {
    title: "Professional",
    desc: "For individuals that need advanced recording & editing.",
    for: "For startups",
    cost: "9",
    button: "Contact us",
  },
  {
    title: "Team",
    desc: "For teams that need advanced sharing & reporting",
    for: "",
    cost: "29",
    button: "Start Free Trail",
  },
];

const Pricing = () => {
  return (
    <div className="bg-[#DBE5FF] sm:px-8 lg:px-28 px-6 py-20">
      {/* Heading  */}
      <div className="flex items-center flex-col gap-4">
        <p className="text-center font-semibold text-5xl">Our best pricing</p>
        <p className="text-center text-base font-medium">
          We offer great price plans to simplify your business
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-16 flex flex-col sm:w-5/6  gap-10">
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
