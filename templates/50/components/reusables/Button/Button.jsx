import React from "react";
const Button = ({ children, variant = "light", onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-semibold ${
        variant == "light"
          ? "bg-orange text-white"
          : variant == "dark"
          ? "text-orange"
          : "bg-white text-orange"
      }  py-3 px-4 border-orange rounded-lg text-nowrap ${className}`}
    >
    {children}  
    </button>
  );
};

export default Button;
