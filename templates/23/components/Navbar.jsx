"use client";
import { Inter } from "next/font/google";
import logo from "../assets/images/Navbar/logo.png";
import Image from "next/image";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="py-6 px-2 flex justify-between items-center">
      {/* left section  */}
      <div className="flex gap-2 items-center">
        <Image src={logo.src} className="" alt="" height={10} width={25} />
        <p
          className={`text-text ${inter.className} text-base md:text-2xl font-extrabold`}
        >
          Marketing<span className="text-[#0500FF]">Hub</span>
        </p>
      </div>

      {/* middle section  */}
      <ul
        className={`${inter.className} lg:flex mt-1 gap-4 font-medium hidden cursor-pointer`}
      >
        <div>
          <li className="text-light hover:font-bold transition-all">Home</li>
        </div>
        <div className="w-fit">
          <li className="hover:font-bold transition-all text-center text-text font-bold">
            Become a Advertiser
          </li>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="8"
            viewBox="0 0 119 8"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M1 4.18789C34 2.52122 103.7 -0.312111 118.5 1.68789L28.5 6.68799H71"
              stroke="#0500FF"
              strokeWidth="2"
            />
          </svg>
        </div>

        <li className="hover:font-bold transition-all text-light">
          Find Our Advertisers
        </li>
      </ul>

      {/* right section  */}
      <button
        className={`${inter.className} text-black text-xs md:text-sm hover:text-[#B9F143] hover:bg-darkbg hover:scale-105 transition-all leading-4 px-3 py-2 rounded-full  bg-[#B9F143] font-semibold`}
      >
        Become an Advertiser
      </button>
    </div>
  );
};

export default Navbar;
