import React from "react";
import config from "../../config";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import Button from "../ui/Button/Button";
import arrow from '../../assets/icons/header/down.svg'


const Header = () => {
  return (
    <nav className="relative py-5 w-responsive w-[90%] flex-center-between">
      {/* logo div */}
      <div className="flex-center gap-2">
        <Image src={logo} alt="logo" width={50} height={50} />
        <span className="font-bold text-lg">Cue</span>
      </div>

      <ul className="max-md:hidden flex items-center md:gap-0 lg:gap-8">
        {config.navLinks.map((link, index) => {
          return (
            <Link href={link.link} key={link.id} className="relative group  gap-5">
              {link.title}
              {
                link.type === 2 && <Image src={arrow} alt="arrow" width={10} height={10} className="inline mx-5 w-[10px] h-[10px]" />
              }
              { link.type === 0  && <div className="bg-main h-[2px] w-0 group-hover:w-full ease-in-out duration-300 "></div>}


              {
                link.type === 2 && 
                <div className="absolute shadow-md flex flex-col gap-2 rounded-xl  opacity-0 -translate-y-10 py-5 px-2 w-[150px] bg-white group-hover:translate-y-2 group-hover:opacity-100 duration-300">
                  <li className="font-semibold text-black/50">
                    About
                  </li>
                  <li className="font-semibold text-black/50">
                    Contact
                  </li>
                  <li className="font-semibold text-black/50">
                    Pricing
                  </li>
                  <li className="font-semibold text-black/50">
                    Company
                  </li>
                </div>
              }

            </Link>
          );
        })}
      </ul>

      {/* join now button */}
        <Button variant="dark">
          Sign up
        </Button>
    </nav>
  );
};




export default Header;
