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
import Pricing5 from "@/app/components/pricing/varient-5";
import Testimonials1 from "@/app/components/testimonials/varient-1";
import Testimonials2 from "@/app/components/testimonials/varient-2";
import Testimonials3 from "@/app/components/testimonials/varient-3";
import Table1 from "@/app/components/table/varient-1";
import Table2 from "@/app/components/table/varient-2";
import Table3 from "@/app/components/table/varient-3";
import Accordion1 from "@/app/components/accordion/varient-1";
import Card1 from "@/app/components/cards/varient-1";

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
  "varient-5": <Pricing5 />,
};

export const TESTIMONIALS = {
  "varient-1": <Testimonials1 />,
  "varient-2": <Testimonials2 />,
  "varient-3": <Testimonials3 />,
};

export const TABLE = {
  "varient-1": <Table1 />,
  "varient-2": <Table2 />,
  "varient-3": <Table3 />,
};

export const ACCORDION = {
  "varient-1": <Accordion1 />,
};

export const CARDS = {
  "varient-1": <Card1 />,
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
  {
    key: "table_varient",
    varients: TABLE,
    title: "Select Table",
  },
  // {
  //   key: "accordion_varient",
  //   varients: ACCORDION,
  //   title: "Select Accordion",
  // },
  {
    key: "card_varient",
    varients: ACCORDION,
    title: "Select Card",
  },
];
