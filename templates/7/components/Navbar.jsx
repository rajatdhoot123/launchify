'use client'
import React, { useState } from "react";
import Link from "next/link";
import arrow from "../assets/images/arrow.svg";
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const dm = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Header = () => {
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const [isSalesHovered, setIsSalesHovered] = useState(false);


  return (
    <header className="w-full z-30 bg-white-500">
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-6 flex items-center">
          <p
            className={`w-auto text-4xl text-[#231656] font-extrabold ${dm.className}`}
          >
            Kind
          </p>
        </div>
        <ul
          className={`hidden lg:flex cursor-pointer font-semibold  col-start-6 col-end-10 text-black-500 items-center ${inter.className}`}
        >
          <li
            className="px-4 py-2 mx-2 flex group relative"
            onMouseEnter={() => setIsFeaturesHovered(true)}
            onMouseLeave={() => setIsFeaturesHovered(false)}
          >
            <p className="transition-colors duration-300 ease-in-out group-hover:text-blue-500">
              Features
            </p>
            <img src={arrow.src} alt="" />
            {isFeaturesHovered && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2">
                {/* Dropdown menu items */}
                <Link href="/">
                  <p className="block px-4 py-2 hover:bg-gray-100">Graphics</p>
                </Link>
                <Link href="#">
                  <p className="block px-4 py-2 hover:bg-gray-100">Development</p>
                </Link>
    
              </div>
            )}
          </li>
          <li
            className="px-4 py-2 mx-2 flex group relative"
            onMouseEnter={() => setIsResourcesHovered(true)}
            onMouseLeave={() => setIsResourcesHovered(false)}
          >
            <p className="transition-colors duration-300 ease-in-out group-hover:text-blue-500">
              Resources
            </p>
            <img src={arrow.src} alt="" />
            {isResourcesHovered && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2">
                {/* Dropdown menu items */}
                <Link href="/">
                  <p className="block px-4 py-2 hover:bg-gray-100">Careers</p>
                </Link>
                <Link href="#">
                  <p className="block px-4 py-2 hover:bg-gray-100">News Letters</p>
                </Link>
                <Link href="#">
                  <p className="block px-4 py-2 hover:bg-gray-100">More</p>
                </Link>
              </div>
            )}
          </li>
          <li
            className="px-4 py-2 mx-2 flex group relative"
            onMouseEnter={() => setIsCompanyHovered(true)}
            onMouseLeave={() => setIsCompanyHovered(false)}
          >
            <p className="transition-colors duration-300 ease-in-out group-hover:text-blue-500">
              Company
            </p>
            <img src={arrow.src} alt="" />
            {isCompanyHovered && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2">
                {/* Dropdown menu items */}
                <Link href="/">
                  <p className="block px-4 py-2 hover:bg-gray-100">About Us</p>
                </Link>
                <Link href="#">
                  <p className="block px-4 py-2 hover:bg-gray-100">Careers</p>
                </Link>
                <Link href="#">
                  <p className="block px-4 py-2 hover:bg-gray-100">Partners</p>
                </Link>
              </div>
            )}
          </li>
          <li
            className="px-4 py-2 mx-2 flex group relative"
            onMouseEnter={() => setIsSalesHovered(true)}
            onMouseLeave={() => setIsSalesHovered(false)}
          >
            <p className="transition-colors duration-300 ease-in-out group-hover:text-blue-500">
              Contact Sales
            </p>
            <img src={arrow.src} alt="" />
            {isSalesHovered && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2">
                {/* Dropdown menu items */}
                <Link href="/">
                  <p className="block px-4 py-2 hover:bg-gray-100">Contact</p>
                </Link>
                <Link href="#">
                  <p className="block px-4 py-2 hover:bg-gray-100">Blog</p>
                </Link>
                <Link href="#">
                  <p className="block px-4 py-2 hover:bg-gray-100">Story</p>
                </Link>
              </div>
            )}
          </li>
        </ul>
        <div className=" col-start-10 col-end-13 font-medium flex justify-end items-center">
          <Link
            href="/"
            className={`text-black-600 mx-2 sm:mx-10 font-semibold  ${inter.className}`}
          >
            Login
          </Link>
          <button
            className={`sm:px-6 px-3 py-3 border text-white bg-[#121A21] border-black-600 text-black-600 rounded-md tracking-wide hover:bg-black-600 hover:text-white`}
          >
            Book Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
