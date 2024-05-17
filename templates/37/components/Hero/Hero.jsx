import React from 'react'
import { SubTitle } from '../ui/Title/Title';
import Image from 'next/image';
import heroMain from '../../assets/images/hero/main.png'
import CardImg from '../../assets/images/hero/card.svg'
import Button from '../ui/Button/Button';
import config from '../../config';
import Grid from '../../assets/icons/hero/grid.svg'
import Arrow from '../../assets/icons/hero/arrow.svg'

const Hero = () => {
    return (
      <section
        className="grid grid-cols-1 md:grid-cols-2 space-y-8"
        style={{
          marginTop: "0px !important",
        }}
      >
        {/* Hero content */}
        <div className="pl-2 relative md:space-y-10 space-y-4 mx-auto max-lg:w-[90%] lg:self-center">
          <Image
            src={Arrow}
            alt="arrow"
            width={85}
            height={85}
            className="absolute max-lg:hidden absolute-v-center -right-12 mt-[115px] scale-150"
          />
          <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-snug">
            This streamlined <br className="max-lg:hidden" />
            payment process <br className="max-lg:hidden" />
            saves time & effort
          </h1>
          <SubTitle subTitleClass={"text-start"}>
            With all-in-one payment solutions available online, you no longer{" "}
            <br className="max-md:hidden" />
            have to leave the comfort of your home to conduct transactions.
          </SubTitle>
          <div className="flex-center-start gap-5">
            <Button variant="dark">Try it Free</Button>
            <Button variant="light">Request Demo</Button>
          </div>
        </div>

        {/* IMage */}
        <div className="relative mx-auto self-center ">
          <Image
            src={heroMain}
            alt="hero"
            width={550}
            height={550}
            className="rounded-lg z-10 max-lg:px-5"
            // objectFit="cover"
          />
          <Image
            src={CardImg}
            alt="card"
            width={200}
            height={200}
            className="absolute top-5 lg:left-[-50px] px-2 py-3 max-lg:w-[150px] bg-white lg:py-4 rounded lg:px-5 lg:scale-110 shadow-md"
          />
          <Image
            src={Grid}
            alt="grid"
            width={200}
            height={200}
            className="absolute max-lg:hidden left-[-100px] -z-10 bottom-1"
          />
        </div>

        {/* Companies */}
        <div className="md:col-span-2 bg-main w-full py-10 text-white">
          <div className="w-responsive flex flex-col items-center justify-center lg:flex-row flex-wrap max-lg:space-y-12 lg:gap-10 xl:gap-12">
            <div className="text-lg font-semibold xl:border-r-2 border-white/20 px-6">
              <p className="font-bold text-4xl">10,000+</p>
              <p>Trusted companies</p>
            </div>
            {config.heroCompanies.map((logo, index) => {
              return (
                <div key={index} className="flex items-center justify-center">
                  <Image src={logo} alt="logo" width={150} height={100} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}

export default Hero
