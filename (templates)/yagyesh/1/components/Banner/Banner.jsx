import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button';
import logo from '../../assets/logo.svg'


const Banner = () => {
    return (
      <div
        className="max-md:mx-auto w-full md:self-end md:w-[485px] gray-gradient text-white rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 py-8"
      >
        <div className="company flex flex-col gap-2">
          <div className="logo">
            <Image src={logo} width={31} height={38} alt="logo" />
          </div>
          <h3 className="font-bold">Follow us on twitter</h3>
          <p className="description text-[#868898] text-sm">notion.com</p>
        </div>
        <Button text={"Follow"} className={"min-w-[54px] px-[35px]"} />
      </div>
    );
}

export default Banner
