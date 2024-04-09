import React from 'react'
import Accordion from './Accordion';
import config from '../../config/index';
import Title from '../Title';


const FAQs = () => {
  return (
    <section className="space-y-10">
      <div className="content-mobileHome md:content-bgDesktop relative w-full"></div>
      {/* <div className="drop-shadow-xl rounded-2xl bg-white w-full min-h-[40vh] md:w-[601px] md:min-h-[365px]  py-10"> */}
      {/* <div className="text-pink-300 font-WorkSansBold text-5xl flex items-center py-1 pb-5 px-2"> */}
      {/* <span className="content-iconStar px-6"></span> */}
      <Title
        title="We have every answer for you"
        subTitle="Questions related to homely "
      />
      {/* </div> */}
      <ul role='list' className="bg-white rounded-xl w-[90%] mx-auto md:w-3/4 divide-y-2 divide-slate-200">
        {config.faqs.map((accordion, index) => {
          const { titles, details } = accordion;
          return <Accordion key={index} titles={titles} details={details} />;
        })}
      </ul>
      {/* </div> */}
    </section>
  );
};

export default FAQs
