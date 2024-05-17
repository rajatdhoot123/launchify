import React from 'react'
import Image from "next/image"
import logo from '../../assets/logo.svg'
import Link from 'next/link'
import Button from '../reusables/Button/Button'
import config from '../../config/index'

const Header = () => {
    return (
      <nav className="flex-center-between w-[90%] mx-auto lg:w-3/4 min-h-[10vh]">
        <div className="logo flex-center font-bold tracking-wide text-lg gap-4">
          <Image src={logo} width={40} height={40} alt="logo" className="" />
         Sunset 
        </div>
        <div className="flex-center-between space-x-8">
          <ul className="max-lg:hidden flex-center-between  space-x-8">
            {config.navLinks.map((link, index) => {
              return (
                <Link href={link.link} key={link.id} className="group font-semibold">
                  {link.title}
                  <div className="bg-orange h-[2px] w-0 group-hover:w-full ease-in-out duration-300 "></div>
                </Link>
              );
            })}
          </ul>
         <Button >
          Free Trial
         </Button>
        </div>
      </nav>
    );
}

export default Header
