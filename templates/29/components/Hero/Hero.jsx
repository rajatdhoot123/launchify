"use client";
import React, { useState } from "react";
import Header from "../Header/Header";
import Image from "next/image";
import "../../styles/font.css";
import styles from "../../styles/hero.module.css";
import Search from "../../assets/icons/hero/search.svg";

const Hero = () => {
  return (
    <>
      <div className="pt-8">
        {" "}
        <Header />
      </div>
      <div className="container max-w-navbar flex flex-col gap-12 justify-center items-center text-white mx-auto w-full px-4">
        <div className="flex bg-gradient-to-r from-[#E693A5] via-[#9072C5] to-[#3951E5] w-max py-2 px-4 rounded-3xl ">
          <p>FEATURE FLAG GOES HERE</p>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center text-center">
          {/* <p className="text-4xl md:text-5xl lg:text-7xl font-bold w-80 md:w-2/3 leading-tight" >
            Hire top rated <span className="text-[#F1C134]">Freelancers</span>{" "}
            for your product
          </p> */}
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold w-80 md:w-2/3 leading-tight">
            <p className={styles.title}>
              Hire top rated <span className="text-[#F1C134]">Freelancers</span>{" "}
              for your product
            </p>
          </div>
          <p className="text-lg md:text-xl font-medium text-[#828282]">
            Millions of smart entrepreneurs are choosing the right way{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="p-4 bg-white flex gap-4 rounded-xl w-full">
            <Image src={Search} alt="Search" />
            <input
              type="text"
              placeholder="Search freelances & agencies"
              size={35}
            />
          </div>
          <div className="p-4 font-bold bg-[#F1C134] text-black rounded-xl">
            <button className="px-4">Browse</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
