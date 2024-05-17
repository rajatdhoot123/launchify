import React from 'react'
import Title from '../ui/Title/Title'
import config from '../../config';
import logo from '../../assets/images/footer/logo.svg'
import Image from 'next/image';

const Footer = () => {
    return (
      <div className="py-[100px] bg-main relative overflow-hidden">
        <Image
          src={logo}
          alt="logo"
          width={400}
          height={630}
          className="absolute top-5 right-0"
        />

        <div className="w-responsive space-y-12">
          <Title className="text-start text-white">
            Let’s join Cue for safe{` `}
            <br />& secure payments
          </Title>
          <div className="grid grid-cols-2 gap-12 gap-y-[100px] xl:flex-center-start xl:gap-[150px]">
            {config.footerLinks.map((link, index) => {
              return (
                <div key={index} className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    {/* <img src={link.logo} alt="logo" width={30} height={30} /> */}
                    <p className="font-semibold uppercase text-white">
                      {link.title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-10">
                    {link.otherLinks.map((otherLink, index) => {
                      return (
                        <div key={index} className="flex items-center gap-4">
                          {/* <img src={otherLink.logo} alt="logo" width={30} height={30} /> */}
                          <p className="font-semibold text-white opacity-60">
                            {otherLink.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className='space-y-2'>
            <div className="flex-center-start gap-2 text-white font-bold">
              <div className="w-[35px] h-[35px] text-main rounded-full flex-center bg-[#E0DAFE]">
                C
              </div>
              Cue
            </div>

            <p className="text-white/50">
              What matters is productivity with
              <br />
              fun culture
            </p>
          </div>

          <div className="lg:float-right text-white/50">
            © Copyright The Prepared Company Pty Ltd 2023
          </div>
        </div>
      </div>
    );
}

export default Footer
