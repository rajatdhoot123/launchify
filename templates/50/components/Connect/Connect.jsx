import React from 'react'
import Image from 'next/image'
import rect from '../../assets/images/connect/rectangle.svg'
import Title, { SubTitle } from '../reusables/Title/Title'
import config from '../../config'
import w from '../../assets/icons/connect/w.svg'


const Connect = () => {
    return (
      <div className="relative overflow-hidden py-[150px]  space-y-12 md:space-y-[50px]">
        <Image
          src={rect}
          alt="rectangle"
          layout="fill"
          objectFit="cover"
          priority
          objectPosition="top"
          className="absolute h-full top-0 left-0 right-0 bottom-0 -z-10"
        />

        <div className="absolute max-lg:opacity-20 -top-5 left-10 space-y-12">
          {config.connect.slice(0, 4).map((item, index) => {
            return <ImageContainer key={index} image={item} index={index} />;
          })}
        </div>

        <div className="absolute max-lg:opacity-20 -top-5 right-10 space-y-12">
          {config.connect.slice(4,9).map((item, index) => {
            return <ImageContainer key={index} image={item} index={index} />;
          })}
        </div>

        {/* <div className="flex-center-center "> */}
        <div className="bg-white flex-center w-[75px] h-[75px] mx-auto rounded-full shadow-md">
          <Image src={w} width={60} height={60} alt="" />
        </div>
        {/* </div> */}
        <Title variant='xl' className="max-md:w-3/4 mx-auto">
          Connect with the
          <br className="max-md:hidden" />{""}
          tools you love
        </Title>
        <SubTitle subTitleClass={"w-3/4 md:w-1/2"}>
          Integrate Workever with leading tools to help you reduce the amount of
          time you spend doing administration and data entry. With connections
          available for accounting to sync invoice and contacts, as well as
          payment processing and SMS messaging, Workever has you covered!
        </SubTitle>
      </div>
    );
}

const ImageContainer = ({ image, index }) => {
    return (
      <div className={`shadow-xl bg-white w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex-center rounded-full overflow-hidden ${index % 2 == 0 ? "ml-10" : ""}`}>
        <Image
          src={image}
          width={60}
          height={60}
          className=""
          alt=""
        />
      </div>
    );
}

export default Connect
