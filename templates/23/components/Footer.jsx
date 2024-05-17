import React from "react";
import logo from "../assets/images/Navbar/logo.png";
import creator from "../assets/images/Footer/Creator.png";
import pl from "../assets/images/Footer/pl.png";
import cd from "../assets/images/Footer/cd.png";
import Image from "next/image"; 

const Footer = () => {
  return (
    <div className="py-4">
      {/* footer  */}

      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
        {/* left  */}
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="img" className="" height={6} width={20} />
          <p className="text-base font-bold leading-6">
            Marketing <span className="text-[#0500FF]">Hub </span>
          </p>
        </div>

        <div className="flex font-bold items-center gap-1">
          <p className=" inline-block">Made by</p>
          <Image src={pl} alt="img" className="" height={6} width={20} />
          <p>Alex &</p>
          <Image src={cd} alt="img" className="" height={6} width={20} />
           <p> Nick</p>
           <Image src={creator} alt="img" className="" height={6} width={20} />
        </div>

        {/* right  */}
        <ul className="flex flex-wrap max-sm:justify-center gap-6">
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
