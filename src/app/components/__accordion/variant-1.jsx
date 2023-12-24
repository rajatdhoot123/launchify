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
            className={`lucide lucide-chevron-down transition-all transform duration-300 ${
              open ? "" : "-rotate-90"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
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
            max-height: 1500px;
            overflow: scroll;
            transition: max-height 0.3s ease;
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
