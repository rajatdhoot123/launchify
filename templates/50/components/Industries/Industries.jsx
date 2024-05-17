import React from 'react'
import Title, { SubTitle } from '../reusables/Title/Title';
import config from '../../config';
import Image from 'next/image'
import goldenbg from '../../assets/images/industry/gold-bg.svg'
import gold from "../../assets/images/industry/gold.svg";
import lines from '../../assets/images/industry/3lines.svg'



const Industries = () => {
    return (
      <div className="max-md:w-[90%] max-lg:flex-col-center-center gap-10 lg:w-3/4 mx-auto lg:flex-center-between">
        <div className="md:w-3/4 mx-auto space-y-5">
          <p className="uppercase text-[#7B8085] max-md:text-center">Workever services</p>
          <Title className="md:text-start">Top Industries</Title>
          <SubTitle subTitleClass={"md:text-start md:w-3/4 md:mx-0"}>
            Workforce helps all Mobile service businesses get organised and
            manage their work. Below are some of our most popular industries
          </SubTitle>
        </div>
        <div className="relative mx-auto grid grid-cols-2 items-center lg:grid-cols-3 gap-5 ">
          <Image
            src={lines}
            width={60}
            height={60}
            alt="golden bg"
            className="max-md:hidden -z-10 absolute -top-[5rem] -left-12 scale-110"
          />
          <Image
            src={gold}
            width={401}
            height={335}
            alt="golden bg"
            className="max-md:hidden -z-10 absolute -top-10 -left-10 scale-110"
          />
          <Image
            src={goldenbg}
            width={359}
            height={471}
            alt="golden bg"
            className="max-md:hidden absolute -z-10 -top-[100px] scale-150 -left-[100px]"
          />
          {config.industries.map((industry, index) => {
            return <IndustryCard card={industry} key={index} />;
          })}
        </div>
      </div>
    );
}

const IndustryCard = ({card}) => {
    return (
      <div className="rounded-xl shadow-xl flex items-center justify-stretch gap-5 bg-white border-[0.4px] border-[#D3D3D3]">
        {/* <div clas> */}
          <Image src={card.img} width={75} height={75} alt={card.title} className='w-1/3 h-[100px] rounded-l-xl object-cover bg-cover' />
        
          <p className='md:text-center text-gray-500 font-semibold text-sm md:text-md '>
            {card.title}
          </p>
      </div>
    );
}

export default Industries
