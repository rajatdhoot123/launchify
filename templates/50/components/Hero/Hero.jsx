import React from 'react'
import Title, { SubTitle } from '../reusables/Title/Title'
import Button from '../reusables/Button/Button';

const Hero = () => {
    return (
      <section className="space-y-3 md:space-y-8 text-center">
        <Title variant="xl" className={"font-extrabold "}>
          Connect everyone
          <br />
          together with <span className="text-orange">Sunset</span>
        </Title>
        <SubTitle subTitleClass={"text-[#595D61]"}>
          Win back time, remove paperwork, share real-time <br className='max-md:hidden'/>
          data and grow your field service business
        </SubTitle>
        <div className='space-y-5'>
          <div className="flex-center max-md:items-stretch max-md:flex-col max-md:w-1/2 mx-auto gap-5 md:gap-10">
            <Button className={"md:w-[264px] py-2 md:py-5"}>
              Start Free Trial
            </Button>
            <Button variant="dark" className={"md:w-[264px] py-2 md:py-5"}>
              Schedule A Live Demo
            </Button>
          </div>
          <p className="text-md text-[#929EAA] font-medium tracking-wide mt-0 pt-0">
            No credit card required get started in seconds
          </p>
        </div>
        <div className="w-[90%] h-[50vh] lg:max-w-[900px] mx-auto rounded-xl bg-[#F2F2F2]"></div>
      </section>
    );
}

export default Hero
