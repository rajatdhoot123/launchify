import React from 'react'
import Tag from '../Button/Tag';
import Image from 'next/image';
// import img1 from '../../assets/images/productivity/card1-1.svg'
// import img2 from '../../assets/images/productivity/card1-2.png'
// import img3 from '../../assets/images/productivity/card1-3.svg'
import card1 from '../../assets/images/productivity/main/card1.svg'
import card2 from '../../assets/images/productivity/main/card2.svg'
import card3 from '../../assets/images/productivity/main/card3.svg'
import card4 from '../../assets/images/productivity/main/card4.svg'
import card5 from '../../assets/images/productivity/main/card5.svg'
import card6 from '../../assets/images/productivity/main/card6.svg'

const Productivity = () => {
  
    return (
      <div className="section text-white py-10 flex flex-col gap-10">
        <div className="header-section flex flex-col gap-2">
          <Tag text={"new ways"} />
          <div className="heading flex justify-center items-center gap-3">
            <h2 className="text-5xl text-center font-bold">
              Ways of productivity
            </h2>
          </div>

          <div className="lg:my-[60px] cards max-lg:flex-col max-lg:items-center flex overflow-x-hidden gap-12 px-5 lg:pl-5 mx-auto">
            <Image
              src={card1}
              width={366}
              height={406}
              alt="card1"
              className="mt-[50px] lg:mt-[125px] h-auto w-[366px] lg:h-[406px]"
            />

            <div className="flex flex-col items-stretch gap-[60px] justify-start">
              <Image
                src={card2}
                width={290}
                height={289}
                alt="card1"
                className="w-[366px] h-auto lg:w-[290px] lg:h-[289px]"
              />
              <Image
                src={card3}
                width={306}
                height={371}
                alt="card1"
                className="w-[366px] h-auto lg:w-[306px] lg:h-[371px]"
              />
            </div>

            <div className="flex flex-col items-stretch gap-[60px] justify-center">
              <Image
                src={card4}
                width={366}
                height={252}
                alt="card1"
                className="h-auto w-[366px] lg:h-[252px]"
              />
              <Image
                src={card5}
                width={366}
                height={145}
                alt="card1"
                className="w-[366px] h-auto lg:h-[145px]"
              />
            </div>

            <Image
              src={card6}
              width={366}
              height={406}
              alt="card1"
              className="self-start mt-10 -ml-[75px] w-[366px] h-auto lg:h-[406px] max-lg:hidden"
            />
          </div>
        </div>
      </div>
    );
}


const Card = ({ children }) => {
    return (
        <div className='rounded-2xl border border-white/50 gray-gradient'>
            { children }
        </div>
    )
}

export default Productivity
