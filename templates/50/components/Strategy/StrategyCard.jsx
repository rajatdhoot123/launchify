import React from 'react'
import quote from '../../assets/images/strategy/quote.svg'
import Image from 'next/image'

const StrategyCard = ({ card }) => {
  return (
    <div
      className="md:max-w-[335px] lg:flex-1  mx-auto flex-col-center-between border border-[#DCDCDC] rounded-xl pt-10 space-y-12 bg-white"
    >
      <div className="px-5 font-semibold tracking-wide space-y-5">
        <h3 className="text-2xl md:text-3xl  ">{card.title}</h3>
        <p className="text-[#595D61]">{card.desc}</p>
      </div>
      <div
        className={`relative space-y-2 rounded-lg px-3 md:px-5 pt-12 pb-5 font-semibold ${card.bg} text-white`}
      >
        <Image
          width={22}
          height={22}
          src={quote}
          alt="quote"
          className="absolute top-5 left-5"
        />
        <p className="">{card.testimonial.message}</p>
        <div className="flex-center-between">
          {/* author name profile and role */}
          <div className="flex items-center gap-3">
            <Image
              src={card.testimonial.profile}
              width={35}
              height={35}
              alt={card.testimonial.author}
            />
            <div className="text-xs w-[60%]">
              <h4>{card.testimonial.author}</h4>
              <p className="">{card.testimonial.role}</p>
            </div>
          </div>

          {/* rating */}
          <Image
            src={card.testimonial.rating}
            width={80}
            height={15}
            alt="rating"
          />
        </div>
      </div>
    </div>
  );
};

export default StrategyCard
