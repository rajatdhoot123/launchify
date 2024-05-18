import Hero from "@/app/landingcomponent/hero/variant-1";
import Pricing from "@/app/landingcomponent/pricing";
import Testimonials from "@/app/landingcomponent/testimonials";
import BuildFeature from "@/app/landingcomponent/build";
import Features from "@/app/landingcomponent/features";
import Footer from "@/app/landingcomponent/footer/variant-3";
import Faqs from "@/app/landingcomponent/faq";
import { Bricolage_Grotesque } from "next/font/google";
import {
  EXTENSION_BUILD_FEATURE,
  EXTENSION_FAQS,
} from "@/app/landingcomponent/constant";

const TIME_SAVING = [
  "+ 8 hrs landing page design",
  "+ 4 hrs database drizzle setup",
  "+ 4 hrs stipe webhook + custom payment setup",
  "+ 2 hrs to handle Lemonsqueezy webhooks",
  "+ 2 hrs for SEO",
  "+ 4 hrs for auth setup",
  "+ 4 hrs for database setup",
  "+ 4 hrs for mdx setup ",
  "+ 1 hr for GA + crisp setup ",
  "+ ∞ hrs overthinking...",
  "= 33+ hours of headaches",
];

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const Extension = () => {
  return (
    <div
      className={`w-full overflow-scroll md:space-y-40 space-y-20 ${bricolage_grotesque.className}`}
    >
      <section id="hero" className="mx-auto container">
        <Hero source="extension" />
      </section>
      {/* <section className="container mx-auto">
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
      </section> */}

      {/* <section id="features" className="container mx-auto">
        <Features />
      </section> */}
      <section id="boilerplate" className="container mx-auto">
        <BuildFeature features={EXTENSION_BUILD_FEATURE} />
      </section>
      <section id="pricing" className="container mx-auto">
        <Pricing
          paymanetLink="https://shop.boilercode.app/buy/b092bae2-4f7c-4700-8391-50d5af2a7cd6"
          price="27$"
          features={[
            { title: "Boilerplate (Code in ReactJS & TailwindCSS)" },
            {
              title:
                "Boilerplate for Side Bar, Side Panel, Injecting content scripts & Popup",
            },
            {
              title: "Authentication (Supabase)",
            },
            { title: "Lifetime updates" },
          ]}
        />
      </section>
      <section id="faqs" className="container mx-auto">
        <Faqs faqs={EXTENSION_FAQS} />
      </section>
      {/* <section id="testinomials" className="container mx-auto">
    <Testimonials />
  </section> */}
      <Footer />
    </div>
  );
};

export default Extension;