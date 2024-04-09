import React from 'react'
import Tag from '../Button/Tag'
import Image from 'next/image'
import logo1 from '../../assets/icons/success/logo-1.svg'
import logo2 from '../../assets/icons/success/logo-2.svg'
import logo3 from '../../assets/icons/success/logo-3.svg'
import TopCard from './TopCard'
import graph from '../../assets/images/success/graph2.svg'
import company1 from '../../assets/icons/companies/logo-1.svg'
import company2 from '../../assets/icons/companies/logo-2.svg'
import company3 from '../../assets/icons/companies/logo-3.svg'
import company4 from '../../assets/icons/companies/logo-4.svg'
import company5 from '../../assets/icons/companies/logo-5.svg'



const Success = () => {
    const successLogos = [
      {
        id: 1,
        text: "Number of questions used per survey",
        logo: logo1,
      },
      {
        id: 2,
        text: "Types of question formats used in surveys",
        logo: logo2,
      },
      {
        id: 3,
        text: "Trigger conditions used for surveys",
        logo: logo3,
      },
    ];

    
    
    return (
      <div className="section text-white py-10 flex flex-col gap-12">
        <div className="header-section flex flex-col gap-2">
          <Tag text={"strategy"} />
          <div className="heading flex justify-center items-center gap-3">
            <h2 className="text-5xl text-center font-bold">Strategy for success</h2>
          </div>
        </div>


        <div className="success-logos flex flex-col gap-8 md:flex-row justify-between items-center w-3/4 mx-auto">
          {successLogos.map((logo) => {
            return <Card key={logo.id} logo={logo.logo} text={logo.text} />;
          })}
        </div>

        {/* top card */}
        <TopCard />
        {/* graphs & logos */}
        <div className="flex flex-col max-lg:items-center lg:flex-row w-[90%] lg:w-3/4 mx-auto gap-[75px] justify-between my-10">
          <Image
            src={graph}
            width={407}
            height={445}
            alt="graphical analytics"
            className='-mt-10'
          />
          <div className="relative w-full md:w-3/4 mx-auto gray-gradient py-[25px] sm:py-10 lg:py-[75px] px-6 lg:px-12 flex flex-col items-center justify-center rounded-xl gap-10 mt-5 lg:mt-10">
            <h2 className="text-center text-4xl font-bold">We integrate what you love</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <LogoHolder></LogoHolder>
              <LogoHolder logo={company1}></LogoHolder>
              <LogoHolder logo={company2}></LogoHolder>
              <LogoHolder logo={company3}></LogoHolder>
              <LogoHolder></LogoHolder> <br className='hidden md:block'/>
              <LogoHolder></LogoHolder>
              <LogoHolder logo={company4}></LogoHolder>
              <LogoHolder logo={company5}></LogoHolder>
              <LogoHolder></LogoHolder>
            </div>
          </div>
        </div>
      </div>
    );
}


const Card = ({
    logo, 
    text
}) => {
    return (
        <div className='flex flex-col items-center gap-2 '>
            <div className='logo gray-gradient p-5 rounded-full'>
                <Image src={logo} width={30} height={30} alt="logo" className='w-[30px] h-[30px]' />
            </div>
            <p className='text-center w-3/4'>
                {text}
            </p>
        </div>
    )
}



const LogoHolder = ({
    logo
}) => {
    return (
      <div className={`${!logo && "max-lg:hidden"} rounded-xl gray-gradient flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px]`}>
        {logo && (
          <Image
            src={logo}
            width={60}
            height={60}
            alt="logo"
            className="w-[50px] h-[50px] md:w-[90px] lg:h-[90px]"
          />
        )}
      </div>
    );
}

export default Success
