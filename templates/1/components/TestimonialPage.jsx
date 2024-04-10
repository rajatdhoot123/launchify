"use client";
import "../styles/index.css";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import Image from "../images/testimonial-image.svg";
import vector1 from "../images/vector-1.svg";
import vector2 from "../images/vector-2.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Jayesh Patil",
    position: "CEO, Lirante",
    review:
      "Working with our graphic designer was a game-changer for my business. Their creativity and attention to detail transformed our branding into something truly remarkable. I highly recommend their services",
    imageUrl: Image,
  },
  {
    name: "Jayesh Patil",
    position: "CTO, Lirante",
    review:
      "I cannot thank our graphic designer enough for the exceptional work they did on our logo. They took our vision and brought it to life in ways we never imagined. Their professionalism and expertise are unmatched.",
    imageUrl: Image,
  },
  {
    name: "Jayesh Patil",
    position: "CTO, Lirante",
    review:
      "Choosing our graphic designer was the best decision we made for our company's visual identity. Their designs not only elevated our brand but also resonated deeply with our target audience. We are thrilled with the results!",
    imageUrl: Image,
  },
];

const TestimonialPage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
  };

  return (
    <div className="text-white w-full page2 rounded-3xl relative overflow-hidden">
      <div className="w-full py-16 lg:px-16  px-8 backdrop-brightness-50 ">
        <div className="w-full h-full flex items-center lg:text-left text-center flex-col lg:text-5xl text-4xl">
          <p className="font-medium">Testimonial That</p>
          <p className="font-medium">
            Speak To <span className="text-orange-400">My Result</span>
          </p>
          <p className="lg:text-lg text-sm text-gray-50 text-center lg:w-1/2 w-5/6 mt-5 ">
            &quot;Discover the Impact: Hear What Our Clients Have to Say&quot; Explore
            firsthand testimonials from satisfied clients, detailing their
            experiences collaborating with us. 
            Let their stories inspire you to embark on your own journey with us.
          </p>
        </div>
        <Slider {...settings} className="mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="">
              <Testimonial
                name={testimonial.name}
                position={testimonial.position}
                review={testimonial.review}
                imageUrl={testimonial.imageUrl}
              />
            </div>
          ))}
        </Slider>
      </div>
      <img
        src={vector1.src}
        alt=""
        className="absolute top-20 right-1/3 lg:block hidden"
      />
      <img src={vector2.src} alt="" className="md:block hidden absolute top-1/2 right-1/4" />
    </div>
  );
};

export default TestimonialPage;
