import React from 'react'
import star from '../../assets/icons/hero/star.svg'
import Image from 'next/image'


const TopFooter = () => {
    return (
      <div className="relative my-10 md:my-[100px] py-10 flex text-nowrap justify-between text-center text-[40px] md:text-[97px] font-bold w-[85%] mx-auto overflow-hidden">
        <Image
          src={star}
          alt="star"
          width={84}
          height={102}
          className="absolute -top-5 left-[50%] right-[50%] translate-x-[-50%]"
        />

        <h2 className="max-md:text-wrap w-full">Join our beta</h2>
        <h2 className="text-white/50 max-lg:hidden">Join our beta</h2>

        {/* DIVIDER */}
        <hr className="absolute bottom-0 md:left-10 md:right-10 h-[1px] border-[##808080] opacity-80" />
      </div>
    );
}

export default TopFooter;