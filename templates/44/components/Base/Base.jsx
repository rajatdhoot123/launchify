import React from "react";
import Image from "next/image";
import UI from "../../assets/images/base/ui.svg";
import AI from "../../assets/images/base/ai.svg";

const Base = () => {
  return (
    <div className="container max-w-navbar mx-auto">
      <div className="flex flex-col gap-8 justify-center items-center p-8 lg:p-0">
        <div className="flex flex-col lg:flex-row w-full gap-6">
          <div className="flex flex-col rounded-lg bg-green-100 p-6 lg:p-12 gap-4 w-full lg:w-1/2">
            <p className="text-center md:text-start text-4xl lg:text-6xl font-bold">
              Custom structured workouts
            </p>
            <p className="text-center md:text-start text-lg lg:text-xl text-gray-500 w-full lg:w-1/2">
              Carefully tested fonts, sizes and colors for easiest readability
              at a glance. No longer looking twice to see what your current pace
              is.
            </p>
          </div>
          <div className="flex flex-col md:flex-row rounded-lg bg-gray-200 py-6 lg:py-12 pl-6 lg:pl-12 gap-4 w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              <p className="text-center md:text-start text-4xl lg:text-6xl font-bold">
                Easy to read UI
              </p>
              <p className="text-center md:text-start text-lg lg:text-xl text-gray-500 w-full lg:w-2/3">
                Carefully tested fonts, sizes and colors for easiest readability
                at a glance. No longer looking twice to see what your current
                pace is.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image src={UI} alt="ui" width={800} height={800} />
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-gray-200 lg:flex-row w-full gap-8 p-12">
          <div className="flex  flex-col justify-center items-center md:items-start gap-6 w-full lg:w-1/2">
            <p className="text-center md:text-start text-4xl lg:text-6xl font-bold">
              AI Endurance integration
            </p>
            <p className="text-center md:text-start text-lg lg:text-xl text-gray-500">
              Carefully tested fonts, sizes and colors for easiest readability
              at a glance. No longer looking twice to see what your current pace
              is.
            </p>
            <button className="px-8 py-4 border-2 border-black rounded-full">
              Download App
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-end w-full lg:w-1/2">
            <Image src={AI} alt="ai" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
