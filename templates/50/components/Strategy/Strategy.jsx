import React from 'react'
import config from '../../config'
import StrategyCard from './StrategyCard'
import Image from 'next/image'
import line from '../../assets/images/strategy/curl.svg'
import logo1 from '../../assets/images/strategy/logo-1.svg'
import logo2 from '../../assets/images/strategy/logo-2.svg'
import logo3 from '../../assets/images/strategy/logo-3.svg'
import logo4 from '../../assets/images/strategy/logo-4.svg'
import logo5 from '../../assets/images/strategy/logo-5.svg'



const Strategy = () => {

    return (
      <div
        className="relative w-full min-h-[60vh] flex-center bg-[#FFFCF4] -pt-12"
      >

      {/* logos */}
      <ImageContainer image={logo1} className={"-top-5 left-12"} />
      <ImageContainer className={"top-[20vh] -left-5"} />
      <ImageContainer image={logo2} className={"bottom-10 left-[50px]"}  />
      <ImageContainer image={logo5} className={"-right-5"}  />
      <ImageContainer image={logo4} className={"-top-5 right-12"}  />
      <ImageContainer image={logo3} className={"-bottom-5 "} /> 

        <ul className="relative space-y-10 max-lg:py-12 grid grid-cols-1 sm:grid-cols-2 place-content-center lg:absolute lg:-top-[100px] w-[90%]  lg:flex-stretch-center lg:w-3/4 mx-auto gap-8  min-h-[30vh]">
           <Image 
           className='absolute -top-[50px] -mr-[250px]'
           width={95}
           height={110}
           src={line}
           alt="line"
           /> 

          <ImageContainer className={"-bottom-5 -right-5 shadow-xl"} />
          {config.strategy.map((card) => {
            return <StrategyCard card={card} key={card.id} />;
          })}
        </ul>
      </div>
    );
}


const ImageContainer = ({ image, className }) => {
    return (
      <div
        className={`max-lg:hidden absolute max-md:opacity-20 shadow-xl bg-white w-[90px] h-[90px] flex-center rounded-full overflow-hidden ${className}`}
      >
        {image && (
          <Image src={image} width={50} height={50} className="" alt="" />
        )}
      </div>
    );
}

export default Strategy
