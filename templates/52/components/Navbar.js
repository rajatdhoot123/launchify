"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../images/logo.svg";
import Cross from "./../images/cross.svg";
import HamburgerMenuIcon from "./../images/manu.svg"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 relative">
            <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <span className="text-black font-bold text-lg">Company Name</span>
        </div>
        <div className="hidden md:flex items-center space-x-4 gap-8">
          <Link href="about" spy={true} smooth={true} duration={500}>
            <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
              About Me
            </div>
          </Link>
          <Link href="skills" spy={true} smooth={true} duration={500}>
            <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
              Skills
            </div>
          </Link>
          <Link href="projects" spy={true} smooth={true} duration={500}>
            <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
              Projects
            </div>
          </Link>
          <Link href="contact" spy={true} smooth={true} duration={500}>
            <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
              Contact Me
            </div>
          </Link>
        </div>
        <div className="flex">
          <button className="text-white font-bold bg-black p-4 rounded-lg hover:text-gray-500">
            Resume
          </button>
        </div>
        <div className="md:hidden">
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
              <button onClick={toggleMenu} className="absolute z-50 top-6 right-3">
              <Image src={Cross} alt="Close Menu" width={30} height={30} />
            </button>
              <Link href="about" spy={true} smooth={true} duration={500}>
                <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
                  About Me
                </div>
              </Link>
              <Link href="skills" spy={true} smooth={true} duration={500}>
                <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
                  Skills
                </div>
              </Link>
              <Link href="projects" spy={true} smooth={true} duration={500}>
                <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
                  Projects
                </div>
              </Link>
              <Link href="contact" spy={true} smooth={true} duration={500}>
                <div className="text-black font-bold hover:text-gray-500 cursor-pointer">
                  Contact Me
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
