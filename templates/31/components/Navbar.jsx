"use client";
import { Inter, DM_Sans } from "next/font/google";
import logo from "../assets/images/Navbar/logo.png";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const dm = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="mt-6 flex justify-between items-center">
      {/* left section  */}
      <div className="flex gap-2 items-center">
        <img src={logo.src} className="h-6" alt="" />
        <p className={`text-text ${dm.className} text-2xl`}>
          <span className="font-bold">Bird</span>app
        </p>
      </div>

      {/* middle section  */}
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

      {/* right section  */}
      <button
        className={`${inter.className} text-blue border-2 border-blue text-sm hover:text-white hover:bg-blue hover:scale-105 transition-all leading-4 px-3 py-2 rounded-lg font-semibold`}
      >
        Get Early Access &rarr;
      </button>
    </div>
  );
};

export default Navbar;
