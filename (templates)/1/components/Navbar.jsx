'use client'
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import JCLogo from "../images/JCLogo.svg";

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex justify-center py-8">
            <nav className="lg:grid hidden max-w-fit h-16 rounded-full text-white bg-black px-6 sm:px-8 lg:px-2 mx-auto  grid-flow-col">
                <div
                    className={`w-[20vw] col-start-4 ml-8 col-end-6 flex justify-center gap-4 items-center transition-all duration-300 `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src={JCLogo.src} className={`h-10 w-auto transition-all duration-300 ${
                        isHovered ? "-translate-x-[8px]" : "translate-x-0"
                    }` } />
                    <p className="font-bold w-1/3 transition-opacity duration-300">
                        {!isHovered && "JCREA"}
                        {isHovered && <p className="font-light text-xs">Made By</p>}
                        {isHovered && "Jayesh Patil"}
                    </p>
                </div>
                <ul className="hidden lg:flex col-start-1 col-end-4 text-black-500 items-center">
                    <LinkScroll
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="px-6 py-3 mx-2 cursor-pointer animation-hover inline-block rounded-full relative text-black-500 transition hover:bg-[#302c2c]"
                    >
                        Home
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="px-6 py-3 mx-2 cursor-pointer animation-hover inline-block rounded-full relative text-black-500 transition hover:bg-[#302c2c]"
                    >
                        About
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="px-6 py-3 mx-2 cursor-pointer animation-hover inline-block rounded-full relative text-black-500 transition hover:bg-[#302c2c]"
                    >
                        Services
                    </LinkScroll>
                </ul>
                <ul className="hidden lg:flex col-start-12 col-end-15 text-black-500 items-center">
                    <LinkScroll
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="px-6 py-3 mx-2 cursor-pointer animation-hover inline-block rounded-full relative text-black-500 transition hover:bg-[#302c2c]"
                    >
                        Resume
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="px-6 py-3 mx-2 cursor-pointer animation-hover inline-block rounded-full relative text-black-500 transition hover:bg-[#302c2c]"
                    >
                        Projects
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="px-6 py-3 mx-2 cursor-pointer animation-hover inline-block relative rounded-full text-black-500 transition hover:bg-[#302c2c]"
                    >
                        Contact
                    </LinkScroll>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
