import React from "react";
import Image from "next/image";
import Project1Image from "./../images/p1.svg";
import Project2Image from "./../images/p2.svg";
import Project3Image from "./../images/p3.svg";
import Export from "./../images/export.svg";

const Project = () => {
  return (
    <div className="min-h-screen bg-black text-white mx-auto p-16 flex flex-col justify-center items-center" id="projects">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
        <div className="flex flex-col justify-center items-center gap-8">
          <ProjectCard
            image={Project1Image}
            title="01"
            name="Crypto Screener Application"
            description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
          />
          <ProjectCardRev
            image={Project3Image}
            title="02"
            name="Euphoria - Ecommerce (Apparels) Website Template"
            description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
            when an unknown printer took a galley of type and scrambled it to specimen book."
          />
          <ProjectCard
            image={Project3Image}
            title="03"
            name="Blog Website Template"
            description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, name, description }) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-16">
      <div className="w-full md:w-1/2">
        <Image src={image} alt={title} width={700} height={700} />
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center items-start gap-8">
        <h2 className="text-5xl font-bold mb-2">{title}</h2>
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <p className="text-xl text-gray-500">{description}</p>
        <Image src={Export} alt="Your Image1" />
      </div>
    </div>
  );
};

const ProjectCardRev = ({ image, title, name, description }) => {
  return (
    <div className="flex flex-col-reverse justify-center items-center md:flex-row gap-16">
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center items-start gap-8">
        <h2 className="text-5xl font-bold mb-2">{title}</h2>
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <p className="text-xl text-gray-500">{description}</p>
        <Image src={Export} alt="Your Image1" />
      </div>
      <div className="w-full md:w-1/2">
        <Image src={image} alt={title} width={700} height={700} />
      </div>
    </div>
  );
};

export default Project;
