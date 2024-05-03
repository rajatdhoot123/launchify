import React from "react";
import Hero from "./components/Hero";
import { DM_Sans } from "next/font/google";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Section2 from "./components/Section2";

const dm = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className={`${dm.className} space-y-20 bg-white text-black dark:bg-black dark:text-white `}>
      <Hero />
      <div className="sm:px-8 lg:px-40 px-6 space-y-20">
        <Section2 />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default page;
