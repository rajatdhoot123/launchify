import React from "react";
import Image from "next/image";
import JavaScriptIcon from "./../images/js.svg";
import NextJSIcon from "./../images/next.svg";
import Socket from "./../images/socket.svg";
import Git from "./../images/git.svg";

const Skill = ({ icon, name }) => {
  return (
    <div className="group bg-white hover:bg-black  rounded-lg h-40 w-40 p-4 flex flex-col justify-center gap-4 items-center border-2 border-black transition duration-300 ease-in-out mb-8 ">
      <div>
        <Image
          src={icon}
          alt={name}
          width={50}
          height={50}
          className="group-hover:invert"
        />
      </div>
      <div className="text-sm font-bold group-hover:text-white">{name}</div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { icon: JavaScriptIcon, name: "JavaScript" },
    { icon: NextJSIcon, name: "Next.js" },
    { icon: Socket, name: "Socket.io" },
    { icon: Git, name: "Git" },
    { icon: JavaScriptIcon, name: "JavaScript" },
    { icon: NextJSIcon, name: "Next.js" },
    { icon: Socket, name: "Socket.io" },
    { icon: Git, name: "Git" },
    { icon: JavaScriptIcon, name: "JavaScript" },
    { icon: NextJSIcon, name: "Next.js" },
  ];

  return (
    <section className="container min-h-screen mx-auto flex flex-col justify-center items-center mt-16 lg:mt-0" id="skills">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-6xl font-bold">Skills</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
