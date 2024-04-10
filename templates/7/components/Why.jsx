import React from "react";
import star from "../assets/images/star.svg";
import chat from "../assets/images/chat.svg";
import clock from "../assets/images/clock.svg";

const arr = [
  {
    img: star,
    title: "Single platform",
    desc: "We provide the most comprehensive approach to every user",
  },
  {
    img: chat,
    title: "Best in class support",
    desc: "We are there for you with quick & reliable responses from us",
  },
  {
    img: clock,
    title: "Productivity in time",
    desc: "Automated and responses for everyone & reliable responses ",
  },
];

const Why = () => {
  return (
    <div className="">
      {/* heading */}
      <div className="flex justify-center py-10 ">
        <p className="text-[#1A1A1A] text-5xl font-semibold">Why use Kind</p>
      </div>

      <div className="flex justify-center gap-6 md:flex-row flex-col items-center">
        {arr.map((item, index) => ( 
          <div key={index} className="flex flex-col gap-4  items-center">
            <img src={item.img.src} alt="" /> 
            <p className="text-xl font-extrabold text-center uppercase tracking-wide">{item.title}</p>
            <p className="w-3/4 text-center font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
