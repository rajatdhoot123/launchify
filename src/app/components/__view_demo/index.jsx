import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = (e) => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200); // Adjust the timeout based on your transition duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-200 ease-in-out ${
        isClosing ? "ease-out" : "ease-in"
      }`}
    >
      <div
        className="fixed h-screen w-full bg-black opacity-50"
        onClick={closeModal}
      />
      <div
        onClick={closeModal}
        className="absolute w-full top-1/2 transform -translate-y-1/2 m-auto flex justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white flex flex-col rounded-lg w-10/12 h-[80vh] ${
            isOpen ? "transform translate-y-0" : "transform -translate-y-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="overflow-y-scroll flex-1">{children}</div>
          <div>
            <div className="border-t border-gray-300 p-2 flex justify-end">
              <Button className="cursor-pointer" onClick={closeModal}>Close</Button>
              {/* <button className="">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-width="2"
                    d="M3,3 L21,21 M3,21 L21,3"
                  ></path>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
