import Navbar from "../components/Navbar";
import Image from "next/image";
import Section from "../images/section.png";
import Google from "../images/google.svg";
import Zoom from "../images/zoom.svg";
import Ball from "../images/ball.svg";
import Mark from "../images/mark.svg";
import Wave from "../images/wave.svg";
import Adobe from "../images/adobe.svg";
import Spark from "../images/spark.svg";
import React from "react";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center mx-auto w-full gap-12">
        <div className="flex justify-center items-center mx-auto w-full scale-x-[0.93]">
          <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto lg:max-w-navbar p-4 lg:p-0">
            <div className="text-center lg:text-start w-3/4 lg:w-1/2 flex flex-col lg:gap-8 lg:py-0">
              <p className="font-extrabold text-lg md:text-4xl lg:text-7xl mb-4 leading-[1.5rem] lg:leading-tight">
              Let&apos;s elevate your analytics to a higher level.
              </p>

              <p className="font-bold text-gray-700 text-xs md:tex-xl lg:text-2xl mb-4 leading-[1.5rem] lg:leading-relaxed">
                Our UK-based account is specifically created to facilitate
                faster payment processing for global workers.
              </p>
              <div className="flex flex-row mx-auto  lg:mx-0 justify-start items-start gap-2 lg:gap-4 mt-4">
                <button className="bg-indigo-500 hover:bg-indigo-500 text-white font-base py-2 px-3 lg:py-3 lg:px-6 rounded-full lg:mt-0 s-3/4">
                  Get Started
                </button>
                <button className="bg-white hover:bg-indigo-500 text-black font-medium py-2 px-3 lg:py-3 lg:px-6 border-2 border-gray-400 rounded-full lg:mt-0">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="flex justify-center items-center">
                <Image
                  src={Section}
                  alt="Hero Image"
                  width={700}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container flex justify-between items-center max-w-navbar py-4">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 wrap gap-8 lg:gap-16 w-full items-center justify-center ">
            <div className="flex justify-center">
              <Image src={Google} alt="Google" width={60} height={60} />
            </div>
            <div className="flex justify-center">
              <Image src={Mark} alt="Marks"  width={60} height={60}/>
            </div>
            <div className="flex justify-center">
              <Image src={Wave} alt="Wave"  width={60} height={60}/>
            </div>
            <div className="flex justify-center">
              <Image src={Zoom} alt="Zoom" width={60} height={60} />
            </div>
            <div className="flex justify-center">
              <Image src={Adobe} alt="Adobe" width={60} height={60} />
            </div>
            <div className="flex justify-center">
              <Image src={Spark} alt="Spark"  width={60} height={60}/>
            </div>
            <div className="flex justify-center">
              <Image src={Ball} alt="Ball"  width={60} height={60}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
