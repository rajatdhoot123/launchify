import React from "react";
import logo from "../assets/images/Navbar/logo.png";

import Image from "next/image"; 
import { DM_Sans, Inter } from "next/font/google";


const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const dm = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="py-4">
      {/* footer  */}

      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
        {/* left  */}
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="img" className="" height={25} width={25} />
          <p className={` font-bold text-2xl leading-6 ${dm.className}`}>
            Bird<span className="font-normal ">app </span>
          </p>
        </div>

        <ul
        className={`${inter.className} flex mt-1 gap-6 font-medium max-md:hidden cursor-pointer`}
      >
        <div>
          <li className="text-text font-bold">Home</li>
        </div>
        <li className="hover:font-bold transition-all text-light">Features</li>

        <li className="text-light hover:font-bold transition-all">FAQs</li>
        <li className="hover:font-bold transition-all text-light">Contact </li>
      </ul>

        {/* right  */}
        <button
        className={`${inter.className} text-blue border-2 border-blue text-sm hover:text-white hover:bg-blue hover:scale-105 transition-all leading-4 px-3 py-2 rounded-lg font-semibold`}
      >
        Get Early Access &rarr;
      </button>
      </div>
    </div>
  );
};

export default Footer;
