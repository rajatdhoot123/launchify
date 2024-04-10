import React from "react";
import Image from "next/image";
import Aboutimg from "./../images/about.svg";

const About = () => {
  return (
    <div
      className="container min-h-screen mx-auto px-4 flex flex-col items-center justify-center mt-8"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-1/2 md:w-full h-60 md:h-auto">
            <Image src={Aboutimg} alt="Your Image" />
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="mb-4">
            <h1 className="text-5xl mb-8 gap-4 flex justify-center lg:justify-start">
              About
              <span className="font-bold">Me</span>
            </h1>
            <p className="mb-8 text-gray-500">
              I am a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
            </p>
            <p className="mb-8 text-gray-500">
              I began my journey as a web developer in 2015, and since then, I
              have continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I am building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="mb-8 text-gray-500">
              When I am not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
