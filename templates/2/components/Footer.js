import React from "react";
import Image from "next/image";
import Logo from "./../images/logowhite.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className=" py-4 px-8 container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 relative">
            <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <span className="text-white font-bold text-lg">Personal</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm">@ 2019-2023 Personal</p>
          <p className="text-white text-sm">Made In Figma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
