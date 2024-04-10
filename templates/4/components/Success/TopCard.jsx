import React from 'react'
import Tag from '../Button/Tag';
import graph from '../../assets/images/success/graph.svg'
import Image from 'next/image';


const TopCard = () => {
    return (
      <div className="relative my-10 w-[90%] lg:w-3/4 mx-auto gray-gradient py-4 lg:py-10 px-8 lg:px-12 flex flex-col items-center lg:items-start justify-center rounded-xl lg:gap-5 gap-10">
        <Tag text={"information"} />
        <h2 className="text-3xl text-wrap sm:text-4xl md:w-3/4 lg:text-6xl font-bold w-full lg:w-1/2">
          Top level visual information
        </h2>
        <p className="text-white/60 w-full md:w-3/4 lg:w-1/2">
          BePrepared is a secure, white-labelled digital vault used to
          confidentially store and distribute your clients’ cryptocurrency,
          passwords
        </p>

        <Image
          className="lg:absolute -bottom-10 right-10"
          src={graph}
          width={407}
          height={434}
          alt="graph"
        />
      </div>
    );
}

export default TopCard
