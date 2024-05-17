import React from "react";
import Image from "next/image";
import Project from "../../assets/images/base/projext.png";
import Find from "../../assets/images/base/find.png";
import Work from "../../assets/images/base/work.png";
import Pay from "../../assets/images/base/pay.png";

const Paragraph = ({ image, title, description, underline }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image src={image} alt="Search" width={80} height={80} />
      <p className="font-bold text-white text-lg md:text-xl lg:text-3xl text-center">
        {title}
      </p>
      <p className="text-[#828282] text-sm md:text-base lg:text-xl text-center w-2/3">
        {description}
      </p>
      <p className="text-[#F1C134] underline decoration-[#F1C134]">
        {underline}
      </p>
    </div>
  );
};

const Base = () => {
  const paragraphs = [
    {
      image: Project,
      title: "Post project",
      description: "Build a shortlist of agencies to evaluate or contact.",
      underline: "Shortlist",
    },
    {
      image: Find,
      title: "Find & hire",
      description:
        "Share your project with agencies using this simple briefing template.",
      underline: "Shortlist",
    },
    {
      image: Pay,
      title: "Award & pay",
      description: "Examples of what real briefs and budgets look like.",
      underline: "Example Briefs",
    },
    {
      image: Work,
      title: "Work & approve",
      description:
        "Get recommendations from people who have worked with agencies.",
      underline: "Digital Charities",
    },
  ];

  return (
    <>
      <div className="container max-w-navbar mx-auto flex flex-col gap-12 p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-around md:flex-row gap-8 w-full lg:w-2/3 mx-auto mt-12 md:mt-24">
          {paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className="flex flex-col text-center justify-center gap-8 items-center px-4 lg:px-8 py-4 lg:py-8"
            >
              <Paragraph
                image={paragraph.image}
                title={paragraph.title}
                description={paragraph.description}
                underline={paragraph.underline}
              />
            </div>
          ))}
        </div>
        <div className="container max-w-navbar rounded-3xl flex flex-col gap-8 md:gap-12 w-full mx-auto bg-[#363636] py-8 md:py-16 px-4 md:px-8 mt-4 lg:mt-24">
          <p className="text-3xl md:text-6xl font-extrabold text-white text-center">
            Get a quick quote
          </p>
          <p className="text-lg md:text-xl mx-auto w-full lg:w-1/2 text-white text-center">
            We will get back to you when we are ready to explore your new world
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="p-4 bg-[#C1C1C1] flex gap-4 rounded-xl w-full md:w-1/3">
              <input
                type="text"
                placeholder="Email address"
                className="flex-grow text-black bg-[#C1C1C1]"
              />
            </div>
            <div className="px-2 lg:px-8 py-2 lg:py-2 font-bold bg-white text-black rounded-xl">
              <button className="px-6 py-2">Send an email</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
