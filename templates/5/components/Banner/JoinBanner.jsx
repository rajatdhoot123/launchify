import React from 'react'
import thunder from '../../assets/images/join/thunder.svg'
import Image from 'next/image';
import Button from '../Button/Button';
import Circle from '../Circle';


const JoinBanner = () => {
    return (
      <div className="relative w-[90%] md:w-[75%] flex-col-center mx-auto bg-green text-white rounded-xl space-y-5 py-8">
        <Image
          src={thunder}
          alt="Thunder"
          width={200}
          height={200}
          className="absolute right-0 max-md:hidden"
        />

        <h2 className="text-center text-xl md:text-3xl font-medium mt-12">
          Join our beta program for more features
        </h2>

        <div className="flex flex-col max-md:w-full max-md:items-center gap-2 md:flex-row items-center justify-center mb-12">
          <div className="form-group w-[90%] flex justify-center items-center">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your best email address"
              className="w-[90%] mx-auto md:w-[400px] bg-white/10 placeholder:text-white placeholder:font-light py-3 px-5 rounded-lg"
            />
          </div>
          <Button
            text={"3-day free trail"}
            variant="white"
            className={"px-5 py-2"}
          />
        </div>
      </div>
    );
}

export default JoinBanner
