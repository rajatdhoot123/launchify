import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div style={{ width: "100%" }}>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default page;
