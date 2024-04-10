import React from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import TopFooter from './components/Banner/TopFooter';
import Productivity from './components/Productivity/Productivity';
import Success from './components/Success/Success';


const Page = () => {
    return (
        <main className='bg-black min-h-screen  overflox-x-hidden text-white'>
            <Header />
            <Hero />
            <Productivity />
            <Success />
            <Pricing />
            <TopFooter />
            <Footer />
        </main>
    )
}

export default Page;
