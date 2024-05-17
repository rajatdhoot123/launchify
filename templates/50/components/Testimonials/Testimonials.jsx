"use client"


import React from 'react'
import Title, { SubTitle } from '../reusables/Title/Title';
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';
import element from '../../assets/images/testimonials/element.svg'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
    nextArrow: <NextArrow to="next" />,
    prevArrow: <PrevArrow to="prev" />,
    customPaging: function(slider, i) {
      return (
        <div className='page w-[30px] h-[4px] bg-[#dcdcdc] rounded-full'></div>
      );
    },
  };
    
  const testimonials =[
    0, 1, 2
  ]
    
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto md:w-3/4 gap-8 space-y-10">
        {/* desctiption */}
        <div className="space-y-5 relative">
          <p className="uppercase max-md:text-center text-[#7B8085]">Workever services</p>
          <Title className="md:text-start">Trusted nationwide</Title>
          <SubTitle subTitleClass={"md:text-start"}>
            Teams of every size, shape and kind have made Workforce their
            software of choice. Find out why:
          </SubTitle>
          <Image
            src={element}
            width={100}
            height={100}
            alt="element"
            className="max-md:opacity-10 absolute -top-10 max-md:bottom-0 md:-right-12 z-10 scale-150"
          />
        </div>

        {/* testimonials */}
        <Slider {...settings} className="relative">
          {testimonials.map((testimonial, index) => {
            return <TestimonialCard testimonial={testimonial} key={index} />;
          })}
        </Slider>
      </div>
    );
}



const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute absolute-v-center bg-white z-20 left-0 md:-left-5 w-[35px] h-[35px] text-white shadow-xl rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.53671 2.7297C6.93228 4.33413 5.3226 5.93856 3.71817 7.54823C5.32784 9.15791 6.93752 10.7676 8.5472 12.3773C9.95238 13.7824 7.76595 15.9531 6.35552 14.5427C4.38406 12.5713 2.4126 10.5998 0.441142 8.62834C-0.156588 8.03061 -0.140858 7.03964 0.451629 6.4524C2.42309 4.48094 4.39455 2.50948 6.36601 0.538024C7.77644 -0.861921 9.94714 1.32451 8.53671 2.7297Z"
          fill="#F46F22"
        />
      </svg>
    </div>
  );
}
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute absolute-v-center bg-white right-0 md:-right-5 w-[35px] h-[35px] text-whiteshadow-xl rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.463291 2.7297C2.06772 4.33413 3.6774 5.93856 5.28183 7.54823C3.67216 9.15791 2.06248 10.7676 0.452804 12.3773C-0.952385 13.7824 1.23405 15.9531 2.64448 14.5427C4.61594 12.5713 6.5874 10.5998 8.55886 8.62834C9.15659 8.03061 9.14086 7.03964 8.54837 6.4524C6.57691 4.48094 4.60545 2.50948 2.63399 0.538024C1.22356 -0.861921 -0.947142 1.32451 0.463291 2.7297Z"
          fill="#F46F22"
        />
      </svg>
    </div>
  );
}


export default Testimonials
