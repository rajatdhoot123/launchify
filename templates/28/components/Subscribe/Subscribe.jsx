import React from 'react'
import Title, { SubTitle } from '../ui/Title'
import content from '../../config/content'
import Image from 'next/image'
import config from '../../config'


const Subscribe = () => {
    const { subscribe } = content.home;
    
    
    return (
        <div className='relative w-responsive bg-[#F7F1FF] py-12 px-5 rounded-xl space-y-5 text-center'>
            {/* ICONS */}
            <Image src={config.decorations[0]} alt="icon" width={60} height={60}  className="max-lg:hidden rounded-xl lg:left-10 absolute z-10" />
            <Image src={config.decorations[1]} alt="icon" width={60} height={60}  className="max-lg:hidden rounded-xl lg:right-10 absolute z-10" />
            <Image src={config.decorations[2]} alt="icon" width={60} height={60}  className="max-lg:hidden rounded-xl lg:bottom-10 lg:left-40 absolute z-10" />
            <Image src={config.decorations[3]} alt="icon" width={60} height={60}  className="max-lg:hidden rounded-xl lg:bottom-10 lg:right-40 absolute z-10" />


            <h3 className='text-2xl font-bold '>
                {subscribe.title[0]}
                <br className='max-md:hidden'/>
                {subscribe.title[1]}
            </h3>
            <SubTitle subTitleClass='lg:w-1/2'>
                {subscribe.subtitle}
            </SubTitle>

            {/* form */}
            <div className="form-group lg:w-1/2 mx-auto max-lg:space-y-3 lg:flex-center gap-4">
                <input type="email" placeholder="Enter your email" className="max-lg:w-3/4 max-lg:mx-auto p-3 px-5 rounded-xl lg:w-[285px] border border-[#dcdcdc]" />
                <button className="max-lg:w-3/4 max-lg:mx-auto  bg-purple text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:scale-105 duration-200">{subscribe.button}</button>
            </div>
        </div>
    )
}

export default Subscribe
