import React from "react";

const Button = ({ variant = "light", text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className="my-5 flex items-center justify-center font-bold bg-yellow-500 hover:bg-yellow-700 px-6 py-2 rounded-lg text-black"
    >
      {text}
    </button>
  );
};

export default Button;
