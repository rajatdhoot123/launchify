"use client";
import React, { useRef, useEffect } from "react";
import Title from "../ui/Title/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import config from "../../config";

const Testimonials = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
    // nextArrow: <NextArrow ref={refNext} to="next" />,
    // prevArrow: <PrevArrow ref={refPrev} to="prev" />,
    customPaging: function (slider, i) {
      return (
        <div className="page w-[30px] h-[4px] bg-[#dcdcdc] rounded-full"></div>
      );
    },
  };


  return (
    <div className="space-y-12 relative">
      <Title>
        What user speak
        <br />
        about us
      </Title>

      {/* testimonials */}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="relative "
      >
        {config.testimonials.map((testimonial, index) => {
          return <TestimonialCard {...testimonial} key={index} />;
        })}
      </Slider>

      <div className="absolute  -bottom-20 absolute-h-center w-full flex-center gap-5 z-10">
        <div className="w-[50px] h-[50px] bg-black rounded-full flex-center cursor-pointer prev" onClick={previous}>
          <svg
            width="26"
            height="29"
            viewBox="0 0 26 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.582 13.2784L5.41536 13.2784"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 20.8605L5.41667 13.2771L13 5.69381"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="next w-[50px] h-[50px] bg-[#F3F3F3] rounded-full flex-center cursor-pointer" onClick={next}>
          <svg
            width="26"
            height="29"
            viewBox="0 0 26 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.41406 15.7216H20.5807"
              stroke="#0A2640"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 8.13953L20.5833 15.7229L13 23.3062"
              stroke="#0A2640"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};


export default Testimonials;
