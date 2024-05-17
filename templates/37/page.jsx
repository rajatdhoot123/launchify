import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import EasyPayment from './components/EasyPayment/EasyPayment';
import Card from './components/Card/Card';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import InternationalSection from './components/Card/InternationalSection';

const page = () => {
    return (
      <main className="space-y-12 text-black overflow-x-hidden">
        <Header />
        <div className="space-y-32 lg:space-y-40">
          <Hero />
          <EasyPayment />
          <Card />
          <InternationalSection />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </main>
    );
}

export default page
