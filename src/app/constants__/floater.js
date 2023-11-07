import Navbar1 from "@/app/components/navbar/varient-1";
import Navbar2 from "@/app/components/navbar/varient-2";
import Navbar3 from "@/app/components/navbar/varient-3";
import Hero1 from "@/app/components/hero/varient-1";
import Hero2 from "@/app/components/hero/varient-2";
import Hero3 from "@/app/components/hero/varient-3";
import Hero4 from "@/app/components/hero/varient-4";
import Hero5 from "@/app/components/hero/varient-5";
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
import Card2 from "@/app/components/cards/varient-2";
import Card3 from "@/app/components/cards/varient-3";
import Card4 from "@/app/components/cards/varient-4";
import Card5 from "@/app/components/cards/varient-5";
import Card6 from "@/app/components/cards/varient-6";
import Card7 from "@/app/components/cards/varient-7";
import Card8 from "@/app/components/cards/varient-8";
import Card9 from "@/app/components/cards/varient-9";
import Card10 from "@/app/components/cards/varient-10";
import Card11 from "@/app/components/cards/varient-11";
import RandomCard1 from "@/app/components/randomcards/varient-1";
import RandomCard2 from "@/app/components/randomcards/varient-2";
import Footer1 from "@/app/components/footer/varient-1";
import Footer2 from "@/app/components/footer/varient-2";
import Footer3 from "@/app/components/footer/varient-3";
import Footer4 from "@/app/components/footer/varient-4";
import CommingSoon1 from "@/app/components/commingsoon/varient-1";
import ProductLaunch1 from "@/app/components/productlaunch/varient-1";

const NAVBAR = {
  "varient-1": <Navbar1 />,
  "varient-2": <Navbar2 />,
  "varient-3": <Navbar3 />,
};

const HERO = {
  "varient-1": <Hero1 />,
  "varient-2": <Hero2 />,
  "varient-3": <Hero3 />,
  "varient-4": <Hero4 />,
  "varient-5": <Hero5 />,
};

const PRICING = {
  "varient-1": <Pricing1 />,
  "varient-2": <Pricing2 />,
  "varient-3": <Pricing3 />,
  "varient-4": <Pricing4 />,
  "varient-5": <Pricing5 />,
};

const TESTIMONIALS = {
  "varient-1": <Testimonials1 />,
  "varient-2": <Testimonials2 />,
  "varient-3": <Testimonials3 />,
};

const PRODUCT_LAUNCH = {
  "varient-1": <ProductLaunch1 />,
};

const TABLE = {
  "varient-1": <Table1 />,
  "varient-2": <Table2 />,
  "varient-3": <Table3 />,
};

const ACCORDION = {
  "varient-1": <Accordion1 />,
};

const RANDOMCARD = {
  "varient-1": <RandomCard1 />,
  "varient-2": <RandomCard2 />,
};

const FOOTER = {
  "varient-1": <Footer1 />,
  "varient-2": <Footer2 />,
  "varient-3": <Footer3 />,
  "varient-4": <Footer4 />,
};

const CARDS = {
  "varient-1": <Card1 />,
  "varient-2": <Card2 />,
  "varient-3": <Card3 />,
  "varient-4": <Card4 />,
  "varient-5": <Card5 />,
  "varient-6": <Card6 />,
  "varient-7": <Card7 />,
  "varient-8": <Card8 />,
  "varient-9": <Card9 />,
  "varient-10": <Card10 />,
  "varient-11": <Card11 />,
};

const COMMING_SOON = {
  "varient-1": <CommingSoon1 />,
};

export const FLOATER_SELECT = [
  {
    item_id: "navbar",
    varients: NAVBAR,
    title: "Select Nabar",
    selected: "varient-1",
  },
  {
    item_id: "hero",
    varients: HERO,
    title: "Select Hero",
    selected: "varient-1",
  },
  {
    item_id: "pricing",
    varients: PRICING,
    title: "Select Pricing",
    selected: "varient-1",
  },
  {
    item_id: "testimonials",
    varients: TESTIMONIALS,
    title: "Select Testimonials",
    selected: "varient-1",
  },
  {
    item_id: "productlaunch",
    varients: PRODUCT_LAUNCH,
    title: "Select Product Launch",
    selected: "varient-1",
  },
  {
    item_id: "table",
    varients: TABLE,
    title: "Select Table",
    selected: "varient-1",
  },
  {
    item_id: "cards",
    varients: CARDS,
    title: "Select Card",
    selected: "varient-1",
  },
  {
    item_id: "commingsoon",
    varients: COMMING_SOON,
    title: "Select Commingsoon",
    selected: "varient-1",
  },
  {
    item_id: "randomcards",
    varients: RANDOMCARD,
    title: "Select Random Card",
    selected: "varient-1",
  },
  {
    item_id: "footer",
    varients: FOOTER,
    title: "Select Footer",
    selected: "varient-1",
  },
];
