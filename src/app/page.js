import Navbar from "@/app/landingcomponent/navbar/variant-2";
import Hero from "@/app/landingcomponent/hero/variant-1";
import Pricing from "@/app/landingcomponent/pricing/variant-2";
import Testimonials from "@/app/landingcomponent/testimonials/variant-2";
import Cards from "@/app/landingcomponent/cards/variant-3";
import Commingsoon from "@/app/landingcomponent/commingsoon/variant-1";
import Footer from "@/app/landingcomponent/footer/variant-3";

const TIME_SAVING = [
  "+ 6 hrs landing page design",
  "+ 2 hrs to handle Lemonsqueezy webhooks",
  "+ 2 hrs for SEO",
  "+ 4 hrs for auth setup",
  "+ 4 hrs for database setup",
  "+4 hrs for mdx blogs setup ",
  "+ ∞ hrs overthinking...",
  "= 22+ hours of headaches",
];

export default async function Home() {
  return (
    <>
      <div className="w-full overflow-scroll space-y-12">
        <Hero />
        <div className="p-5">
          <div className="bg-[#FFF9F3] shadow-[5px_5px_0px_0px_#080a47] border-2 border-[#080a47] container rounded-md md:w-[560px] text-center">
            <div className="p-5 space-y-6">
              <div className="text-2xl font-semibold">
                Traditional way is draining your time ⏱️
              </div>
              <ul className="space-y-4">
                {TIME_SAVING.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <section className="container mx-auto flex flex-col items-center justify-center text-center gap-12  md:py-24 py-12 relative">
            <div className="md:w-[550px] w-[380px] gap-12 flex flex-col items-center">
              <div className="md:text-4xl text-2xl font-bold">
                Build your app instantly.launch faster, make 💸
              </div>
            </div>
          </section>
        </div>
        <Pricing />
        <Testimonials />
        <Cards />
        <Commingsoon />
        <Footer />
      </div>
    </>
  );
}
