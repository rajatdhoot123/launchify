"use client";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import albus from "../assets/images/testimonial-albus.svg";
import snape from "../assets/images/testimonial-snape.svg";
import Testimony from "./Testimony";
import img from "../assets/images/testimonial-1.svg";

const dm = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const arr = [
  {
    desc: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    pos: "Manager @ Howarts",
    img: albus,
  },
  {
    desc: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    pos: "Manager @ Slytherin",
    img: snape,
  },
  {
    desc: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    pos: "Manager @ Howarts",
    img: albus,
  },
  
  {
    desc: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    pos: "Manager @ Slytherin",
    img: snape,
  },

  // Add more entries as needed
];

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === arr.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? arr.length - 2 : prev - 1));
  };

  return (
    <div className="pt-12 pb-28 sm:py-20 min-h-screen space-y-7 sm:px-8 lg:px-28 px-6 relative">
      <p className="text-4xl md:text-5xl lg:text-left text-center font-semibold">
        Our customers are{" "}
        <span className={`text-[#3A5FBD] font-bold`}>Kind</span>
      </p>
      <div className="relative z-10 w-fit">
        <div className=" mt-16 flex md:flex-row flex-col gap-16 transition-transform duration-500 ease-in-out">
          {[arr[currentSlide], arr[currentSlide + 1]].map((item, index) => (
            <Testimony
              key={index}
              desc={item.desc}
              name={item.name}
              pos={item.pos}
              img={item.img}
              isActive={index === 0} // Set isActive to true for the first testimonial
            />
          ))}
        </div>
        <div className="absolute flex w-full lg:w-auto justify-center py-4 font-extrabold gap-4 right-0 -bottom-20">
          <button
            onClick={prevSlide}
            className="px-4 py-3 rounded-full bg-[#DBE5FF] transition-colors duration-300 ease-in-out hover:bg-blue-400"
          >
           <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="29"
                viewBox="0 0 26 29"
                fill="none"
              >
                <path
                  d="M20.583 13.2777L5.41634 13.2777"
                  stroke="#0A2640"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 20.8611L5.41667 13.2777L13 5.69439"
                  stroke="#0A2640"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-3 rounded-full bg-[#F3F3F3] transition-colors duration-300 ease-in-out hover:bg-gray-400"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="29"
                viewBox="0 0 26 29"
                fill="none"
              >
                <path
                  d="M5.41699 15.7222H20.5837"
                  stroke="#0A2640"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 8.13887L20.5833 15.7222L13 23.3055"
                  stroke="#0A2640"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          </button>
        </div>
      </div>
      <img
        src={img.src}
        className="hidden lg:block z-0 absolute md:top-0 top-1/4 right-0 md:w-1/3"
        alt=""
      />
    </div>
  );
}

export default Testimonial;
