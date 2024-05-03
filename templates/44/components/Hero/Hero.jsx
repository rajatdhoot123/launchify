import React from "react";
import Image from "next/image";
import Bg from "../../assets/images/hero/bg.png";
import Apple from "../../assets/images/hero/apple.svg";
import Android from "../../assets/images/hero/android.svg";
import Star from "../../assets/images/hero/star.svg";
import Group from "../../assets/images/hero/group.png";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="h-[90%]">
      <Header />
      <div className="container mx-auto px-4 md:px-0 w-full mt-8 lg:mt-0">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full w-full gap-8 lg:gap-0">
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-8 md:space-y-12">
            <div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start w-full lg:w-[80%] leading-tight">
                Track your time & more with{" "}
                <span className="text-pink-700">Track!</span>
              </p>
            </div>
            <div className="flex flex-row lg:flex-col gap-8">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="inline-flex bg-black rounded-xl p-2 lg:p-4 text-white items-center space-x-4 md:space-x-6">
                <div>
                  <Image src={Apple} alt="apple" width={30} height={30} />
                </div>
                <div className="inline-flex flex-col">
                  <p className="text-xs lg:text-sm">Download on the</p>
                  <p className="text-xs lg:text-lg">Apple Store</p>
                </div>
              </div>
              <div className="group inline-flex bg-white rounded-xl p-2 lg:p-4 text-black border-2 border-black items-center space-x-4 md:space-x-6">
                <div>
                  <Image src={Android} alt="apple" width={30} height={30} className="group:invert" />
                </div>
                <div className="inline-flex flex-col">
                  <p className="text-xs lg:text-sm font-semibold">Download on the</p>
                  <p className="text-xs lg:text-lg font-semibold">Play Store</p>
                </div>
              </div>
              </div>
              
              <div className="flex flex-col gap-8 justify-center">
                <div className="flex flex-col md:flex-row items-center space-x-2 md:space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={Star}
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 font-semibold flex justify-center items-center">5 Stars</p>
                </div>
              </div>
            </div>
            <div className="w-48 md:w-56 lg:w-64">
              <Image src={Group} alt="group" width={200} height={200} />
            </div>

            <p className="text-gray-500">
              used by over 1000+ people, Join the pack!
            </p>
          </div>
          <div className="w-[70%] lg:w-2/3 flex justify-center items-center">
            <Image src={Bg} alt="bg" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
