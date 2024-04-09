import Image from 'next/image';
import React from 'react'
import logo from "../../assets/logo.svg";
import config from '../../config';

const Footer = () => {

    
    return (
      <div className="bg-white py-10 w-full">
        <div className="w-[90%] mx-auto md:w-3/4 responsive-flex">
          <div className="w-3/4 md:w-auto flex justify-between gap-12">
            {config.footerLinks.map((link, index) => {
              return (
                <ul key={index} className="flex flex-col gap-6">
                  <h3 className="text-black font-bold">{link.title}</h3>
                  {link.otherLinks.map((item, index) => (
                    <li key={index} className={`text-black/60`}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>
          <div className="company flex w-3/4 md:w-auto flex-col gap-4 justify-start items-start">
            <div className="flex items-center justify-start gap-2">
              <Image src={logo} alt="logo" width={50} height={50} />
              <span className="font-bold text-lg">Posty</span>
            </div>

            <p className="text-green opacity-70">
              What matters is productivity with fun culture
            </p>

            <p className="text-green opacity-70">
              © Copyright The Prepared Company Pty Ltd 2023
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer
