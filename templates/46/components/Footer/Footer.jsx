"use client";
import { useState } from "react";
import Image from "next/image";
import Facebook from "../../assets/icons/footer/facebook.svg";
import Instagram from "../../assets/icons/footer/instagram.svg";
import Youtube from "../../assets/icons/footer/youtube.svg";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-100 text-black" id="services">
      <div className="container max-w-navbar mx-auto w-full flex flex-col gap-8 py-8 px-0 lg:px-4 md:py-12 lg:py-16">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between text-black gap-10">
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <p className="lg:text-3xl text-lg font-bold text-center lg:text-left leading-5 p-4">
              Homenu
            </p>
          </div>
          <div className="flex flex-row lg:flex-row justify-center gap-16 p-4 w-full lg:w-auto">
            <div className="flex flex-col gap-8 lg:w-auto">
              <p className="text-black  text-lg">About</p>
            </div>
            <div className="flex flex-col gap-8 lg:w-auto">
              <p className="text-black text-lg">Company </p>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center">
            <div>
              <Image src={Facebook} alt="facebook" height={20} width={10} />
            </div>
            <div>
              <Image src={Instagram} alt="instagram" height={20} width={20} />
            </div>
            <div>
              <Image src={Youtube} alt="youtube" height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
