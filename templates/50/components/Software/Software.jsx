import React from 'react'
import Title, { SubTitle } from '../reusables/Title/Title'
import KeySection from './KeySection';

const Software = () => {
    return (
      <div className="space-y-12 md:space-y-[100px]">
        <div className='space-y-5'>
          <Title variant='xl'>
            Software your office and
            <br />
            field staff will love
          </Title>
          <SubTitle subTitleClass={"px-10 mx-auto lg:w-[40%] tracking-wider "}>
            Workever is a real-time field service management software solution.
            Whether you have a small mobile team of two or a large enterprise
            with hundreds of field staff, Workever makes your job simple and
            your business grow.
          </SubTitle>
        </div>
        <KeySection />
      </div>
    );
}

export default Software
