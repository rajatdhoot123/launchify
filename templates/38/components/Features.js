import React from "react";
import Image from "next/image";
import Visa from "../images/visa.png";
// import Pay from "../images/pay.svg";
import Overview from "../images/overview.svg";
import LogoInvert from "../images/logoinvert.svg";
import Report from "../images/report.svg";
import Clock from "../images/clock.svg";
import Light from "../images/light.svg";
import Icons from "../images/icons.svg";

const Features = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-8 lg:gap-20  mx-auto w-full mt-8 lg:mt-0 min-h-screen"
      id="product"
    >
      <div className="flex flex-col justify-center items-center text-center md:text-left w-3/4 md:w-1/2  gap-2">
        <div className="bg-violet-100 px-5 py-3 rounded-full">
          <p className="text-lg font-semibold text-indigo-500 md:text-base tracking-wide">
            FEATURES
          </p>
        </div>
        <p className="mt-2 font-bold text-2xl lg:text-5xl text-center leading-[2rem] lg:leading-tight">
          The features we offer
          <br /> are quite impressive
        </p>
        <p className="mt-1 font-bold text-sm text-center md:text-lg text-gray-600 leading-[2rem] lg:leading-loose">
          Our UK-based platform is specifically designed to assist workers
          worldwide in
          <br /> receiving faster payments from the United Kingdom.
        </p>
      </div>
      {/* cards section */}
      <div className="container flex flex-col md:flex-row gap-4 md:gap-8 p-8 lg:p-0 mt-4 md:mt-0 w-full max-w-navbar">
        {/* Card 1 */}
        <div className="bg-fuchsia-50 rounded-lg shadow-lg flex p-6 w-full md:w-1/2">
          <div className="flex items-center mb-4 w-full md:w-1/2">
            <div className="flex flex-col gap-8">
              <p className="font-bold text-3xl lg:text-5xl ">
                Quick &<br/> safe process
              </p>
              <p className="text-xl font-semibold text-gray-500 leading-[2rem] lg:leading-relaxed">
                Get your card approved instantly with our seamless process.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <Image src={Visa} alt="Visa Card" width={400} height={400} />
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-blue-50 rounded-lg shadow-lg flex p-6 w-full md:w-1/2">
          <div className="flex items-center mb-4 w-full md:w-1/2">
            <div className="flex flex-col gap-8">
              <p className="font-bold text-3xl lg:text-5xl">
                Advanced analytics
              </p>
              <p className="text-lg font-bold text-gray-500 leading-[2rem] lg:leading-relaxed">
                Advanced analytics involves using sophisticated tools to analyze
                large amounts of data
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <Image
              src={Report}
              alt="Analytics Report"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

     <div className="first container max-w-navbar mx-auto lg:flex flex-col md:flex-row justify-center gap-12 items-center text-center md:text-start mt-4">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-0">
          <div className="w-full h-full pt-12 pr-12 pl-12 pb-0 bg-violet-50  rounded-t-3xl">
            <Image
              src={Overview}
              alt="Overview"
              width={800}
              height={700}
              className="object-cover"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 py-6 bg-white shadow-lg rounded-xl">
            <div className="flex justify-center items-center mb-4 lg:mb-0">
              <div className="h-18 w-18 flex items-center">
                <Image src={LogoInvert} alt="LogoInvert" />
              </div>
              <div className="ml-4">
                <p className="font-bold text-lg lg:text-3xl text-start lg:">Easy payment</p>
                <p className="font-bold text-sm lg:text-lg text-gray-500 text-start ">
                  Set a reminder & we will make sure to pay it on time
                </p>
              </div>
            </div>
            <div>
              <button className="text-white bg-indigo-500 text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-3 rounded-3xl hover:text-gray-500">
                View Report
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:w-1/2 w-3/4 mx-auto pl-0 lg:pl-8 mt-8 lg:mt-0">
          <div className="bg-violet-100 px-5 py-3 rounded-full w-max inline-block mx-auto lg:mx-0">
            <p className="font-semibold text-indigo-500 rounded-3x tracking-wide">
              ADMIN FEATURES
            </p>
          </div>
          <p className="font-bold text-3xl lg:text-5xl leading-[2.5rem] lg:leading-tight">
            Simplify the process
            <br /> of acquiring a<br />
            company domain.
          </p>
          <p className="font-extrabold text-lg lg:text-xl text-gray-600 leading-[2rem] lg:leading-loose">
            Our UK-based platform is specifically designed to assist workers<br/>
            worldwide in receiving faster payments from the United<br/> Kingdom
          </p>
          <div className="flex gap-12 p-8 lg:p-0 flex-col justify-center items-center lg:flex-row md:flex-row">
            <div className="flex flex-col gap-4 items-start p-0 lg:p-4">
              <div>
                <Image src={Clock} alt="Clock Icon" width={40} height={40} />
              </div>
              <p className="font-bold text-2xl">Seamless way</p>
              <p className="font-bold text-xl text-gray-500 text-left">
                Moments flow into one<br/> another, AI creates a seamless<br/> way
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start p-0 lg:p-4">
              <div>
                <Image src={Light} alt="Light Icon" width={30} height={30} />
              </div>
              <p className="font-bold text-2xl">Quick & reliable</p>
              <p className="font-bold text-xl text-gray-500 text-left">
                Time flashes by, reminding us<br/> to seize every moment
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <div className=" container max-w-navbar p-8 lg:p-0">
        <div className=" bg-indigo-500  mx-auto flex flex-col md:flex-row rounded-xl justify-between items-center text-center md:text-left mt-4 gap-8 p-12">
          <div className="text-5xl font-bold text-white">
            We are here
            <br /> to elevate
          </div>
          <div className="text-white flex flex-col justify-center items-center lg:items-start gap-4">
            <p className="text-5xl font-extrabold">998K</p>
            <p className="font-bold text-lg">
              Crowd holding accepts a<br /> variety of payments
            </p>
          </div>
          <div className="text-white flex flex-col justify-center items-center lg:items-start gap-4">
            <p className="text-5xl font-extrabold">89%</p>
            <p className="font-bold text-lg">
              Payments with us are
              <br /> easy yet secure
            </p>
          </div>
          <div className="text-white flex flex-col justify-center items-center lg:items-start gap-4">
            <p className="text-5xl font-extrabold">2848+</p>
            <p className="font-bold text-lg">
              We accept all major
              <br /> currencies and crypto
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-navbar mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-0 lg:mt-16 gap-8 p-8">
        <div className="flex flex-col gap-8 w-100">
          <div className="bg-violet-100 p-2 rounded-full w-max  mx-auto lg:mx-0 inline-block">
            <p className="font-semibold text-indigo-500 px-3 py-1 tracking-wide">INTEGRATE</p>
          </div>
          <p className="font-bold text-4xl lg:text-5xl leading-[2.5rem] lg:leading-tight">
            Integrate with the
            <br /> tools you love
          </p>
          <p className="font-semibold text-xl text-gray-500 leading-[2rem] lg:leading-nornal">
            Our app seamlessly integrates with other platforms,
            <br /> making your workflow smoother and more efficient.
          </p>
        </div>
        <div>
          <Image src={Icons} alt="Icons" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Features;
