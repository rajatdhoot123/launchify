import React from 'react'
import Banner from '../Banner/Banner'
import Image from 'next/image';
import logo from "../../assets/logo.svg";


const Footer = () => {
    return (
      <footer className="bg-transparent flex items-center justify-center mt-[50px] pb-10">
        <div className="footer-container w-full max-md:px-5 md:w-[75%]  flex flex-col items-center max-md:gap-5 md:flex-row md:items-start justify-between">
          {/* comapnay div */}
          <div className="company md:w-1/5 flex flex-col gap-6">
            <div className="logo">
              <Image src={logo} width={31} height={38} alt="logo" />
            </div>
            <p className="text-sm text-white/60">
              What matters is productivity with fun culture.
            </p>
          </div>

          {/* links */}
          <div className="links font-semibold flex justify-between max-md:mx-auto w-[90%] md:w-1/5">
            <ul className="flex flex-col gap-5 text-white/60">
              <h4 className="text-white">About</h4>
              <li>Contact</li>
              <li>Blog</li>
              <li>Story</li>
            </ul>
            <ul className="flex flex-col gap-5 text-white/60">
              <h4 className="text-white">Company</h4>
              <li>Product</li>
              <li>Press</li>
              <li>More</li>
            </ul>
          </div>

          {/* banner */}
          <Banner></Banner>
        </div>
      </footer>
    );
}

export default Footer
