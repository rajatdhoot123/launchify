import React from "react";
import Man1 from "../../assets/images/man/man1.png";
import Man2 from "../../assets/images/man/man2.png";
import Signup from "../../assets/icons/base/signup.svg";
import Profile from "../../assets/icons/base/profile.svg";
import Connect from "../../assets/icons/base/connect.svg";
import Tick from "../../assets/icons/base/tick.svg";
import Image from "next/image";

const Paragraph = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <p className="font-bold text-lg md:text-xl lg:text-3xl">{title}</p>
      <p className="text-gray-500 text-sm md:text-base lg:text-xl text-start md:text-left">
        {description}
      </p>
    </div>
  );
};

const Base = () => {
  const paragraphs = [
    {
      title: "Sign Up",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    },
    {
      title: "Create Profile",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    },
    {
      title: "Connect w/ Clients",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    },
  ];

  return (
    <div
      className="container max-w-navbar mx-auto w-full flex flex-col justify-center gap-8 md:gap-16 items-center px-8 md:px-4"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 w-full">
        <div className="flex justify-center items-center w-full md:w-2/5">
          <Image src={Man1} alt="man1" height={500} width={500} />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 md:gap-24 w-full md:w-3/5">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Let&apos;s set you up!
          </div>
          {paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className="flex justify-center gap-4 md:gap-8 items-center"
            >
              <Image
                src={index === 0 ? Signup : index === 1 ? Profile : Connect}
                alt={paragraph.title}
                height={80}
                width={80}
              />
              <Paragraph
                title={paragraph.title}
                description={paragraph.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-8 w-full p-4 md:p-4 lg:p-2">
        <div className="flex flex-col justify-center items-start gap-8 md:gap-12 w-full md:w-3/5">
          <p className="text-xl md:text-3xl lg:text-5xl font-bold text-center md:text-left">
            Start making money!
          </p>
          <div className="flex gap-2 md:gap-6 items-center">
            <Image src={Tick} alt="tick" height={30} width={30} />
            <p className="font-bold text-base md:text-lg lg:text-2xl">
              Set your availability
            </p>
          </div>
          <div className="flex gap-2 md:gap-6 items-center">
            <Image src={Tick} alt="tick" height={30} width={30} />
            <p className="font-bold text-base md:text-lg lg:text-2xl">
              Name your Price
            </p>
          </div>
          <div className="flex gap-2 md:gap-6 items-center">
            <Image src={Tick} alt="tick" height={30} width={30} />
            <p className="font-bold text-base md:text-lg lg:text-2xl">
              Earn your money and keep it, that&apos;s right!
            </p>
          </div>
          <div className="flex gap-2 md:gap-6 items-center">
            <Image src={Tick} alt="tick" height={30} width={30} />
            <p className="font-bold text-base md:text-lg lg:text-2xl">
              No service fee charged now or ever.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-2/5">
          <Image src={Man2} alt="man2" height={600} width={600} />
        </div>
      </div>

      <hr className="w-1/3 border-2 border-gray-300 my-8" />
      <div className="flex justify-between items-center rounded-2xl border-2 border-gray-300 bg-gray-100 p-6 md:p-12 w-full">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-8 w-full">
          <p className="text-4xl text-center lg:text-start md:text-4xl lg:text-5xl font-bold text-gray-800">
            Offer your service at your price.
          </p>
          <div className="flex justify-center lg:justify-end items-center">
            <button className="bg-green-500 hover:bg-green-700 rounded-full px-4 py-2 lg:px-6 lg:py-4 text-white text-lg md:text-2xl font-bold">
              Sign up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
