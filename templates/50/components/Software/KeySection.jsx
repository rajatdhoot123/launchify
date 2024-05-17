import React from 'react'
import Image from 'next/image'
import gold from '../../assets/images/software/gold.svg'
import Button from '../reusables/Button/Button';
import Title, { SubTitle } from '../reusables/Title/Title';
import config from '../../config';

const KeySection = () => {
    return (
      <section className="w-[90%] mx-auto md:w-3/4 grid grid-cols-1 gap-10 lg:grid-cols-2 justify-between">

        {/* more key points */}
        <div className='space-y-10'>
           <Title className='md:text-start lg:w-1/2'>
            More Key Points<br className='max-md:hidden'/>{" "}Current
          </Title> 
          <div className='space-y-8 md:space-y-12'>
            {
              config.keyPoints.map((item, index) => {
                return (
                  <div key={index} className={`${index == 0 ? "" : "" }flex gap-4`}> 
                    <Image 
                      src={item.icon}
                      alt="keypoint"
                      width={50}
                      height={50}
                      className='w-[50px] h-[50px] rounded-lg shadow-lg'
                    />
                    <div className='space-y-2 font-semibold'>
                      <h4 className='text-xl'>{item.title}</h4>
                      <p className='text-gray-500'>{item.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


        {/* card & button */}
        <div className="flex flex-col items-end space-y-10 md:space-y-[75px]">
          {/* img and circle wala div */}
          <div className="relative bg-[#F2F2F2] rounded-xl w-full  md:w-[450px] h-[65vh]">
            <div className="absolute bottom-10 -left-3 w-[175px] h-[175px] rounded-full bg-[#e0e0e0]"></div>
            <Image
              src={gold}
              alt="gold"
              width={270}
              height={500}
              // objectPosition="center"
              className="absolute bottom-[-150px]"
            />
          </div>

          {/* button */}
          <div className="w-1/2 space-y-5">
            <Button className={"w-full"}>Start Free Trial</Button>
            <SubTitle subTitleClass={"text-start"}>No credit card required get started in seconds</SubTitle>
          </div>
        </div>
      </section>
    );
}

export default KeySection
