import React from 'react'
import Title, { SubTitle } from '../reusables/Title/Title';
import config from '../../config';
import CaseStudyCard from './CaseStudyCard';
import LineTri from '../reusables/Decoration/LineTri';

const CaseStudies = () => {
    return (
      <div className="space-y-5">
        <Title>Case Studies</Title>
        <SubTitle subTitleClass={"max-lg:w-3/4 mx-auto"}>
          Teams of every size, shape and kind have made Workforce their software
          of choice. Find out why:
        </SubTitle>

        <ul className="relative w-[90%] max-lg:flex-col-center-center  lg:flex lg:items-center lg:justify-center md:w-3/4 mx-auto gap-8 ">
          <LineTri className={"max-lg:hidden absolute -top-10 left-10"} />
          {config.caseStudy.map((card) => {
            return <CaseStudyCard key={card.title} card={card} />;
          })}
        </ul>
      </div>
    );
}

export default CaseStudies
