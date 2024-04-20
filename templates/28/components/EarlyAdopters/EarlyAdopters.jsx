import React from 'react'
import Title, { SubTitle } from '../ui/Title'
import content from '../../config/content';
import Image from 'next/image';
import EarlyAdopterCard from './EarlyAdopterCard';
import config from '../../config';

const EarlyAdopters = () => {
    const { testimonials } = content.home;
    
    
    return (
        <div className='space-y-24'>
            <div className='space-y-8'>
                <Title>
                    {testimonials.title[0]}{" "}
                    <span className='text-purple'>
                        {testimonials.title[1]}
                    </span>
                    <br/>
                    <span className='flex-center gap-2'>
                        {testimonials.title[2]}
                        <Image
                        src={config.hero.users}
                        alt="users"
                        width={190}
                        height={20}
                        className=''
                    />
                    </span>
                </Title>
                <SubTitle subTitleClass='lg:w-1/2'>
                    {testimonials.subtitle}
                </SubTitle>
            </div>
            <div className='xl:w-[60%] rounded-xl mx-auto bg-[#e6bf9f12] p-3 grid lg:grid-cols-2 gap-4'>
                {testimonials.testimonials.map((testimonial, index) => (
                    <EarlyAdopterCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
    )
}




export default EarlyAdopters
