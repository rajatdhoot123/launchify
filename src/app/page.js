import Hero from "@/app/landingcomponent/hero/variant-1";
import Pricing from "@/app/landingcomponent/pricing";
import Testimonials from "@/app/landingcomponent/testimonials";
import BuildFeature from "@/app/landingcomponent/build";
import Features from "@/app/landingcomponent/features";
import Footer from "@/app/landingcomponent/footer/variant-3";
import Faqs from "@/app/landingcomponent/faq";
import { Bricolage_Grotesque } from "next/font/google";
import { BUILD_FEATURES, FAQS } from "./landingcomponent/constant";

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

export default async function Home() {
  return (
    <>
      <div
        className={`w-full overflow-scroll md:space-y-40 space-y-20 ${bricolage_grotesque.className}`}
      >
        <section id="hero" className="mx-auto container">
          <Hero />
        </section>
        <section className="container mx-auto">
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
        </section>

        <section id="features" className="container mx-auto">
          <Features
            features={[
              {
                icon: (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                ),
                title: "Drag & Drop Builder",
                description:
                  "🚀 Use the drag-and-drop builder for landing page, leverage AI for copywriting, & choose required integrations.",
              },
              {
                icon: (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path>
                  </svg>
                ),
                title: "Customize & Personalize",
                description:
                  "🎨 Make your landing page stand out with our easy-to-use editor. Export code, customize to your heart's content, and add those final touches to make your project truly unique.",
              },
              {
                icon: (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                  </svg>
                ),
                title: "Production Ready",
                description:
                  "🚀 Launch your app with confidence. Our platform ensures your landing page is optimized for conversion, loaded with the right integrations, and ready to drive revenue for your business.",
              },
            ]}
          />
        </section>
        <section id="boilerplate" className="container mx-auto">
          <BuildFeature features={BUILD_FEATURES} />
        </section>
        <section id="pricing" className="container mx-auto">
          <Pricing
            paymanetLink="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4"
            price="107$"
            features={BUILD_FEATURES}
          />
        </section>
        <section id="faqs" className="container mx-auto">
          <Faqs faqs={FAQS} />
        </section>
        {/* <section id="testinomials" className="container mx-auto">
          <Testimonials />
        </section> */}
        <Footer />
      </div>
    </>
  );
}
