import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Strategy from './components/Strategy/Strategy'
import Software from './components/Software/Software'
import Connect from './components/Connect/Connect'
import CaseStudies from './components/CaseStudies/CaseStudies'
import Paperwork from './components/Paperwork/Paperwork'
import Footer from './components/Footer/Footer'
import Industries from './components/Industries/Industries'
import Workforce from './components/Industries/Workforce'
import Testimonials from './components/Testimonials/Testimonials'


const page = () => {
    return (
      <main className="space-y-12 text-black">
        <Header />
        <div className="space-y-[150px] ">
          <div className="space-y-[100px] md:space-y-[225px]">
            <Hero />
            <Strategy />
          </div>
          <Software />
          <div className="space-y-[75px] md:space-y-[150px]">
          <Connect />
          <Testimonials />
            <div className='space-y-[100px] md:space-y-[200px]'>
              <CaseStudies />
              <Industries />
            </div>
            <Workforce />
            <Paperwork />
          </div>
          <Footer />
        </div>
      </main>
    );
}

export default page
