import Image from "next/image";
import React from "react";
import Star from "../../assets/images/feature/star.png";
import Card1 from "../../assets/icons/feature/card1.svg";
import Card2 from "../../assets/icons/feature/card2.svg";
import Card3 from "../../assets/icons/feature/card3.svg";
import Alert1 from "../../assets/icons/feature/alert1.svg";
import Alert2 from "../../assets/icons/feature/alert2.svg";
import Alert3 from "../../assets/icons/feature/alert3.svg";

const Feature = () => {
  const features = [
    { image: Card1, text: "Preview open graph cards" },
    { image: Card2, text: "Preview open graph cards" },
    { image: Card3, text: "Preview open graph cards" },
  ];
  const features2 = [
    { image: Alert1, text: "Automatic page alerts" },
    { image: Alert2, text: "Automatic page alerts" },
    { image: Alert3, text: "Automatic page alerts" },
  ];

  return (
    <div className="container max-w-navbar mx-auto gap-12 flex flex-col justify-center items-center" id="pricing">
      <div className="flex flex-col justify-center items-center gap-4 mt-8 ">
        <Image src={Star} alt="Star" />
        <p className="font-extrabold text-4xl">Features</p>
        <p className="font-semibold text-xl text-gray-500 w-2/3 md:w-full text-center">
          The simple SEO toolkit to get indexed super fast!
        </p>
      </div>
      <div className="flex-col justify-center gap-8 lg:gap-24  grid grid-cols-1 md:grid-cols-2  items-start mb-[8rem]">
        <div className="flex flex-col gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-start items-center gap-4">
              <Image
                src={feature.image}
                alt={`Feature ${index + 1}`}
                width={30}
                height={30}
              />
              <p className="font-bold text-xl">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {features.map((feature2, index) => (
            <div key={index} className="flex justify-start items-center gap-4">
              <Image
                src={feature2.image}
                alt={`Feature ${index + 1}`}
                width={30}
                height={30}
              />
              <p className="font-bold text-xl">{feature2.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
