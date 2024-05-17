"use client";
import React, { useState } from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Star from "../../assets/icons/hero/star.png";
import Line from "../../assets/icons/hero/line.png";
import { Inter } from "next/font/google";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="container max-w-navbar mx-auto flex flex-col gap-12 justify-center items-center w-full px-4">
        <div className="flex justify-center items-center mx-auto w-1/4 md:w-max py-2 px-4">
          <Image src={Star} alt="Star" width={100} height={100} />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center text-center md:col-span-2">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold w-full md:w-[65%] lg:leading-[1.2]">
            <span
              className="text-white"
              style={{
                fontFamily: "Inter",
                backgroundImage: `url(${Line.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "bottom",
                backgroundPositionX: "2px",
                backgroundSize: "cover",
              }}
            >
              Effective designs
            </span>{" "}
            make impact and target a set of audience
          </p>
          <p className="w-[80%] lg:w-[40%] text-sm md:text-xl font-medium text-[#828282]">
            A well-designed web page can have a significant impact on a brand
            online presence
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center">
          <div className="bg-[#dedede] rounded-full px-4 py-2 inline-block ">
            <p className="font-bold text-center ">📚 Knowledge Databases</p>
          </div>
          <div className="bg-[#dedede] rounded-full px-4 py-2 inline-block">
            <p className="font-bold text-center ">✅ Checklists</p>
          </div>
          <div className="bg-[#dedede] rounded-full px-4 py-2 inline-block ">
            <p className="font-bold text-center ">🔥 Custom Notion Templates</p>
          </div>
          <div className="bg-[#dedede] rounded-full px-4 py-2 inline-block mx-auto  md:col-span-3">
            <p className="font-bold text-center ">
              ⚡ Speed up & simplify your workflows{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
