import Navbar1 from "@/app/components/navbar/varient-1";
import Navbar2 from "@/app/components/navbar/varient-2";
import Navbar3 from "@/app/components/navbar/varient-3";
import Hero1 from "@/app/components/hero/varient-1";
import Hero2 from "@/app/components/hero/varient-2";
import Hero3 from "@/app/components/hero/varient-3";
import Hero4 from "@/app/components/hero/varient-4";
import Pricing1 from "@/app/components/pricing/varient-1";
import Pricing2 from "@/app/components/pricing/varient-2";
import Pricing3 from "@/app/components/pricing/varient-3";
import Pricing4 from "@/app/components/pricing/varient-4";
import Testimonials1 from "@/app/components/testimonials/varient-1";
import Testimonials2 from "@/app/components/testimonials/varient-2";
import Testimonials3 from "@/app/components/testimonials/varient-3";

export const NAVBAR = {
  "varient-1": <Navbar1 />,
  "varient-2": <Navbar2 />,
  "varient-3": <Navbar3 />,
};

export const HERO = {
  "varient-1": <Hero1 />,
  "varient-2": <Hero2 />,
  "varient-3": <Hero3 />,
  "varient-4": <Hero4 />,
};

export const PRICING = {
  "varient-1": <Pricing1 />,
  "varient-2": <Pricing2 />,
  "varient-3": <Pricing3 />,
  "varient-4": <Pricing4 />,
};

export const TESTIMONIALS = {
  "varient-1": <Testimonials1 />,
  "varient-2": <Testimonials2 />,
  "varient-3": <Testimonials3 />,
};

export const FLOATER_SELECT = [
  { key: "nav_varient", varients: NAVBAR, title: "Select Nabar" },
  { key: "hero_varient", varients: HERO, title: "Select Hero" },
  { key: "pricing_varient", varients: PRICING, title: "Select Pricing" },
  {
    key: "testimonials_varient",
    varients: TESTIMONIALS,
    title: "Select Testimonials",
  },
];
