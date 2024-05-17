// Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../images/logo.svg";
import Down from "./../images/down.svg";
import Cross from "./../images/cross2.svg";
import HamburgerMenuIcon from "./../images/manu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 relative">
            <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <span className="text-black font-bold text-lg">Company Name</span>
        </div>
        <div className="hidden lg:flex items-center space-x-4 gap-8">
          <HoverExpand text="Product" className="relative">
            <Link
              href="product"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              <div className="text-black cursor-pointer hover:text-gray-500 flex items-center p-4">
                Product
                <Image src={Down} alt="Arrow" width={24} height={24} />
              </div>
            </Link>
          </HoverExpand>

          {/* Pricing */}
          <HoverExpand text="Pricing" className="relative">
            <Link
              href="pricing"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              <div className="text-black cursor-pointer hover:text-gray-500  flex items-center p-4">
                Pricing
                <Image src={Down} alt="Arrow" width={24} height={24} />
              </div>
            </Link>
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 opacity-0 transition-opacity duration-300 pointer-events-none transform -translate-y-full scale-y-0 origin-top">
              {/* Content to display when expanded */}
              <p>This is the expanded content for Pricing.</p>
            </div>
          </HoverExpand>

          {/* Company */}
          <HoverExpand text="Company" className="relative">
            <Link
              href="company"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              <div className="text-black cursor-pointer hover:text-gray-500  flex items-center p-4">
                Company
                <Image src={Down} alt="Arrow" width={24} height={24} />
              </div>
            </Link>
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 opacity-0 transition-opacity duration-300 pointer-events-none transform -translate-y-full scale-y-0 origin-top">
              {/* Content to display when expanded */}
              <p>This is the expanded content for Company.</p>
            </div>
          </HoverExpand>
          {/* <HoverExpand text="Faq"> */}
          <Link
            href="faq"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            <div className="text-black cursor-pointer hover:text-gray-500 ">
              Faq
            </div>
          </Link>
          {/* </HoverExpand> */}
        </div>
        <div className="hidden lg:flex justify-center">
          <button className="text-white bg-indigo-500 text-sm lg:text-base px-2 py-2 lg:px-4 lg:py-2 rounded-3xl hover:text-gray-500 text-center">
            Sign Up
          </button>
        </div>
        <div className="lg:hidden flex gap-4 md:gap-8">
          <div className="flex justify-center">
            <button className="text-white bg-indigo-500 text-sm lg:text-base px-2 py-2 lg:px-4 lg:py-2 rounded-3xl hover:text-gray-500 text-center">
              Sign Up
            </button>
          </div>
          <button onClick={toggleMenu}>
            <Image
              src={HamburgerMenuIcon}
              alt="Hamburger Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 h-screen w-screen bg-white flex justify-center items-start py-20 z-40">
            <div className="flex flex-col gap-4 justify-center items-center">
              <button
                onClick={toggleMenu}
                className="absolute z-50 top-6 right-3"
              >
                <Image src={Cross} alt="Close Menu" width={30} height={30} />
              </button>
              <Link
                href="product"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <div className="text-black font-bold cursor-pointer">
                  Product
                </div>
              </Link>
              <Link
                href="pricing"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <div className="text-black font-bold cursor-pointer">
                  Pricing
                </div>
              </Link>
              <Link
                href="company"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <div className="text-black font-bold cursor-pointer">
                  Company
                </div>
              </Link>
              <Link
                href="faq"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <div className="text-black font-bold cursor-pointer">Faq</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HoverExpand = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      {children}
      {isHovered && (
        <div className="absolute top-full left-0 bg-white shadow-lg py-4 px-4 rounded-md z-10 overflow-hidden transition-all duration-900">
          {/* Additional options */}
          <Link
            href="product"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-gray-700 cursor-pointer py-2 px-2 hover:bg-gray-200 rounded-lg"
          >
            Product
          </Link>
          <Link
            href="feature"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-gray-700 cursor-pointer py-2 px-2 hover:bg-gray-200 rounded-lg"
          >
            Features
          </Link>
          <Link
            href="pricing"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-gray-700 cursor-pointer py-2 px-2 hover:bg-gray-200 rounded-lg"
          >
            Company
          </Link>
          <Link
            href="footer"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-gray-700 cursor-pointer py-2 px-2 hover:bg-gray-200 rounded-lg"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

<style jsx>{`
  .HoverExpand:hover .absolute {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0) scaleY(1);
  }
`}</style>;
