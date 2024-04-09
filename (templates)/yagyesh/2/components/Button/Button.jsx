import React from "react";

const Button = ({ variant = "light", text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`my-5 flex items-center justify-center font-bold ${
        variant == "light" ? "bg-green text-white" : variant == "dark" ? "bg-light-green text-dark" : "bg-white text-dark"}  py-3 rounded-xl text-nowrap ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;