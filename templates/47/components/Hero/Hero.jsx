"use client";
import React, { useState } from "react";
import Bg from "../../assets/images/hero/bg.png";
import Line from "../../assets/icons/hero/line.svg";
import Header from "../Header/Header";
import Arrow from "../../assets/icons/header/down.svg";
import Image from "next/image";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen ">
      <Header />
      <div className="mx-auto w-full flex justify-center items-center h-[80vh] px-6 ">
        {/* Background Image */}
        <div className="w-full inset-0 flex justify-center items-center">
          <div className=" container max-w-navbar mx-auto w-full flex flex-col justify-center items-center rounded-3xl gap-8 py-24">
            <p className="text-4xl md:text-7xl font-bold text-center mt-[-30px] w-80 md:w-[70%] leading-tight lg:leading-tight">
              Offer{" "}
              <span
                className=""
                style={{
                  backgroundImage: `url(${Line.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                  backgroundPositionX: "12px",
                  backgroundSize: "8rem",
                }}
              >
                your
              </span>{" "}
              service at
              <span
                className="ml-8"
                style={{
                  backgroundImage: `url(${Line.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                  backgroundPositionX: "12px",
                  backgroundSize: "8rem",
                }}
              >
                your
              </span>{" "}
              price.
            </p>
            <p className="text-sm md:text-xl text-center mb-6 mx-auto w-80 md:w-1/2">
              Get help around the house from a trusted Tasker. From handyman
              work and furniture assembly to moving, yardwork
            </p>

            {/* <div
              className="bg-white p-4 md:p-8 border-2 border-gray-200 rounded-3xl grid grid-cols-1 md:grid-cols-none md:grid-rows-1 lg:flex lg:flex-row items-center lg:justify-between gap-6 md:gap-8 container max-w-navbar md:w-[70%] lg:w-[60%] "
              style={{
                backgroundImage: `url(${Bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "30%",
              }}
            >
              <div className="flex flex-col md:flex-row lg:flex-row items-center justify-around lg:w-[80%] gap-4 md:gap-8 lg:gap-6">
                <input
                  type="text"
                  className="border-2 border-back p-2 md:p-3 rounded-lg w-full max-w-md"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="border-2 border-back p-2 md:p-3 rounded-lg w-full max-w-lg"
                  placeholder="Email"
                />
                <div className="relative w-full max-w-md">
                  <div className={`relative ${isOpen ? "open" : ""}`}>
                    <select
                      className="border-2 border-back p-2 md:p-3 text-sm lg:text-sm rounded-lg w-full appearance-none"
                      defaultValue=""
                      onFocus={toggleDropdown}
                      onBlur={toggleDropdown}
                    >
                      <option value="" disabled hidden>
                        Services
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <Image
                      src={Arrow}
                      alt="Arrow"
                      className="absolute right-2 top-1/2 transform -translate-y-1/3 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <button className="bg-violet-700 hover:bg-violet-500 px-6 md:px-8 py-3 md:py-3 rounded-xl font-bold text-white md:self-start lg:self-auto">
                Let Go!
              </button>
            </div> */}

            <div
              className=" bg-white p-4 md:p-8 border-2 border-gray-200 rounded-3xl grid grid-cols-1 md:grid-cols-none md:grid-rows-1 lg:flex lg:flex-row items-center gap-6 md:gap-8 container max-w-navbar md:w-max lg:w-max"
              style={{
                backgroundImage: `url(${Bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "30%",
              }}
            >
              <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-6">
                <input
                  type="text"
                  className="border-2 border-back p-2 md:p-3 rounded-lg w-full max-w-md"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="border-2 border-back p-2 md:p-3 rounded-lg w-full max-w-md"
                  placeholder="Email"
                />
                <div className="relative w-full max-w-md">
                  <div className={`relative ${isOpen ? "open" : ""}`}>
                    <select
                      className="border-2 border-back p-2 md:p-3 text-sm lg:text-sm rounded-lg w-full appearance-none"
                      defaultValue=""
                      onFocus={toggleDropdown}
                      onBlur={toggleDropdown}
                    >
                      <option value="" disabled hidden>
                        Services
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <Image
                      src={Arrow}
                      alt="Arrow"
                      className="absolute right-2 top-1/2 transform -translate-y-1/3 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <button className="bg-violet-700 hover:bg-violet-500 px-6 md:px-8 py-3 md:py-3 rounded-xl font-bold text-white md:self-start lg:self-auto">
                Let Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
