import React from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Base from "./components/Base/Base";

const page = () => {
  return (
    <main className="space-y-[5rem] bg-[#282828] px-2">
      {/* <Header /> */}
      <Hero />
      <Base />
      <Footer />
    </main>
  );
};

export default page;
