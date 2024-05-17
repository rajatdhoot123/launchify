import React from "react";
import down from '../../assets/icons/header/down.svg'
import Image from "next/image";

const Tag = ({ text, showDropdown=false, className="" }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <button
        className={`my-4 uppercase text-sm px-4 py-2  flex items-center justify-center gap-2 rounded-full font-semibold ${
          className ? className : "bg-white text-dark"
        }`}
      >
        <span>{text}</span>

        {showDropdown && (
          <Image src={down} alt="Down Arrow" className="fill-white" width={15} height={15} />
        )}
      </button>
    </div>
  );
};

export default Tag;
