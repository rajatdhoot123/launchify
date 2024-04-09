"use client";
import React, { useState } from "react";

const Services = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full lg:block md:flex flex-col items-center rounded-lg z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative"> {/* Added relative positioning */}
        <img src={props.img.src} alt="" className="w-full" />
        <div
          className={`absolute right-0  bottom-0 bg-[#1D2939] rounded-full transition-all text-2xl place-content-center ${
            isHovered ? "hover:bg-orange-600 transform hover:rotate-45" : ""
          }`}
        >
          <div className="md:w-24 w-20 md:h-24 h-20 flex justify-center text-gray-50 items-center text-3xl">
            &#x2197;
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="rounded-full text-lg bg-gray-100 w-fit px-6 py-2 text-gray-700 mt-4 ">
            {props.title}
          </p>
        </div>
        <div className="flex gap-12  text-orange-400">
          <div>
            &#9679; <span className="text-gray-700">{props.maker}</span>
          </div>
          <div>
            &#9679;{" "}
            <span className="text-gray-700">{props.dateOfCreation}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-700 text-xl ">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
