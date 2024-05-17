import Navbar from "./components/Navbar.jsx";
import { DM_Sans, Inter } from "next/font/google";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Section2 from "./components/Section2.jsx";

const dm = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className={` space-y-20 ${inter.className}`}>
      <div className="space-y-20 lg:space-y-20 sm:px-8 lg:px-40 px-6">
        <Navbar />
        <Hero />
        <Section2 />
        <Footer />
      </div>
    </div>
  );
};

export default page;
