import React from "react";

const Tag = (props) => {
  return (
    <div>
      <div className="bg-white rounded-xl px-10 py-10 sm:px-16 sm:py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col gap-6 ">
            <div className="flex gap-4 md:flex-row flex-col md:items-end items-start">
              <p className="text-4xl font-semibold">{props.item.title} </p>
              <span className={`font-bold font-lg tracking-tighter bg-[#DBE5FF] text-[#121A21] px-4 py-1 rounded-md ${props.item.for ? '' : 'hidden'}`}>
                {props.item.for}
              </span>
            </div>
            <p className="max-w-auto md:max-w-md md:text-2xl text-lg">{props.item.desc}</p>
          </div>

          <div>
            <div className="flex flex-col gap-6 items-start md:items-center">
              <p className="text-7xl font-bold text-left md:text-right">${props.item.cost}</p>
              <button className=" bg-[#121A21] rounded-lg text-white w-fit px-6 py-3">{props.item.button}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
