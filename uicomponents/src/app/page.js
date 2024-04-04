import Navbar from "@/app/landingcomponent/navbar";
import Hero from "@/app/landingcomponents/hero/variant-1";
import Pricing from "@/app/__landingcomponents__/pricing/variant-2";
import Testimonials from "@/app/__landingcomponents__/testimonials/variant-2";
import Cards from "@/app/__landingcomponents__/cards/variant-3";
import Commingsoon from "@/app/__landingcomponents__/commingsoon/variant-1";
import Footer from "@/app/landingcomponent/footer/variant-3";

export default async function Home() {
  return (
    <>
      <div className="w-full overflow-scroll space-y-12">
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
