import React from 'react'
import Title from '../Title'
import Circle from '../Circle'
import hands from '../../assets/images/hero/hero-1.svg'
import person from '../../assets/images/hero/hero-2.svg'
import Image from 'next/image'
import Button from '../Button/Button'
import Tag from '../Button/Tag'
import config from '../../config'
import bigcircle from '../../assets/images/hero/circle.svg'


const Hero = () => {
    return (
    <div className="md:max-w-3/4 mx-auto w-full">
        <Circle
          width={340}
          height={340}
          priority
          className="absolute top-[10vh] max-md:opacity-30 md:top-[40vh] -left-[150px]"
        />

        <Image
          src={bigcircle}
          width={300}
          height={200}
          priority
          alt="circle"
          className="absolute top-[50vh] lg:top-[30vh] right-0 w-[100px] sm:w-[150px] lg:w-[300px]"
        />

        <Title
          variant="xl"
          title="Change your old"
          subTitle="Squaree helps users to go from Zero to Hero with Pockets flow’s simple platform that helps creators like you sell their digital products online."
          className=""
        >
          <span className="block">marketing channel</span>
        </Title>

        <Button
          text="Try it for free"
          className="inline mx-auto px-5 rounded-md font-semibold"
        />

        <div className="flex flex-col items-center w-full md:flex-row md:justify-evenly md:items-start gap-10 px-5  mx-auto">
          <div className="z-10">
            <Image
              width={350}
              height={250}
              src={hands}
              alt="Hero Image"
              className="w-[350px] h-[250px]"
              priority
            />
          </div>

          <Card />

          <div className="rounded-xl  z-10">
            <Image
              width={350}
              height={378}
              src={person}
              className="rounded-xl w-[350px] h-auto"
              alt="Happy Person Image"
            />
          </div>
        </div>
      </div>
    );
}


const Card = () => {
    return (
      <div className="w-full md:flex-grow md:mt-12 max-w-[360px] rounded-xl bg-light-green p-5 flex flex-col justify-center ">
        <div className="flex items-center justify-between">
          <Tag text="New" />
          <Tag
            text="Daily Visits"
            showDropdown={true}
            className="bg-black text-white"
          />
        </div>
        <ul className="flex flex-col gap-5">
          {config.heroCardItems.map((item, index) => (
            <CardItem
              key={index}
              amt={item.amt}
              text={item.title}
              variant={item.variant}
            />
          ))}
        </ul>
      </div>
    );
}



const CardItem = ({ amt, text, variant="light" }) => {
    return (
        <div className={`w-full text-white px-5 py-4 flex items-center gap-5 rounded-xl ${variant=="light" ? "bg-white text-dark" : "bg-green text-white"}`}>
            <p className='money font-extrabold '>
                ${amt}
            </p>
            <h3 className='font-semibold'>
                Monthly <br/> Investment
            </h3>
        </div>
    )
}
export default Hero
