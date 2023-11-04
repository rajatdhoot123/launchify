"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container flex md:hidden mx-auto items-center justify-between p-5">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="pointer-cursor md:hidden block lg:hidden mr-5"
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <a
            href="/"
            className="flex items-center hover:scale-125 transition duration-150 ease-in"
          >
            <div className="flex-shrink-0">
              <div className="text-xl font-bold">Logo</div>
            </div>
          </a>
        </div>
        <button className="p-2 rounded-lg font-bold text-xl">Button</button>
      </nav>
      <nav className="hidden md:flex items-center text-white justify-between p-2 px-5 shadow-md">
        <a
          href="/"
          className="flex items-center hover:scale-125 transition duration-150 ease-in text-black text-xl font-bold"
        >
          Logo
        </a>
        <div
          className="hidden peer-checked:block md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  AboutUs
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Treatments
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="p-2 rounded-lg text-black font-bold">Button</button>
      </nav>
      <div
        className={`z-20 md:hidden fixed inset-0 bg-white h-screen w-full md:w-96 transform transition-all ease-in-out duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="w-full justify-between flex items-center p-5">
            <a
              href="/"
              className="flex items-center hover:scale-125 transition duration-150 ease-in text-black text-xl font-bold"
            >
              Logo
            </a>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <strong className="text-[28px] align-center cursor-pointer alert-del">
                &times;
              </strong>
            </button>
          </div>
          <div className="px-5">
            <div
              className=" peer-checked:block md:flex md:items-center md:w-auto w-full"
              id="menu"
            >
              <nav>
                <ul className="items-center justify-between text-base text-gray-700">
                  <li>
                    <a className="md:p-4 py-3 px-0 block" href="#">
                      AboutUs
                    </a>
                  </li>
                  <li>
                    <a className="md:p-4 py-3 px-0 block" href="#">
                      Treatments
                    </a>
                  </li>
                  <li>
                    <a className="md:p-4 py-3 px-0 block" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
