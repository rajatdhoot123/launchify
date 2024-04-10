import React from "react";
import Google from "./../images/google.svg";
import Youtube from "./../images/youtube.svg";
import Image from "next/image";

const ExperiencePage = () => {
  return (
    <>
      <section className="min-h-screen bg-black w-full flex flex-col justify-center items-center">
        <div className="mt-8 w-3/4 text-white flex flex-col justify-center items-center">
          <h1 className="text-3xl font-extrabold text-center mb-8">
            My Experience
          </h1>
          <div className="flex flex-col justify-center items-center gap-8 w-full ">
            <ExperienceCard
              companyLogo={Google}
              companyName="Lead Software Engineer at Google"
              period="Nav 2019 - Present"
              discription="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
            />
            <ExperienceCard
              companyLogo={Youtube}
              companyName="Software Engineer at Youtube"
              period="Jan 2017 - Oct 2019"
              discription="At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
            />
            <ExperienceCard
              companyLogo={Google}
              companyName="Junior Software Engineer at Apple"
              period="Nav 2019 - Present"
              discription="During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
              isLast={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const ExperienceCard = ({
  companyLogo,
  companyName,
  period,
  discription,
  isLast,
}) => {
  return (
    <div
      className={`bg-black text-white rounded-lg border-gray-500 border-2 p-4 md:p-8 flex flex-col gap-4 items-center ${
        isLast ? "mb-8" : ""
      } transition duration-300 hover:bg-gray-900 hover:border-none`}
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12">
            <Image src={companyLogo} alt={companyName} />
          </div>
          <h2 className="font-bold">{companyName}</h2>
        </div>
        <p className="md:self-center">{period}</p>
      </div>
      <div>
        <p className="text-gray-500">{discription}</p>
      </div>
    </div>
  );
};

export default ExperiencePage;
