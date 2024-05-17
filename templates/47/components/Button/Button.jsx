import React from "react";

const Button = ({ variant = "light", text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className="my-5 flex items-center justify-center font-bold bg-violet-700 hover:bg-violet-500 px-6 py-2 rounded-lg text-white"
    >
      {text}
    </button>
  );
};

export default Button;
