import React from 'react'
import gray from '../../assets/images/paperwork/gray-bg.svg'
import curve from '../../assets/images/paperwork/curve-line.svg'
import Image from 'next/image'
import Title, { SubTitle } from '../reusables/Title/Title';
import config from '../../config';
import Button from '../reusables/Button/Button';
import lines from '../../assets/3lines.svg'



const Paperwork = () => {
    return (
      <div className="relative py-[100px] pb-[30vh] md:pb-[20vh] lg:pb-[30vh]">
        <Image
          src={gray}
          alt="gray background"
          fill
          className="absolute -z-10 w-full h-full object-cover bg-top top-0 left-0 right-0 bottom-0 "
        />

        <div className="w-[90%] mx-auto md:w-3/4 space-y-8 md:space-y-12 xl:space-y-[75px]">
          <div className="space-y-12">
            <Title className="leading-12">
              You’re
              <span className="relative ml-2">
                30 seconds
                <Image
                  src={curve}
                  alt="curve"
                  width={279}
                  height={16}
                  className="absolute -bottom-4 -right-5"
                />
              </span>{" "}
              away from
              <br className="max-md:hidden" />
              <span className="max-md:ml-2">no paperwork and more profit</span>
            </Title>
            <SubTitle subTitleClass={"w-[90%] md:w-[60%] xl:w-[40%]"}>
              dispatch to your field staff, eliminate paperwork, receive
              information back instantly and save money on admin. Sound too good
              to be true? All of these companies are:
            </SubTitle>
          </div>
          
          
          {/* ALL COMPANIES */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <Image src={lines} width={60} height={60} alt="logo" className='absolute max-md:top-0 max-md:opacity-30 md:left-[200px] md:-translate-y-[100px] scale-150' />
            
            
            {config.paperwork.map((logo, index) => {
              return (
                <div
                  key={index}
                  className="bg-white w-[175px] h-[90px] md:w-[205px] md:h-[110px] overflow-hidden rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    width={127}
                    height={45}
                    className="max-w-[127px] max-h-[45px]"
                    alt="logo"
                  />
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            <div className="flex-center max-md:items-stretch max-md:flex-col max-md:w-1/2 mx-auto gap-5 md:gap-10">
              <Button className={"md:w-[264px] py-2 md:py-5"}>
                Start Free Trial
              </Button>
              <Button variant="white" className={"md:w-[264px] py-2 md:py-5"}>
                Schedule A Live Demo
              </Button>
            </div>
            <SubTitle subTitleClass={"text-xs md:!text-sm"}>
              No credit card required get started in seconds
            </SubTitle>
          </div>
        </div>
        <SubTitle
          subTitleClass={
            "absolute left-1/2 right-1/2 translate-x-[-50%] bottom-12 md:bottom-[10vh] !text-xs md:!text-sm mt-12 w-[90%] mx-auto md:w-3/4 lg:w-[60%]"
          }
        >
          Workever provides field service management software to businesses
          nationwide. Our software helps businesses grow by taking care of all
          back office functions like job management, dispatching, quoting and
          invoicing. Perhaps best of all, your working life just gets easier.
          Businesses using our software have reported huge gains in costs and
          time saved, both in the office anG in the field.
        </SubTitle>
      </div>
    );
}




export default Paperwork


