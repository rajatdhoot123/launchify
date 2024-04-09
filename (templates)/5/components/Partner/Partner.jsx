import Image from 'next/image';
import config from '../../config';
import React from 'react'

const Partner = () => {
    return (
      <div className="flex flex-col items-center justify-center w-[90%] md:w-3/4 mx-auto space-y-8">
        <h3 className="text-xl text-center">
          We have the fast paced growing companies with us
        </h3>
        <ul className="w-full md:gap-10 md:w-3/4 grid grid-cols-2 md:flex md:justify-between md:items-center mx-auto max-md:space-y-4">
          {config.featured.map((item, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-2 rounded-xl uppercase opacity-50"
            >
              {item.logo && (
                <Image
                  src={item.logo}
                  width={25}
                  height={25}
                  className="w-[35px] h-[35px] rounded-full bg-black"
                  alt={item.name}
                />
              )}
              <span
                className={`text-md md:text-lg lg:text-xl ${
                  item.type == 1 ? "font-medium" : "font-semibold"
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Partner
