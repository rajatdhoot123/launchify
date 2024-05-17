import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CaseStudyCard = ({ card }) => {
    return (
      <div className="max-w-[355px] rounded-xl border-[0.4px] p-2 space-y-4 border-[#D3D3D3] hover:scale-105 cursor-pointer duration-200">
        <div className="flex-center">
          <Image src={card.img} width={0} height={0} className='w-full h-auto object-cover' alt={card.title} />
        </div>
        <h4 className='text-md uppercase font-medium'>{card.title}</h4>
        <p className='text-[#595D61] font-semibold tracking-wide'>{card.desc}</p>
        <div>
          <Link href={card.link} className=" text-orange font-semibold">
            Read the case study &rarr;
          </Link>
        </div>
      </div>
    );
}

export default CaseStudyCard
