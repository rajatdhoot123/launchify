import Testimoni from "./components/TestimonialPage";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Hire from "./components/Hire";
import Page2 from "./components/Page2";
import Idea from "./components/Idea";
import Post from "./components/Post";
import Portfolio from "./components/Portfolio";
import RotatingText from "./components/InfiniteMarquee";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div id="jayesh1">
      <Hero />
      <div className="space-y-16">
        <Page2 />
        <Experience />
        <Hire />
        <Portfolio />
        <Testimoni />
        <Idea />
        <RotatingText />
        <Post />
        <Footer />
      </div>
    </div>
  );
};

export default page;
