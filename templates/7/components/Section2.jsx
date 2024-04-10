import React from "react";
import centerImage from "../assets/images/hero-main.svg";
import img1 from "../assets/images/hero-img1.svg";
import img2 from "../assets/images/hero-img2.svg";
import img3 from "../assets/images/hero-img3.svg";
import google from '../assets/images/google.svg';
import collibra from '../assets/images/collibra.svg';
import frame from '../assets/images/frame.svg';
import zoom from '../assets/images/zoom.svg';
import adobe from '../assets/images/adobe.svg';
const Section2 = () => {
  return (
    <>
      <div className="w-full space-y-20 pb-16">
        <div className="flex w-full justify-center">
          <div className="flex justify-center relative">
            <img src={centerImage.src} className="md:w-5/6" alt="" />
            <img
              src={img1.src}
              className="absolute md:-left-1/4 left-0 top-1/4 md:w-auto w-1/4"
              alt=""
            />
            <img
              src={img2.src}
              className="absolute md:-right-10 right-0 top-1/4 md:w-auto w-1/4"
              alt=""
            />
            <img
              src={img3.src}
              className="absolute md:-right-1/4 -right-4 top-1/2 md:w-auto w-1/4"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-7 ">
          <p className="text-lg font-semibold text-center text-[#343E3A]">
            We have the fast paced growing companies with us
          </p>
          <div className="flex flex-wrap items-center justify-center lg:gap-36 gap-8">
            <img src={google.src} alt="11" className="md:w-auto w-10" />
            <img src={collibra.src} alt="12" className="md:w-auto w-10" />
            <img src={frame.src} alt="13" />
            <img src={zoom.src} alt="15" />
            <img src={adobe.src} alt="14" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
