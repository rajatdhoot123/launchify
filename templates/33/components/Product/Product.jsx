import React from "react";
import Image from "next/image";
import Down from "../../assets/icons/product/down.png";
import Img1 from "../../assets/icons/product/img1.png";
import Img2 from "../../assets/icons/product/img2.png";
import { Inter } from "next/font/google";

const Product = () => {
  return (
    <div className="container max-w-navbar mx-auto flex flex-col justify-center items-center gap-12 p-4" id="pricing">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <p style={{ fontFamily: "Inter" }}>Discover our <span className="text-blue-700 underline">Products</span></p>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Down} alt="down" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <p style={{ fontFamily: "Inter" }} className="text-5xl font-bold text-center">Products</p>
        <p className="text-lg font-regular text-center w-[80%] lg:w-1/2">
          Our resources are constantly updated to ensure that they remain
          relevant and useful, so you can spend less time researching and more
          time creating.
        </p>
        <button className="p-4 flex justify-center items-center bg-[#b6cde8] w-max rounded-xl">
          <p className="font-bold text-blue-700">View All</p>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full max-w-[80%] mx-auto ">
        <div className="flex flex-col text-center justify-center gap-8 items-center shadow-xl rounded-lg p-4 lg:p-8 text-black  hover:text-white bg-white hover:bg-black transition ease-in">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full h-full">
              <Image src={Img1} alt="img1" />
            </div>
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-start">
              A well-designed UI for productivity app
            </p>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg text-start">
              The layout should be intuitive, with clear navigation that makes
              it easy for users to find the information they need.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-center justify-center gap-8 items-center shadow-lg text-black  hover:text-white bg-white hover:bg-black transition ease-in rounded-lg p-4 lg:p-8 ">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full h-full">
              <Image src={Img2} alt="img2"  />
            </div>
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-start">
              A well-designed UI for productivity app
            </p>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg text-start">
              The layout should be intuitive, with clear navigation that makes
              it easy for users to find the information they need.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-navbar rounded-3xl flex flex-col gap-8 md:gap-12 w-full mx-auto text-black bg-[#DFE9F4] py-8 md:py-16 px-4 md:px-8 mt-4 lg:mt-24">
        <div className="flex justify-center items-center">
          <p style={{ fontFamily: "Inter" }} className="text-3xl lg:text-6xl font-extrabold text-center w-[90%] lg:w-3/4">
            Be the first to know about new features, special offers, and more.
          </p>
        </div>
        <p className="text-lg md:text-xl mx-auto w-full lg:w-1/2 text-center">
          Want to send or receive money? Just tap WePay.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="px-2 lg:px-8 py-2 lg:py-2 font-bold bg-white text-black rounded-xl">
            <button className="px-6 py-2">Get a Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
