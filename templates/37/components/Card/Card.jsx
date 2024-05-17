import React from 'react'
import Title, { SubTitle } from '../ui/Title/Title'
import config from '../../config';
import InternationalSection from './InternationalSection';

const Card = () => {
    return (
      <div className="space-y-[75px] w-res-90">
        <Title>
          Start using your card for <br className="max-md:hidden" />
          purchases within minutes.
        </Title>
          <div className="max-md:flex-col-center-center md:flex-center gap-12 xl:gap-[150px]">
            {config.purchases.map((item) => {
              return (
                <div key={item.id} className="flex-col-center-center gap-2">
                  <h3 className="font-bold text-2xl lg:text-4xl">
                    {item.metric}
                  </h3>
                  <div>
                    <SubTitle>{item.title[0]}</SubTitle>
                    <SubTitle>{item.title[1]}</SubTitle>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    );
}

export default Card
