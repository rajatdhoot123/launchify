import Image from 'next/image';
import React from 'react'
import { config } from '../../config/index'
import Tag from '../Button/Tag';
import plus from '../../assets/images/hero/plus-bg.svg'
import right from '../../assets/icons/hero/lines.png'
import left from '../../assets/icons/hero/star.svg'

const Hero = () => {

    return (
      <div className="relative hero dark-gradient text-white md:p-10 min-h-[50vh] md:w-[80vw] mx-auto border-[0.5px] border-white/10 my-10 rounded-[30px]">
        {/* BG ELEMENTS */}
        <Image
          width={60}
          height={60}
          src={left}
          className="max-md:hidden absolute  -top-12 left-5 md:-left-10"
          alt="background effect"
        />
        <Image
          width={60}
          height={60}
          src={right}
          className="max-md:hidden absolute -top-12 right-5 md:-right-10 "
          alt="background effect"
        />

        <div className="relative gray-gradient rounded-[30px] md:rounded-[66px] p-3 md:p-10 py-[75px] grid place-content-center h-full w-full gap-10">
          <Image
            width={60}
            height={60}
            src={plus}
            className="absolute md:w-[90%] md:h-auto top-0 left-0 bottom-[75px] right-[75px] opacity-80 md:opacity-20"
            alt="background effect"
          />

          <Tag text={"productivity"} />
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center font-bold">
            Tips and Strategies to Get More Done in Less Time
          </h2>

          <button className="bg-white font-bold text-black inline mx-auto px-8 py-4 rounded-full">
            Join Waitlist
          </button>

          <hr className="w-[60%] bg-[#f2f2f2] opacity-50 mx-auto my-10" />

          <div className="feature flex flex-col gap-10">
            <h3 className="text-3xl text-center font-semibold">
              Featured & seen in
            </h3>
            <ul className="flex flex-col max-lg:gap-5 lg:flex-row  items-center justify-between w-3/4 mx-auto">
              {config.featured.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-[#313131] rounded-xl py-2 px-4"
                >
                  <Image
                    src={item.logo}
                    width={25}
                    height={25}
                    alt={item.name}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <span className="text-lg font-semibold">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Hero
