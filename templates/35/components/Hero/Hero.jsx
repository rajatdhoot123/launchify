"use client";
import React, { useState } from "react";
import Header from "../Header/Header";
import { Inter } from "next/font/google";
import Image from "next/image";
import Group from "../../assets/icons/hero/group.png";
import "../../styles/font.css";
import Search from "../../assets/icons/hero/search.svg";
import Rocket from "../../assets/icons/hero/rocket.png";
import You from "../../assets/icons/hero/you.png";

const Hero = () => {
  return (
    <>
      <div className="pt-8">
        {" "}
        <Header />
      </div>
      <div className="container max-w-navbar flex flex-col gap-12 justify-center items-center text-black mx-auto w-full px-4">
        <div className="flex w-max py-2 px-4 rounded-3xl ">
          <Image src={Rocket} alt="Rocket" width={80} height={80} />
        </div>
        <div className="flex flex-col gap-12 justify-center items-center text-center">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold w-80 md:w-[70%] leading-tight">
            <p style={{ fontFamily: "Inter" }} className="font-black">
              Turbo charge your SEO. Get indexed on Google NOW!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="bg-gradient-to-r from-[#F64EA8] via-[#FA6490] to-[#FF7D75] rounded-full p-4 px-6 text-lg text-white font-bold">
              Get Started
            </button>
            <div className="w-[70%] md:w-[80%]">
              <Image src={Group} alt="Group" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-gray-500 font-medum text-lg w-2/3 md:w-full">
              indexed by over 1000+ indie hackers, Join the pack!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
