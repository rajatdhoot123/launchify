import React from 'react'
import Title from '../Title'
import Image from 'next/image';
import growth from '../../assets/images/growth/graph.svg';
import growth1 from '../../assets/images/growth/graph-1.svg';
import person6 from "../../assets/images/growth/profile/person-6.svg";
import person3 from "../../assets/images/growth/profile/person-3.svg";
import person2 from "../../assets/images/growth/profile/person-2.svg";
import person from "../../assets/images/growth/person.svg";
import person4 from "../../assets/images/growth/profile/person-4.svg";
import person5 from "../../assets/images/growth/profile/person-5.svg";

const Growth = () => {
  const data = ["VIP Audience", "Segment posty", "Email contacts"]

  
    return (
      <div className="flex flex-col gap-10 w-[90%] mx-auto lg:w-[75%]">
        <Title title="Use Posty for direct mail" className="">
          <span className="block">and it works crazy</span>
        </Title>

        {/* div growth */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-10">
            {/*  */}
            <Image
              src={growth1}
              width={300}
              height={300}
              className="max-md:w-[350px] max-md:h-auto md:w-1/3"
              alt="growth"
            />
            <Image
              src={growth}
              width={300}
              height={300}
              className="max-md:w-[350px] md:w-2/3 md:h-auto max-md:h-auto max-w-[651px]"
              alt="growth"
            />
            {/*  */}
          </div>
          <div className="flex flex-col md:flex-row md:w-full md:justify-between items-center gap-10">
            {/* users */}
            <PeopleCard />

            {/* profiles */}
            <div className="self-start w-[360px] md:w-2/3 mx-auto rounded-xl md:max-w-[366px] bg-light-green p-5 flex flex-col gap-5">
              <h3 className="text-black/50 font-semibold text-xl">
                First Purchase
              </h3>
              <ul className="flex flex-wrap justify-between gap-8">
                {[person, person2, person3, person4, person5, person6].map(
                  (p, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center  rounded-full"
                      >
                        <Image src={p} width={60} height={60} alt="person" />
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* sorting */}
            <div className="w-[360px] md:w-1/3 rounded-xl h-full bg-green p-5 flex flex-col gap-5">
              <h3 className="text-white font-semibold text-xl">Sortings</h3>
              <div className="flex flex-col gap-5">
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex bg-[#537C71] text-white font-semibold items-center gap-2 py-4 px-5 rounded-xl"
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}



const PeopleCard = () => {
    const people = [
      {
        name: "Moana John",
        email: "moana_j@mail.com",
        profile: person,
      },
      {
        name: "Bruce win",
        email: "win_br",
        profile: person6,
      },
      {
        name: "Rousey",
        email: "rouse_y@mail.com",
        profile: person3,
      },
    ];
  
  return (
    <div className="w-[360px] md:w-1/3 bg-light-green p-5 flex flex-col gap-5 rounded-xl">
      <h3 className="text-black/50 font-semibold text-xl">First Purchase</h3>
      <ul className="flex flex-col items-start gap-5">
        {people.map((item, index) => {
          return (
            <li key={index} className="flex gap-2">
              <div className="flex items-center justify-center">
                <Image src={item.profile} width={40} height={40} alt="person" />
              </div>
              <div className="">
                <p className="text-black font-semibold text-lg">{item.name}</p>
                <p className="text-black/50">{item.email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Growth;
