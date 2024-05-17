import React from "react";
import Image from "next/image";
import Ui from "../../assets/icons/base/ui.svg";
import Dev from "../../assets/icons/base/dev.svg";
import Content from "../../assets/icons/base/content.svg";
import { Inter } from "next/font/google";

const Paragraph = ({ title, description }) => {
  return (
    <div className="flex flex-col  items-start gap-2" id="features">
      <p
        style={{ fontFamily: "Inter" }}
        className="font-bold flex text-lg md:text-xl lg:text-2xl text-start"
      >
        {title}
      </p>
      <p
        style={{ fontFamily: "Inter" }}
        className="text-gray-500 font-medium text-sm md:text-base lg:text-lg text-start"
      >
        {description}
      </p>
    </div>
  );
};

const Base = () => {
  const paragraphs = [
    {
      title: "UI Design",
      description:
        "Creating visual designs for website, mobile applications with wireframes & prototype",
    },
    {
      title: "Development",
      description:
        "Create website & responsive website by HTML/CSS,React & web-flow",
    },
    {
      title: "Content writing",
      description:
        "We give you the best content for you product that will attract customers",
    },
  ];
  return (
    <>
      <div className="container max-w-navbar mx-auto flex flex-col gap-24 p-4 md:p-8">
        <div className="mt-24">
          <p
            style={{ fontFamily: "Inter" }}
            className="font-bold text-center text-4xl lg:text-5xl flex justify-center items-center"
          >
            How we help businesses
          </p>
        </div>
        <div className="flex flex-row lg:flex-col justify-center items-center gap-8 md:gap-16 w-full">
          <div className="flex flex-col justify-center items-center gap-12 md:gap-24 w-full">
            <div className="flex flex-col justify-between md:flex-row gap-16">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="flex flex-col text-start justify-center gap-8 items-start  shadow-lg px-8 lg:px-12 py-4 lg:py-8"
                >
                  <Image
                    src={index === 0 ? Ui : index === 1 ? Dev : Content}
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
        </div>
      </div>
    </>
  );
};

export default Base;
