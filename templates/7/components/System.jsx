import React from "react";
import eff1 from "../assets/images/efficient-left.png";
const System = () => {
  return (
    <div className="lg:px-16 sm:px-8  px-6">
      <div className="flex flex-col space-y-7">
        {/* heading  */}
        <div className="flex flex-col py-10 gap-7 md:gap-5 items-center text-center">
          <p className="text-4xl sm:text-5xl font-semibold">
            More efficient & “Kind” system
          </p>
          <p className="max-w-5xl text-lg font-medium">
            The expectation that productivity should always lead to tangible
            results or accomplishments & notion that certain types of work or
            activities are more valuable or productive than others.
          </p>
        </div>

        <div className="flex md:flex-row flex-col md:gap-0 gap-6 justify-between">
          <img src={eff1.src} alt="" loading="lazy" />
          <div className="flex flex-col  justify-center gap-10">
            <div className="overflow-y-scroll flex flex-col gap-10 lg:mr-20 pr-8 h-72">
              <div className="bg-[#F3F3F3] rounded-lg py-3 md:py-6  px-10">
                <p className="text-lg md:text-xl font-extrabold">
                  Quick & safe
                </p>
                <p className="max-w-sm text-sm md:text-lg">
                  We are there for you with quick & reliable responses from us
                </p>
              </div>
              <p className="text-lg md:text-xl px-10 font-extrabold">
                Safe & sound with more productivity
              </p>
              <p className="text-lg md:text-xl px-10 font-extrabold">
                Less time more fun
              </p>
              <p className="text-lg md:text-xl px-10 font-extrabold">
                Safe & sound
              </p>
              <p className="text-lg md:text-xl px-10 font-extrabold">
                More productivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
