import React from 'react'
import Title from '../Title'
import Image from 'next/image';
import config from '../../config/index'
import check from "../../assets/icons/pricing/check.svg";
import PricingCard from './PricingCard';
import Circle from '../Circle';



const Pricing = () => {
    return (
      <div className="w-[90%] md:w-3/4 mx-auto sapce-y-12">
        <Title
          title="Choose our best pricing"
          subTitle="Choose the package that best suit you"
        />

        <div className="flex flex-col gap-5 md:flex-row md:my-10 justify-center items-center">
          <PricingCard title={"Free"} price={0} />
          {/* card 2 Paid */}
          <PricingCard title={"Pro+"} price={32} variant={"light"} />
        </div>
      </div>
    );
}

export default Pricing
