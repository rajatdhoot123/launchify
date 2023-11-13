import React, { useState } from "react";

const Collapsible = ({ title, children, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="container mx-auto">
      <div className="panel panel-default">
        <button
          className="w-full flex items-center space-x-1"
          onClick={handleToggle}
        >
          <svg
            className={`transition-all transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
          {title}
        </button>
        <div className={open ? "panel-collapse" : "panel-collapse panel-close"}>
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .panel-collapse {
            max-height: 2000px;
            overflow: scroll;
            transition: max-height 0.5s ease;
          }
          .panel-close {
            max-height: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Collapsible;
