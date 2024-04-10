'use client'
import React, { useState } from 'react';
import aunty from '../assets/images/aunty.svg';

const dummyData = [
  {
    quote: 'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
    name: 'Severus Snape',
    position: 'Manager @ Slytherin',
  },
  {
    quote: 'It does not do to dwell on dreams and forget to live, remember that.',
    name: 'Albus Dumbledore',
    position: 'Headmaster @ Hogwarts',
  },
  {
    quote: 'We\'ve all got both light and dark inside us. What matters is the part we choose to act on.',
    name: 'Sirius Black',
    position: 'Prisoner @ Azkaban',
  },
  // Add more entries as needed
];

const Report = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (direction) => {
    if (direction === 'left') {
      setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : dummyData.length - 1);
    } else if (direction === 'right') {
      setCurrentIndex(prevIndex => prevIndex < dummyData.length - 1 ? prevIndex + 1 : 0);
    }
  };

  const currentItem = dummyData[currentIndex];

  return (
    <div className="pb-28 pt-12 lg:py-20 relative lg:static">
      <div className="flex flex-col md:py-0 w-auto lg:flex-row gap-10 sm:gap-20 lg:relative">
        <div className="flex justify-center">
          <img src={aunty.src} alt="" loading="lazy" />
        </div>
        <div className="flex flex-col justify-start gap-6">
          <p className="text-black max-w-3xl sm:text-4xl text-xl text-center lg:text-left font-semibold">
            “{currentItem.quote}”
          </p>
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <p className="text-lg font-bold">{currentItem.name}</p>
            <p className="font-normal">{currentItem.position}</p>
          </div>
          <div className="flex lg:justify-start justify-center">
            {/* This button might be for a different action, consider updating or removing it based on your needs */}
            <button className="w-fit bg-[#121A21] text-white px-6 py-3 rounded-lg text-lg font-bold transition-transform transform hover:scale-110">
              View full report
            </button>
          </div>
          <div className="absolute flex w-full lg:w-auto justify-center font-extrabold gap-4 py-4 right-0 bottom-0">
            <button className="px-4 py-3 rounded-full bg-[#DBE5FF]" onClick={() => handleSlide('left')}>
              {/* Left arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
                <path d="M20.583 13.2777L5.41634 13.2777" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 20.8611L5.41667 13.2777L13 5.69439" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="px-4 py-3 rounded-full bg-white" onClick={() => handleSlide('right')}>
              {/* Right arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
                <path d="M5.41699 15.7222H20.5837" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 8.13887L20.5833 15.7222L13 23.3055" stroke="#0A2640" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
