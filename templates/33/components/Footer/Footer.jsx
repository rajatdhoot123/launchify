"use client";
import { useState } from "react";
import { Chonburi } from "next/font/google";
import Image from "next/image";
import Logo from "../../assets/icons/header/logowhite.svg";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-black" id="contact">
      <div className="container max-w-navbar mx-auto w-full flex flex-col lg:flex-row gap-8 py-8 px-4 lg:py-12 lg:px-4">
        <div className="w-full flex justify-center lg:justify-start items-center gap-5 lg:items-start">
          <div className="logo flex items-center gap-4">
            <span
              style={{ fontFamily: "Chonburi" }}
              className="font-bold text-lg md:text-3xl"
            >
              Ulti
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center lg:justify-end gap-8 p-4 w-full lg:w-auto">
          <div className="flex flex-row gap-16 lg:gap-8">
            <div className="flex flex-col gap-4 lg:w-auto">
              <p className="font-semibold text-lg">Home</p>
            </div>
            <div className="flex flex-col gap-4 lg:w-auto">
              <p className="font-semibold text-lg">Agencies </p>
            </div>
          </div>
          <div className="flex flex-row gap-16 lg:gap-8">
            <div className="flex flex-col gap-4 lg:w-auto">
              <p className="font-semibold text-lg"> About</p>
            </div>
            <div className="flex flex-col gap-4 lg:w-auto">
              <p className="font-semibold text-lg">Shortlist </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
