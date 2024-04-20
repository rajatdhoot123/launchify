import React from 'react'
import Button from '../ui/Button'
import { TiArrowRight } from 'react-icons/ti';


const StepCard = ({ step }) => {
    const colors = [
        ["bg-blue", "bg-light-blue", "bg-lighter-blue"],
        ["bg-pink", "bg-light-pink", "bg-lighter-pink"],
        ["bg-darkBlue", "bg-light-darkBlue", "bg-lighter-darkBlue"]
    ]
    
    
    return (
      <div
        className={`relative flex flex-col gap-8 p-4 py-8 lg:py-24 lg:px-10 items-center lg:flex-row lg:justify-end xl:w-3/4 ${
          step.type === 1 ? "" : "lg:flex-row-reverse"
        } rounded-xl ${
          step.id == 1 ? "bg-blue" : step.id == 2 ? "bg-pink" : "bg-darkBlue"
        } text-white`}
      >
        <div
          className={`w-full lg:w-[45%] min-h-6 lg:min-h-[370px] rounded-xl z-10 lg:absolute bottom-0 ${
            step.type == 1 ? "lg:left-0 lg:pr-8" : "lg:right-0 lg:pl-8"
          } ${step.boxOut} lg:pt-8`}
        >
          <div
            className={`w-full h-full min-h-[350px] z-20 rounded-xl ${step.boxIn}`}
          ></div>
        </div>

        <div className="lg:w-1/2 space-y-6 self-end">
          {/* cirle div */}
          <div className="w-[35px] h-[35px] rounded-full bg-white opacity-30"></div>
          <h3 className="text-2xl font-bold">{step.title}</h3>
          <p>{step.desc}</p>
          <Button
            variant="white"
            className={`rounded-md py-3 ${
              step.id == 1
                ? "text-[#30C7F7]"
                : step.id == 2
                ? "text-purple"
                : "text-[#4C30F7]"
            }`}
          >
            {step.button}
            <TiArrowRight className="text-2xl" />
          </Button>
        </div>
      </div>
    );
}

export default StepCard
