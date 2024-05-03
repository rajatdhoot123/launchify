"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/icons/header/logo.svg";

function Footer() {

  return (
    <div className="bg-gray-100 text-black" id="services">
      <div className="container max-w-navbar mx-auto w-full flex flex-col gap-8 lg:gap-4 py-8 md:py-12 lg:py-4">
        <div className="flex items-center gap-4 justify-center lg:justify-start">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <p className="text-2xl font-bold">Track</p>
        </div>
        <div className=" mx-auto w-70 lg:w-full flex flex-col lg:flex-row items-center justify-between text-black gap-6">
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <p className="lg:text-lg text-lg font-bold text-center lg:text-left leading-5">
              Get started new try our product
            </p>
          </div>
          <div className="flex flex-row lg:flex-row justify-center gap-16 p-4 w-full lg:w-auto">
            <div className="flex flex-col gap-8 lg:w-auto">
              <p className="text-black  font-bold text-lg">
                Terms and Condtions
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:w-auto">
              <p className="text-black font-bold text-lg">Privacy Policy </p>
            </div>
          </div>
        </div>
          <div className="w-70 lg:w-full mx-auto">
            <p className="text-gray-500 text-lg">© 2023 Track Inc. Copyright and rights reserved</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
