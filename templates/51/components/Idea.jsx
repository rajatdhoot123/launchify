import React from "react";
import star from "../images/idea-star.svg";
import shield from "../images/idea-shield.svg";
import email from "../images/idea-email.svg";
import awards from "../images/idea-awards.svg";
const Idea = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full lg:px-16 gap-6 px-8 ">
        <p className="text-3xl md:text-6xl text-gray-700 font-semibold text-center">
          Have an Awesome Project
          <br />
          Idea? <span className="text-orange-400">Let&apos;s Discuss</span>
        </p>

        <div className=" w-full md:w-2/3 flex items-center border-2 rounded-full overflow-hidden p-1">
          <div className="rounded-full h-10 w-16 bg-orange-100 p-1 flex justify-center items-center">
            <img src={email.src} alt="" className="h-8" />
          </div>
          <input
            type="text"
            className="pl-4 w-full h-12 rounded-l-full flex-grow focus:outline-none"
            placeholder="Email Address"
          />

          <button className="bg-orange-400 text-white rounded-full h-12 px-6 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            Send
          </button>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-2/3 flex-col md:flex-row items-center gap-4 lg:px-10 font-normal flex justify-between text-xs lg:text-sm">
            <div className="flex items-center">
              <img src={star.src} alt="yoo" className="h-6" />
              <p>4.9/5 Average Ratings</p>
            </div>
            <div className="flex items-center">
              <img src={awards.src} alt="yoo" className="h-6" />
              <p>25+ Winning Awards</p>
            </div>
            <div className="flex items-center">
              <img src={shield.src} alt="yoo" className="h-6" />
              <p className="">Certified Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
