import React from "react";

const Button = ({ variant = "light", text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className="my-5 flex items-center justify-center font-bold bg-green-500 hover:bg-green-700 px-6 py-2 rounded-lg text-white"
    >
      {text}
    </button>
  );
};

export default Button;
