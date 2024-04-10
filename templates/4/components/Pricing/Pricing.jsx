import React from 'react'

import PricingCard from './PricingCard';
import Tag from '../Button/Tag';


const Pricing = () => {
    return (
      <div className="section text-white py-10 flex flex-col gap-10">
        <div className="header-section flex flex-col gap-2">
          <Tag text={"pricing"} />
          <div className="heading flex flex-col md:flex-row justify-center items-center gap-3">
            <h2 className="text-5xl font-bold max-lg:text-center">Billed Monthly</h2>
            <div className="relative w-[80px] h-[40px] bg-[#D3E763] rounded-full overflow-hidden">
              <div className="absolute bg-black my-auto right-1 top-[1.5px] w-[35px] h-[35px] rounded-full"></div>
            </div>
            <p className=''>Billed Yearly (save 15%)</p>
          </div>
        </div>

        {/* pricing cards */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          {/* cards */}
          {/* card 1 free */}
          <PricingCard features={4} text="Try for Free" variant={"dark"} />
          {/* card 2 Paid */}
          <PricingCard />
        </div>
      </div>
    );
}

export default Pricing
