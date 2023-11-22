import Navbar from "@/app/__landingcomponents__/navbar/varient-2";
import Hero from "@/app/__landingcomponents__/hero/varient-1";
import Pricing from "@/app/__landingcomponents__/pricing/varient-2";
import Testimonials from "@/app/__landingcomponents__/testimonials/varient-2";
import Cards from "@/app/__landingcomponents__/cards/varient-3";
import Commingsoon from "@/app/__landingcomponents__/commingsoon/varient-1";
import Footer from "@/app/__landingcomponents__/footer/varient-3";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-scroll">
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonials />
        <Cards />
        <Commingsoon />
        <Footer />
      </div>
    </>
  );
}
