import React from 'react'
import Hero from './components/Hero/Hero'
import Partner from './components/Partner/Partner'
import Growth from './components/Growth/Growth'
import Success from './components/Success/Success'
import FAQs from './components/FAQs/FAQs'
import Pricing from './components/Pricing/Pricing'
import JoinBanner from './components/Banner/JoinBanner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// import Circle from './components/Circle'

const page = () => {
    return (
      <main className="space-y-[5rem] bg-[#F2F9FB]">
        <Header />
        <Hero />
        <Partner />
        <Growth />
        <Success />
        <FAQs />
        <Pricing />
        <JoinBanner />
        <Footer />

        {/* <Circle
          width={500}
          height={500}
          className="absolute bottom-[5vh] right-0"
        /> */}
      </main>
    );
}

export default page
