import React from "react";

const Tag = ({showDropdown=false, variant , children}) => {
  return (
    <button
      className={`${variant == "light" ? "bg-[#1053F3]/10" : "bg-white"} text-main my-4 uppercase text-sm px-4 py-2  flex items-center justify-center gap-2 rounded-full font-semibold `}
    >
      <span>{children}</span>
    </button>
  );
};

export default Tag;
