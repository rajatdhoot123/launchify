"use client";
import React, { useState } from "react";
import Image from "next/image";
import Tick from "../images/tick.svg";
import Cross from "../images/cross.svg";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div
      className="flex flex-col justify-center items-center mx-auto w-full min-h-screen mt-8 gap-4 p-8 mb-8"
      id="pricing"
    >
      <div className="flex flex-col justify-center items-center text-center md:text-left w-full md:w-1/2 gap-4">
        <div className="bg-violet-100 px-5 py-2 rounded-full w-cover">
          <p className="text-xl text-indigo-500 md:text-lg font-semibold tracking-wide">
            PRICING
          </p>
        </div>
        <p className="mt-2 font-extrabold text-3xl lg:text-5xl">
          Pick your growth plan
        </p>
        <p className="mt-4 font-bold text-lg md:text-base text-gray-500 leading-[2rem] lg:leading-loose text-center">
          Our UK-based platform is specifically designed to assist workers
          <br />
          worldwide in receiving faster payments from the United<br/> Kingdom.
        </p>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <p
          className={`${
            isMonthly ? "text-indigo-500" : "text-gray-700"
          } font-bold text-lg`}
        >
          Pay Monthly
        </p>
        <button
          className={`relative w-12 h-6 rounded-full bg-gray-300 focus:outline-none`}
          onClick={handleToggle}
        >
          <div
            className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
              isMonthly ? "" : "translate-x-full"
            }`}
          />
        </button>
        <p
          className={`${
            !isMonthly ? "text-indigo-500" : "text-gray-700"
          } font-bold text-lg`}
        >
          Pay Yearly
        </p>
      </div>
      {/* Price cards */}

      <div className="container max-w-navbar mx-auto flex flex-col md:flex-row justify-center mt-8 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 w-full md:w-1/3">
          <div className="text-start flex flex-col gap-4">
            <p className="text-xl font-bold">Free</p>
            <p className=" font-bold text-gray-500">
              Ideal for individuals who need quick access to basic features.
            </p>
            <p className="text-5xl font-bold flex items-center gap-2">
              $0<span className="text-gray-500 text-sm font-bold">/ month</span>
            </p>
          </div>
          <button className="mt-6 w-full hover:bg-indigo-800 border-2 border-black text-black font-bold py-2 px-4 rounded-full">
            Lets try it free
          </button>
          <ul className="mt-6 text-sm flex flex-col gap-4">
            <li className="flex items-center font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Min 10 transactions per week
            </li>
            <li className="flex items-center  font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Access to 50+ banks
            </li>
            <li className="flex items-center text-gray-500 font-medium gap-4">
              <Image src={Cross} alt="Tick" width={50} height={50} />
              Automatic payments
            </li>
            <li className="flex items-center text-gray-500  font-medium gap-4">
              <Image src={Cross} alt="Tick" width={50} height={50} />
              Support 24/7
            </li>
          </ul>
        </div>
        {/* Card 2 */}
        <div className="bg-indigo-500 text-white rounded-lg shadow-lg p-8 w-full md:w-1/3">
          <div className="text-start flex flex-col gap-4">
            <p className="text-xl font-bold">Professional</p>
            <p className=" font-bold ">
              Ideal for individuals who need quick access to basic features.
            </p>
            <p className="text-5xl font-bold text-white flex items-center gap-2">
              $25<span className=" text-sm font-bold">/ month</span>
            </p>
          </div>
          <button className="mt-6 w-full bg-white text-black font-bold py-2 px-4 rounded-full">
            Start as Pro
          </button>
          <ul className="mt-6 text-sm flex flex-col gap-4">
            <li className="flex items-center font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Unlimited transactions
            </li>
            <li className="flex items-center  font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Access to over all the banks
            </li>
            <li className="flex items-center font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Review & check system
            </li>
            <li className="flex items-center font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Enable automatic payments
            </li>
            <li className="flex items-center font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Support 24/7
            </li>
          </ul>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 w-full md:w-1/3">
          <div className="text-start flex flex-col gap-4">
            <p className="text-xl font-bold">Free</p>
            <p className=" font-bold text-gray-500">
              Ideal for individuals who need quick access to basic features.
            </p>
            <p className="text-5xl font-bold flex items-center gap-2">
              $100
              <span className="text-gray-500 text-sm font-bold">/ month</span>
            </p>
          </div>
          <button className="mt-6 w-full hover:bg-indigo-500 border-2 border-black text-black font-bold py-2 px-4 rounded-full">
            Contact Us
          </button>
          <ul className="mt-6 text-sm flex flex-col gap-4">
            <li className="flex items-center font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Unlimited transactions
            </li>
            <li className="flex items-center  font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Access to over all the banks
            </li>
            <li className="flex items-center text-gray-500 font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Review & check system
            </li>
            <li className="flex items-center text-gray-500  font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Unlimited access to features{" "}
            </li>
            <li className="flex items-center text-gray-500  font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Enable automatic payments
            </li>
            <li className="flex items-center text-gray-500  font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Support 24/7
            </li>
            <li className="flex items-center text-gray-500  font-medium gap-4">
              <Image src={Tick} alt="Tick" width={50} height={50} />
              Safe & secured
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
