"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import MenuIcon from "../../assets/icons/header/manu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative py-5 p-4 lg:p-0 w-full lg:w-[80%] mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="logo flex items-center gap-2">
        <span className="font-bold text-lg md:text-xl">Home Services</span>
      </div>

      {/* Navigation */}
      <div className="hidden lg:flex md:flex items-center gap-12">
        <Link href="about" spy={true} smooth={true} offset={-70} duration={500}>
          <p className="text-lg hover:text-green-500 cursor-pointer">About</p>
        </Link>
        <Link
          href="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-lg hover:text-green-500 cursor-pointer">
            Services
          </p>
        </Link>
        <Link href="login" spy={true} smooth={true} offset={-70} duration={500}>
          <p className="text-lg hover:text-green-500 cursor-pointer">Login</p>
        </Link>
        <Button text="Join Now" className="px-5 py-2" />
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden md:hidden">
        <button onClick={toggleMenu}>
          <Image src={MenuIcon} alt="Menu" width={24} height={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-50 bg-white shadow-md py-4 px-6 flex flex-col items-center gap-4">
          <Link
            href="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-green-500 cursor-pointer">About</p>
          </Link>
          <Link
            href="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-green-500 cursor-pointer">
              Services
            </p>
          </Link>
          <Link
            href="login"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-green-500 cursor-pointer">Login</p>
          </Link>
          <Button text="Join Now" className="px-5 py-2" />
        </div>
      )}
    </nav>
  );
};

export default Header;
