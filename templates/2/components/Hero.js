import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Man from "./../images/man.svg";
import Reddit from "./../images/reddit.svg";
import Facebook from "./../images/facebook.svg";
import Twitter from "./../images/twitter.svg";
import Skipe from "./../images/skipe.svg";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:mt-0">
        <section className="flex flex-col md:flex-row items-center justify-between min-h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-8">
            <div className="mb-4 text-left flex flex-col justify-center items-start gap-8">
              <p className="text-6xl">
                Hello I am <span className="font-bold">Evren Shah.</span>
              </p>
              <p className="text-6xl font-extrabold flex flex-col lg:flex-row gap-4">
                Frontend
                <span
                  className="text-white font-extrabold "
                  style={{
                    textShadow:
                      "-3px -3px 0 black, 0 -3px 0 black, 3px -3px 0 black, -3px 0 0 black, 3px 0 0 black, -3px 3px 0 black, 0 3px 0 black, 3px 3px 0 black",
                  }}
                >
                  Developer
                </span>
              </p>
              <p className="text-6xl">
                based in <span className="font-extrabold">India.</span>
              </p>
            </div>
            <div className="w-full h-80 md:h-full flex md:hidden justify-center items-center">
              <Image src={Man} alt="Hero Image" />
            </div>
            <p className="text-gray-500">
              I am Evren Shah. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>

            <div className="flex p-2 rounded-md justify-center items-center">
              <div className="flex gap-4 items-center">
                <SocialIcon icon={Facebook} alt="Facebook" />
                <SocialIcon icon={Reddit} alt="Reddit" />
                <SocialIcon icon={Twitter} alt="Twitter" />
                <SocialIcon icon={Skipe} alt="Skipe" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 hidden md:flex justify-center items-center">
            <div className="w-full h-80 md:h-full flex justify-end">
              <Image src={Man} alt="Hero Image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const SocialIcon = ({ icon, alt }) => {
  return (
    <div className="group hover:bg-black hover:text-white p-4 rounded-lg border-2 border-black transition duration-300 ease-in-out">
      <Image
        src={icon}
        alt={alt}
        width={30}
        height={30}
        className="group-hover:invert"
      />
    </div>
  );
};

export default Hero;
