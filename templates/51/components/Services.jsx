import React from "react";

const Services = (props) => {
  return (
    <div className="flex w-full hover:bg-orange-400 transition-all flex-col justify-between bg-white/25 backdrop-blur-3xl transform hover:scale-105 rounded-3xl relative">
      <p className="py-8 px-10 text-2xl lg:text-3xl font-medium">{props.title}</p>
      <hr className="mb-6 w-full"/>
      <div className="h-5/6 ">
        <img src={props.img.src} className="w-full h-full object-cover  " alt="" />
      </div>
    </div>
  );
};

export default Services;
