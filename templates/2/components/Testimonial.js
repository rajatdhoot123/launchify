import React from "react";
import Image from "next/image";
import Person1Image from "./../images/img1.svg";
import Person2Image from "./../images/img2.svg";

const Testimonial = () => {
  return (
    <div className=" bg-gray-100 mx-auto px-8">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">My Testimonials</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <TestimonialCard
            image={Person1Image}
            name="John Doe"
            position="Designer"
            description="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
          />
          <TestimonialCard
            image={Person2Image}
            name="Jane Smith"
            position="Designer"
            description="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
          />
          <TestimonialCard
            image={Person1Image}
            name="Alice Johnson"
            position="Designer"
            description="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ image, name, position, description }) => {
  return (
    <div className="group hover:bg-black hover:text-white bg-white rounded-xl shadow-md p-6 w-80 transition duration-300 ease-in-out">
      <div className="flex flex-col justify-center items-center mb-4 gap-4">
        <div className="w-30 h-30 overflow-hidden mr-4">
          <Image src={image} alt={name} width={96} height={96} className="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-gray-600 text-center">{description}</h2>
          <hr className="w-40 border-1 border-black group-hover:border-white" />
          <h2 className="text-xl font-semibold ">{name}</h2>
          <p className=" text-gray-600 font-semibold text-center">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
