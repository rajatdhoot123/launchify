import React from "react";


const Button = ({ children, variant = "light", onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-semibold ${
        variant == "dark"
          ? "bg-black text-white"
          : variant == "light"
          ? "text-purple border-purple"
          : "bg-white"
      }  py-3 px-6 rounded-full text-nowrap cursor-pointer duration-200 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
