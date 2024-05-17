import React from 'react'
import Title from '../reusables/Title/Title'
import config from '../../config'
import Link from 'next/link'
import Image from 'next/image'
import google from '../../assets/images/footer/google.svg'
import apple from '../../assets/images/footer/apple.svg'
import fb from '../../assets/icons/footer/facebook.svg'
import tw from '../../assets/icons/footer/twitter.svg'
import ln from '../../assets/icons/footer/linkedin.svg'



const Footer = () => {
    return (
      <div className="text-black w-[90%] mx-auto lg:w-3/4 divide-y-2 space-y-8">
        <div className="rows-span-1 grid grid-cols-2 max-lg:gap-10 lg:grid-cols-6 w-full">
          {/* <div className=""> */}
          <Title className="text-start col-span-2">Workever.</Title>
          {/* </div> */}
          {config.footerLinks.map((aLLlinks, index) => {
            return (
              <ul
                key={index}
                className="font-semibold cols-span-1 text-md text-black"
              >
                <h3 className="text-black/60 ">{aLLlinks.title}</h3>
                <ul className="text-black grid grid-flow-row gap-y-5">
                  {aLLlinks.links.map((link, index) => {
                    return (
                      <li key={index} className="">
                        {link.title.map((title, i) => {
                          return (
                            <Link
                              key={i}
                              href={link.link}
                              className={`flex items-center gap-2 ${link.color ? link.color : "text-black"}`}
                            >
                              {
                                link.icon && <Image src={link.icon} width={20} height={20} alt={title} />
                              }
                                {title}
                              <br />
                            </Link>
                          );
                        })}
                      </li>
                    );
                  })}
                </ul>
              </ul>
            );
          })}
        </div>

        <div className="space-y-3 py-5">
          <p className="font-semibold">Field worker apps download</p>
          <div className="flex-col-center space-y-5 lg:flex-center-between ">

            {/* applinks */}
            <div className="flex-center-start gap-4">
              <Image src={apple} width={150} height={50} alt="apple" />
              <Image src={google} width={150} height={50} alt="google" />
            </div>

            {/* copyright & socials */}
            <div className="flex-center-between md:flex-center-start gap-4">
              <p className="text-[#929EAA]">
                © 2023 Workforce. All rights reserved.
              </p>
              <Image 
                src={fb}
                width={25}
                height={25}
                alt="facebook"
                className="cursor-pointer"
                />
                <Image
                    src={tw}
                    width={25}
                    height={25}
                    alt="twitter"
                    className="cursor-pointer"
                />
                <Image
                    src={ln}
                    width={25}
                    height={25}
                    alt="linkedin"
                    className="cursor-pointer"
                />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
