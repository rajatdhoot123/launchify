import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/icons/header/logo.svg";
import MenuIcon from "../../assets/icons/header/manu.svg";
import Button from "../Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setAnimationDirection(isMenuOpen ? "slideOut" : "slideIn");
  };

  return (
    <nav className="relative bg-white rounded-lg py-5 p-4 lg:p-2 lg:px-8 w-full lg:w-[80%] mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="logo flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={32} height={32} />
        <span className="font-bold text-lg md:text-xl">Darkmode</span>
      </div>

      {/* Navigation */}
      <div className="hidden lg:flex md:flex items-center gap-12">
        <Link href="about" spy={true} smooth={true} offset={-70} duration={500}>
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="about" spy={true} smooth={true} offset={-70} duration={500}>
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            Features
          </p>
        </Link>
        <Link
          href="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            About
          </p>
        </Link>
        <Link href="login" spy={true} smooth={true} offset={-70} duration={500}>
          <p className="text-lg font-semibold hover:text-violet-500 cursor-pointer">
            Login
          </p>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden md:hidden">
        <button onClick={toggleMenu}>
          <Image src={MenuIcon} alt="Menu" width={24} height={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 right-0 z-50 mt-2 bg-white shadow-md py-4 px-6 flex flex-col items-center gap-4 menu-container ${animationDirection}`}
        >
          <Link
            href="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-violet-500 cursor-pointer">
              About
            </p>
          </Link>
          <Link
            href="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="text-lg hover:text-violet-500 cursor-pointer">
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
            <p className="text-lg hover:text-violet-500 cursor-pointer">
              Login
            </p>
          </Link>
          <Button text="Join Now" className="px-5 py-2" />
        </div>
      )}
      <style jsx>{`
        .menu-container.slideIn {
          animation: slideInAnimation 0.5s forwards;
        }

        .menu-container.slideOut {
          animation: slideOutAnimation 0.5s forwards;
        }

        @keyframes slideInAnimation {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes slideOutAnimation {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;
