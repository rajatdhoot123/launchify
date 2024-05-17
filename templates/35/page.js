import React from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Base from "./components/Base/Base";
import Feature from "./components/Feature/Feature";

const page = () => {
  return (
    <main className="space-y-[5rem] px-2">
      {/* <Header /> */}
      <Hero />
      <Base />
      <Feature />
      {/* <Footer /> */}
    </main>
  );
};

export default page;
