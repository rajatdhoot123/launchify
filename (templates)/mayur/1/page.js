import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AboutPage from "./components/About";
import ProjectPage from "./components/Project";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div style={{ width: "100%" }}>
      <Hero />
      <Skills />
      <Experience />
      <AboutPage />
      <ProjectPage />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};


export default page;
