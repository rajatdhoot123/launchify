import React from "react";
import msgImg from "../assets/images/Section2/msgBox.png";
import Card from "./Card";
import calender from "../assets/images/Section2/calenderImg.png";
import ai from "../assets/images/Section2/aiImg.png";
const Section2 = () => {
  return (
    <div className="space-y-20">
      {/* inbox  */}

      <div className=' px-12 py-5 grid grid-cols-1 gap-3 place-content-center md:grid-cols-2 section2 bg-no-repeat bg-cover rounded-2xl'>
        {/* left  */}
        <div className="md:ml-10 mx-auto">
          <img src={msgImg.src} alt="" />
        </div>
        {/* right  */}
        <div className="max-w-sm mx-auto md:text-left text-center flex flex-col justify-center gap-3">
          <p className="text-2xl font-bold text-black ">One inbox</p>
          <p className="text-black">
            Never miss a notification again and make sure you always react to
            all new replies, messages and more. Engagement is key!
          </p>
        </div>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="calender bg-no-repeat bg-cover rounded-3xl shadow-md">
          <Card img={calender} />
        </div>
        <div className="ai bg-no-repeat bg-cover rounded-3xl shadow-md">
          <Card
            img={ai}
            title="AI"
            desc="No content idea? No problem! Our powerful AI integration helps you generate content ideas. It even supports you in writing them."
            color="black"
          />
        </div>
      </div>

      {/* report  */}
      <div className="bg-[#EAE8FF] text-black text-center space-y-6 py-10 px-10 rounded-3xl">
        <div className="space-y-3">
        <p className="text-4xl font-extrabold">Get a quick quote</p>
        <p className="max-w-xs mx-auto">
          We will get back to you when we are ready to explore your new world
        </p>
        </div>
        <div className="flex flex-col md:flex-row 0 justify-center gap-3 max-w-sm lg:max-w-xl mx-auto"> 
          <div className="border-2 border-gray-200/50 bg-[#C1C1C1]/50 md:pr-32 md:pl-5 rounded-lg py-4">Email address</div>
          <div className="border  border-gray-200/50 bg-white font-bold py-4 text-base place-content-center px-12 rounded-lg">Send an email</div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
