import React from 'react'
import Title, { SubTitle } from '../ui/Title/Title'
import CardsImage from '../../assets/images/payment/payment.png'
import Person from '../../assets/images/payment/person.svg'
import Image from 'next/image'

const EasyPayment = () => {
    return (
      <div className="w-res-90 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="space-y-5">
          <Title className="text-start ">
            Fast and easy <br className="max-md:hidden" />
            international payments.
          </Title>
          <SubTitle subTitleClass={"text-start"}>
            By utilizing receiving accounts in various currencies, you can
            receive payments in a manner that resembles a local transaction,
            making the payment process fast and hassle-free.
          </SubTitle>
          <div className="space-y-10">
            <div className="h-[1px] w-[80px] bg-[#5B5675] "></div>
            <PersonCard />
          </div>
        </div>
        <div>
          <Image
            src={CardsImage}
            width={400}
            height={400}
            alt="cards"
            className="w-full xl:scale-[1.2]"
          />
        </div>
      </div>
    );
}


const PersonCard = () => {
    return (
      <div className='space-y-5 xl:w-3/4'>
        <p className='font-bold '>
          With features like digital wallets, electronic funds transfer, and
          online bill pay, you can manage your finances with ease and
          convenience.
        </p>
        <div className="flex-center-start gap-2">
          <Image
            src={Person}
            width={50}
            height={50}
            alt="person"
            className="rounded-full"
          />
          <div className="space-y-1">
            <h4 className="font-bold">Henry nicole</h4>
            <p className="text-[#5B5675]">Director - glue</p>
          </div>
        </div>
      </div>
    );
}

export default EasyPayment
