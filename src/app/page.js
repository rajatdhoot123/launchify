import Navbar from "@/app/__landingcomponents__/navbar/variant-2";
import Hero from "@/app/__landingcomponents__/hero/variant-1";
import Pricing from "@/app/__landingcomponents__/pricing/variant-2";
import Testimonials from "@/app/__landingcomponents__/testimonials/variant-2";
import Cards from "@/app/__landingcomponents__/cards/variant-3";
import Commingsoon from "@/app/__landingcomponents__/commingsoon/variant-1";
import Footer from "@/app/__landingcomponents__/footer/variant-3";
import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const session = await getServerSession(AUTH_OPTIONS);

  return (
    <>
      <div className="w-full overflow-scroll space-y-12">
        <Navbar session={session} />
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
