import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Report from "./components/Report";
import Section2 from "./components/Section2";
import System from "./components/System";
import Testimonial from "./components/Testimonial";
import Why from "./components/Why";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="space-y-20">
        <div className="w-full sm:px-8 lg:px-28 px-6 bg-[#DBE5FF]">
          <Hero />
          <Section2 />
        </div>
        <div className="sm:px-8 lg:px-28 px-6 space-y-20">
          <Why />
        </div>
        <System />
        <div className="bg-[#F3F3F3] sm:px-8 lg:px-28 px-6 space-y-20">
          <Report />
        </div>
      </div>
      <Pricing />
      <Testimonial />
      <div className="bg-[#F3F3F3] sm:px-8 lg:px-28 px-6">
        <Footer />
      </div>
    </div>
  );
};

export default page;
