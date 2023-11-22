import Navbar from "@/app/components/navbar/varient-2";
import Hero from "@/app/components/hero/varient-1";
import Pricing from "@/app/components/pricing/varient-2";
import Testimonials from "@/app/components/testimonials/varient-2";
import Cards from "@/app/components/cards/varient-3";
import Commingsoon from "@/app/components/commingsoon/varient-1";
import Footer from "@/app/components/footer/varient-3";

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
