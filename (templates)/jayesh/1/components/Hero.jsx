"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";
import heroGirlImage from "../images/heroGirlImg.png";
import UpperImage from "../images/heroUpperSection.svg";
import quotes from "../images/quote.svg";
import stars from "../images/stars.svg";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full lg:min-h-screen h-screen  ">
      <Navbar />
      <div className="w-full flex flex-col items-center relative">
        <motion.div
          className="lg:w-1/2 aspect-w-16 aspect-h-9 z-0"
          initial={{ translateY: 0, opacity: 1 }}
          animate={{
            translateY: hovered ? "100%" : 0,
            opacity: hovered ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <img src={UpperImage.src} alt="Decorative image" />
        </motion.div>

        <div className="group flex w-full justify-between absolute z-1 md:top-80 lg:top-60 top-40">
          <motion.div
            className="w-1/3 p-4 ml-2 lg:ml-10 lg:order-1 transition-all relative z-10"
            initial={{ y: 0 }}
            animate={{ y: hovered ? -60 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={quotes.src} alt="Quotes" className="h-8" />
            <p className="lg:text-lg text-xs text-gray-800">
              Jennys Exceptional product design ensure our websites success.
              Highly Recommended
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full aspect-w-16 aspect-h-9 absolute -bottom-80 left-1/2 transform -translate-x-1/2"
            initial={{ y: 0 }}
            animate={{ y: hovered ? 60 : 0 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />

          <motion.div
            className="lg:w-1/4  lg:flex block flex-col justify-end w-1/3 p-4 lg:px-10 lg:order-3 transition-all "
            initial={{ y: 0 }}
            animate={{ y: hovered ? -60 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={stars.src} alt="Quotes" className="h-8 lg:ml-0 md:ml-20" />
            <p className="lg:text-3xl lg:ml-0 md:ml-20 lg:mr-20 text-lg  font-bold lg:text-right text-center text-gray-800">
              10 Years
            </p>
            <p className="lg:text-lg lg:ml-0 md:ml-20 lg:mr-20 text-sm  text-center lg:text-right text-gray-800">
              Experience
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center ">
        <img
          src={heroGirlImage.src}
          alt=""
          className="absolute bottom-0 z-0 lg:w-1/2 object-cover h-2/3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <div className="rounded-full absolute bottom-10 flex border border-white text-2xl items-center gap-3 pl-2 pr-4 py-2 backdrop-blur-md text-white">
          <p className="rounded-full bg-orange-400 px-6 py-3">Portfolio &#8599;</p>
          <p className="font-light">Hire Me</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
