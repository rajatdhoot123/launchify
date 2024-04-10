"use client";
import { useState } from "react";
import JCLogo from "../images/JCLogo.svg";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full bg-[#272727] rounded-t-3xl px-8 py-8 lg:px-16 flex flex-col gap-8 md:gap-8 items-center">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-0 gap-6  w-full">
        <p className="text-white text-2xl py-8 md:text-5xl font-semibold">
          Let&apos;s Connect There
        </p>
        <button className="bg-orange-400 rounded-full px-4 md:px-6 text-lg md:text-xl py-2 md:py-3 font-medium text-white flex items-center gap-2 transition duration-300 ease-in-out footer-button-hover">
          Hire Me{" "}
          <span className="footer-arrow bg-orange-400 text-white">↗</span>
        </button>
      </div>

      <hr className="w-full border-2 border-gray-700 " />

      <div className="w-full flex flex-col md:flex-row ite justify-between h-full text-white gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-5 lg:items-start items-center ">
          <div
            className={`w-[40vw] md:w-[20vw] flex gap-4 items-center transition-all duration-300 `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={JCLogo.src}
              className={`h-8 md:h-12 w-auto transition-all duration-300 ml-6  ${
                isHovered ? "-translate-x-[8px]" : "translate-x-0"
              }`}
            />
            <p className="font-bold w-1/3 transition-opacity duration-300">
              {!isHovered && "JCREA"}
              {isHovered && <p className="font-light text-xs">Made By</p>}
              {isHovered && "Jayesh Patil"}
            </p>
          </div>
          <p className="lg:text-base text-sm lg:text-left text-center">
            Our graphic design company specializes in creating captivating
            visual identities, including logo design, branding, web and print
            materials, ensuring your business stands out with innovative and
            compelling design solutions tailored to your needs.
          </p>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col gap-8 ">
            <p className="text-orange-400 font-semibold text-lg">Navigation</p>
            <ul className="flex flex-col gap-6 text-xs">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 lg:text-left text-right ">
            <p className="text-orange-400 font-semibold text-lg">Contact </p>
            <ul className="flex flex-col gap-6 text-xs">
              <li>+91 7738443636</li>
              <li>Jaycrea36@gmail.com</li>
              <li>Portfolio-jcrea.com</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-orange-400 flex flex-col font-semibold gap-4 text-lg">
          <p>Get Latest Information</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-white text-white rounded-full px-4 py-2 placeholder-gray-700 placeholder::font-semibold "
          />
        </div>
      </div>
      <hr className="w-full border-2 border-gray-700 mb-12" />
      <div className="flex flex-col md:flex-row justify-between w-full text-white -mt-8 md:-mt-10">
        <p className="text-xs md:text-base">
          Copyright© 2023 Jayesh. All Rights Reserved.
        </p>
        <p className="text-xs md:text-base">
          User Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
