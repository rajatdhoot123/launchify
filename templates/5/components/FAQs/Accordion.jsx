"use client";

import { motion } from "framer-motion";
import down from '../../assets/icons/header/down.svg'
import Image from "next/image";



const Accordion = ({ titles, details }) => {
  /* VARIABLES */
  const hoverStyle =
    "flex justify-between items-center  cursor-pointer text-black/70 hover:text-pink-20 group-open:text-gray-800";
  const iconStyle = "transition group-open:content-iconMinus content-iconPlus";
  const detailsStyle =
    "mt-3 group-open:animate-fadeIn text-gray-400 font-WorkSans text-sm";
  const groupStyle = "group outline-none bg-transparent  w-full py-4 my-4 px-4 rounded-xl";
  const paddingY =
    "relative flex items-center justify-between group px-10 group-hover/parent:bg-[#295d4e18]";

  return (
    <div className="group/parent">
      <div className={paddingY}>
        <details className={groupStyle}>
          <summary className={`${hoverStyle}`}>
            <span>{titles}</span>
            <span className={iconStyle}></span>
          </summary>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className={detailsStyle}
          >
            {details}
          </motion.p>
        </details>
        <div className="flex justify-center items-center">
          <Image
            src={down}
            width={10}
            height={10}
            alt="accordion"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
