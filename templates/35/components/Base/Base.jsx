import React from "react";
import Bg from "../../assets/images/base/bg.png";
import White from "../../assets/images/base/white.png";
import Img1 from "../../assets/images/base/img1.png";
import Image from "next/image";
import { Inter } from "next/font/google";

const Base = () => {
  return (
    <div
      className="container max-w-navbar mx-auto flex flex-col gap-8 px-4 md:px-8"
      id="features"
    >
      <div
        className="flex p-4 py-16 rounded-2xl "
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundSize: "100% 200%",
        }}
      >
        <div className=" flex flex-col lg:flex-row justify-center items-center mx-auto w-[90%]">
          <div className="flex w-full lg:w-[60%] flex-col gap-8 justify-center items-center mb-8 lg:mb-0">
            <div>
              <p
                className="font-extrabold text-5xl lg:text-7xl text-white w-full lg:w-[82%] text-center lg:text-start"
                style={{ fontFamily: "Inter" }}
              >
                Monitor & review meta tags issues!
              </p>
            </div>
            <div>
              <p className="font-regular text-lg lg:text-xl text-white w-full lg:w-4/5 text-center lg:text-start">
                Meta tags are an important aspect of search engine optimization
                (SEO) and website design. They provide crucial information to
                search engines, helping them understand.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mx-auto">
            <Image src={White.src} alt="White" width={500} height={500} />
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: "Inter" }}
        className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-8 mt-12 lg:mt-18"
      >
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3 gap-4">
          <p className="text-[#F951A5] font-black text-3xl md:text-4xl lg:text-5xl">
            20x
          </p>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">Indexing</p>
          <p className="font-medium text-base md:text-lg lg:text-xl text-center text-gray-500 w-[80%] lg:w-2/3">
            The simple SEO toolkit to get indexed super fast!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3 gap-4">
          <p className="text-[#F951A5] font-black text-3xl md:text-4xl lg:text-5xl">
            5k+
          </p>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">Installs</p>
          <p className="font-medium text-base md:text-lg lg:text-xl text-center text-gray-500 w-[80%] lg:w-2/3">
            The simple SEO toolkit to get indexed super fast!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-2/3 md:w-1/3 gap-4">
          <p className="text-[#F951A5] font-black text-3xl md:text-4xl lg:text-5xl">
            2.5M
          </p>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">Traffic</p>
          <p className="font-medium text-base md:text-lg lg:text-xl text-center text-gray-500 w-[80%] lg:w-2/3">
            The simple SEO toolkit to get indexed super fast!
          </p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Inter" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full max-w-[90%] mx-auto mt-12 lg:mt-16"
      >
        <div className="flex flex-col text-center justify-center gap-8 items-start rounded-3xl p-4 lg:p-8 bg-gradient-to-b from-[#FFA7D3] via-[#FBCEE9] to-[#F7F6FF]">
          <Image src={Img1} alt="img1" />
          <p className="font-bold text-xl md:text-xl lg:text-3xl">
            Get indexed drive traffic!
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-xl text-start">
            Get indexed and drive traffic to your website with the help of
            Movevirtual. We understand the importance of being visible.
          </p>
          <button className="bg-black rounded-full p-4 px-6 text-sm md:text-lg text-white font-bold">
            Get Started
          </button>
        </div>

        <div className="flex flex-col text-center justify-center gap-8 items-start rounded-3xl p-4 lg:p-8 bg-gradient-to-b from-[#FFA7D3] via-[#FBCEE9] to-[#F7F6FF]">
          <Image src={Img1} alt="img2" />
          <p className="font-bold text-xl md:text-xl lg:text-3xl">
            Simplify with auto indexing!
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-xl text-start">
            Optimize your website meta tags, content, and overall structure to
            help you get indexed and attract more visitors to your site.
          </p>
          <button className="bg-black rounded-full p-4 px-6 text-sm md:text-lg text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Base;
