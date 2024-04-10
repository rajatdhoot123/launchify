import React from "react";
import Tag from "../Button/Tag";
import Image from "next/image";
import logo1 from "../../assets/icons/success/logo-1.svg";
import logo2 from "../../assets/icons/success/logo-2.svg";
import logo3 from "../../assets/icons/success/logo-3.svg";
import TopCard from "./TopCard";
import company1 from "../../assets/icons/companies/logo-1.svg";
import company2 from "../../assets/icons/companies/logo-2.svg";
import company3 from "../../assets/icons/companies/logo-3.svg";
import company4 from "../../assets/icons/companies/logo-4.svg";
import company5 from "../../assets/icons/companies/logo-5.svg";
import Title from "../Title";

const Success = () => {
  const successLogos = [
    {
      id: 1,
      text: "Number of questions used per survey",
      logo: logo1,
    },
    {
      id: 2,
      text: "Types of question formats used in surveys",
      logo: logo2,
    },
    {
      id: 3,
      text: "Trigger conditions used for surveys",
      logo: logo3,
    },
  ];

  return (
    <div className="text-white py-10 space-y-[75px]">
      <div className="flex flex-col gap-2">
        <Title
          title="Posty success surveys"
          subTitle="Squaree helps users to go from Zero to Hero with Pockets flow’s simple platform that helps creators like you sell their digital products online."
        />
      </div>

      {/* success logos */}
      <div className="flex flex-col gap-8 md:flex-row justify-between items-center w-3/4 mx-auto">
        {successLogos.map((logo) => {
          return <Card key={logo.id} logo={logo.logo} text={logo.text} />;
        })}
      </div>

      {/* top level integration card */}
      <div className="relative overflow-hidden bg-light-green w-[90%] md:w-[75%] mx-auto flex flex-col lg:flex-row max-lg:gap-10 items-center justify-between py-[75px] rounded-xl px-10">
        <div className="lg:w-1/2">
          <Title
            title="Top level integration"
            subTitle="BePrepared is a secure, white-labelled digital vault used to confidentially store and distribute your clients’ cryptocurrency, passwords"
            className="justify-start text-start"
            subTitleClass="w-full lg:w-full"
          >
            <span className="block">for everyone user</span>
          </Title>
        </div>
        <div className="lg:hidden grid grid-cols-3 w-full gap-5 md:grid-cols-4 md:justify-center">
          <LogoHolder></LogoHolder>
          <LogoHolder logo={company1}></LogoHolder>
          <LogoHolder logo={company2}></LogoHolder>
          <LogoHolder logo={company3}></LogoHolder>
          <LogoHolder></LogoHolder> <br className="hidden md:block" />
          <LogoHolder logo={company4}></LogoHolder>
          <LogoHolder logo={company5}></LogoHolder>
          <LogoHolder></LogoHolder>
        </div>

        <div className="max-lg:hidden absolute top-8 right-5">
          <div className="flex gap-4 -mr-5">
            <LogoHolder></LogoHolder>
            <LogoHolder logo={company1}></LogoHolder>
            <LogoHolder logo={company2}></LogoHolder>
            <LogoHolder logo={company3}></LogoHolder>
          </div>
        </div>

        <div className="max-lg:hidden absolute bottom-8 -right-12">
          <div className="flex gap-4">
            <LogoHolder></LogoHolder>
            <LogoHolder logo={company4}></LogoHolder>
            <LogoHolder logo={company5}></LogoHolder>
            <LogoHolder></LogoHolder>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ logo, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <div className="logo bg-light-green p-5 rounded-full">
        <Image
          src={logo}
          width={30}
          height={30}
          alt="logo"
          className="w-[30px] h-[30px]"
        />
      </div>
      <p className="text-center text-dark opacity-70 w-3/4">{text}</p>
    </div>
  );
};

const LogoHolder = ({ logo }) => {
  return (
    <div
      className={`${
        !logo && "max-lg:hidden bg-white/50"
      } rounded-3xl bg-white flex items-center justify-center w-[90px] h-[90px] lg:w-[111px] lg:h-[111px]`}
    >
      {logo && (
        <Image
          src={logo}
          width={50}
          height={50}
          alt="logo"
          className="w-[30px] h-[30px] md:w-[40px] lg:h-[40px]"
        />
      )}
    </div>
  );
};

export default Success;
