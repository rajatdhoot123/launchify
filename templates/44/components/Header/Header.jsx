"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import MenuIcon from "../../assets/icons/header/manu.svg";
import Logo from "../../assets/icons/header/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative p-4 lg:p-0 lg:py-5 w-full lg:w-[80%] mx-auto flex items-center justify-between">
      <div className="logo flex items-center gap-4">
        <Image src={Logo} width={50} height={50} alt="logo" />
        <span className="font-bold text-lg md:text-xl">Track</span>
      </div>

      <div className="lg:hidden md:hidden">
        <button onClick={toggleMenu}>
          <Image src={MenuIcon} alt="Menu" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
