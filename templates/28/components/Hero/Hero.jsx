import React from 'react'
import Image from 'next/image';

import Title, { SubTitle } from '../ui/Title'
import content from '../../config/content'
import Button from '../ui/Button';
import config from '../../config/index'
import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
    const { hero } = content.home;
    
    return (
      <section className="relative min-h-screen pt-40 text-white space-y-5">
        <Image
          src={config.hero.bg}
          alt="hero"
          fill
          className="absolute top-0 left-0 w-full h-full -z-10"
        />

        {/* ICONS */}
        <Image
          src={config.decorations[0]}
          alt="icon"
          width={60}
          height={60}
          className="max-lg:hidden rounded-xl lg:left-24 absolute z-10"
        />
        <Image
          src={config.decorations[1]}
          alt="icon"
          width={60}
          height={60}
          className="max-lg:hidden rounded-xl lg:right-24 absolute z-10"
        />
        <Image
          src={config.decorations[2]}
          alt="icon"
          width={60}
          height={60}
          className="max-lg:hidden rounded-xl lg:top-80 lg:left-80 absolute z-10"
        />
        <Image
          src={config.decorations[3]}
          alt="icon"
          width={60}
          height={60}
          className="max-lg:hidden rounded-xl lg:top-80 lg:right-80 absolute z-10"
        />

        <Title variant="xl" className="">
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </Title>

        <SubTitle subTitleClass="xl:w-1/3 xl:mx-auto">{hero.subtitle}</SubTitle>

        <div className="space-y-8">
          <Button variant="dark" className="flex-center gap-2 mx-auto rounded-xl py-4 px-5">
            {hero.button}
            <TiArrowRight className='text-2xl' />
          </Button>

          <div className="space-y-20">
            <div className="grid place-content-center ">
              <div className="relative flex-col-center-center gap-4">
                <Image
                  src={config.hero.arrow}
                  alt="arrow"
                  width={24}
                  height={30}
                  className="absolute max-lg:hidden top-0 left-2"
                />
                <Image
                  src={config.hero.users}
                  alt="users"
                  width={190}
                  height={20}
                  className=""
                />
                <p>{hero.more}</p>
              </div>
            </div>
            <div className="w-responsive shadow-gray bg-white min-h-[50vh] rounded-xl shadow-t-xl">
              {" "}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero
