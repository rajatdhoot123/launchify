import React from 'react';

const textOptions = ['App Design', 'Dashboard', 'Wireframe', 'UX Design'];

const RotatingText = () => {
  const doubledTextOptions = [...textOptions, ...textOptions, ...textOptions, ...textOptions, ...textOptions];

  return (
    <div className='overflow-hidden h-20 w-full bg-orange-500 flex items-center'>
      <div className="overflow-hidden relative text-xl w-full font-bold -rotate-3" style={{height: 'fit-content'}}>
        <div className='flex'>
        <div className="inline-block whitespace-nowrap animate-marquee bg-white py-2"   >
          {doubledTextOptions.map((text, index) => (
            <span key={index} className="mx-4">
              {text}
            </span>
          ))}
        </div>
        <div className="inline-block whitespace-nowrap animate-marquee bg-white py-2" aria-hidden="true"   >
          {doubledTextOptions.map((text, index) => (
            <span key={index} className="mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default RotatingText;
