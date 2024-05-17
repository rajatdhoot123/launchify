'use client'
import { useState } from "react";
import Logo from "../images/logowhite.svg";
import Image from "next/image";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-indigo-950" id="footer">
      <div className="container max-w-navbar mx-auto w-full flex flex-col gap-8 py-8 px-0 lg:px-4 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-0 gap-6 ">
          <p className="text-white text-base md:text-2xl lg:text-4xl py-4 md:py-8 font-semibold text-center md:text-left leading-[2.5rem] lg:leading-relaxed">
            Advanced analytics refers to the use of <br/>complex algorithms
          </p>
          <button className="bg-white rounded-full px-4 md:px-6 text-sm md:text-lg py-2 md:py-3 font-medium text-black flex items-center gap-2 transition duration-300 ease-in-out footer-button-hover">
            Lets Chat
            <span className="footer-arrow text-black">↗</span>
          </button>
        </div>

        <hr className="w-full border-gray-700" />

        <div className="w-full flex flex-col lg:flex-row items-center justify-between text-white gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-5 items-center lg:items-start">
            <div
              className={`w-full lg:w-[20vw] flex gap-4 items-center justify-center lg:justify-start transition-all duration-300`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image src={Logo} alt="JC Logo" width={50} height={50} />
              <p className="font-bold text-lg lg:text-3xl transition-opacity duration-300">
                {!isHovered && "nox"}
                {isHovered && <p className="font-light text-lg">Made By</p>}
                {isHovered && <p className="font-light text-lg">Mayur</p>}
              </p>
            </div>
            <p className="lg:text-xl text-lg text-center lg:text-left leading-5 p-4">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="flex flex-row lg:flex-row justify-between gap-16 p-4 w-full lg:w-auto">
            <div className="flex flex-col gap-8 lg:w-auto">
              <p className="text-white font-semibold text-lg">About</p>
              <ul className="flex flex-col gap-6 text-lg">
                <li>Contact</li>
                <li>Blog</li>
                <li>Story</li>
              </ul>
            </div>
            <div className="flex flex-col gap-8 lg:w-auto">
              <p className="text-white font-semibold text-lg">Company </p>
              <ul className="flex flex-col gap-6 text-lg">
                <li>Product</li>
                <li>Press</li>
                <li>More</li>
              </ul>
            </div>
            <div className="flex flex-col gap-8 lg:w-auto">
              <p className="text-white font-semibold text-lg">Press </p>
              <ul className="flex flex-col gap-6 text-lg">
                <li>Career</li>
                <li>News Letters</li>
                <li>More</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-full border-gray-700 mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-center lg:items-start w-full text-white -mt-8 md:-mt-10">
          <p className="text-lg md:text-sm">
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
