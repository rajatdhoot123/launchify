import React from 'react'
import Title from '../ui/Title/Title'
import config from '../../config';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
      <div className="space-y-[60px]">
        <Title>Pick the pricing that fits for you</Title>
        <div className="flex-center gap-4">
          <p className='font-bold'>Monthly</p>
          {/* toggle switch */}
          <div className="w-[53px] cursor-pointer p-[0.5px] h-[28px] bg-black/10 shadow-xl rounded-full relative">
            <div className='absolute top-1/2 bottom-1/2 -translate-y-1/2 left-1 bg-white rounded-full w-[24px] h-[24px] shadow-xl'></div>
          </div>
          <p className='font-bold text-gray-400'>Yearly</p>
        </div>
        <div className='w-responsive max-lg:flex-col-center-center lg:flex gap-12'>
            {
                config.pricing.map((pricing, index) => {
                    return (
                        <PricingCard
                            key={index}
                           {...pricing}
                        />
                    )
                })
            }
        </div>
      </div>
    );
}

export default Pricing
