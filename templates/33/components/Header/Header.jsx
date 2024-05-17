"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "../../assets/icons/header/manu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white rounded-lg py-5 p-4 lg:py-8 lg:px-12 w-full lg:w-[85%]  mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="logo flex items-center gap-4">
        <span
          style={{ fontFamily: "Chonburi" }}
          className="font-bold text-xl md:text-4xl"
        >
          Ulti
        </span>
      </div>

      {/* Navigation */}
      <div className="hidden lg:flex md:flex justify-center items-center gap-12">
        <Link
          href="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            Home
          </p>
        </Link>
        <Link
          href="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            Features
          </p>
        </Link>
        <Link
          href="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            Pricing
          </p>
        </Link>
        <Link
          href="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            Contact
          </p>
        </Link>
      </div>

      <div className="hidden lg:flex justify-center gap-4">
        <button className="px-5 py-2 text-[#0752AD] font-bold">Sign In</button>
        <button className="px-5 py-2 bg-[#c2d6ee] font-bold text-[#0752AD] rounded-lg">
          Sign Up
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden md:hidden">
        <button onClick={toggleMenu}>
          <Image src={MenuIcon} alt="Menu" width={24} height={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden font-semibold absolute top-full left-0 right-0 z-50 bg-white shadow-md py-4 px-6 flex flex-col items-center gap-4">
          <Link
            href="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-violet-500 cursor-pointer">
              Features
            </p>
          </Link>
          <Link
            href="pricing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-violet-500 cursor-pointer">
              Pricing
            </p>
          </Link>
          <Link
            href="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-violet-500 cursor-pointer">
              Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
