import Navbar1 from "@/app/components/navbar/variant-1";
import Navbar2 from "@/app/components/navbar/variant-2";
import Navbar3 from "@/app/components/navbar/variant-3";
import Hero1 from "@/app/components/hero/variant-1";
import Hero2 from "@/app/components/hero/variant-2";
import Hero3 from "@/app/components/hero/variant-3";
import Hero4 from "@/app/components/hero/variant-4";
import Hero5 from "@/app/components/hero/variant-5";
import Hero6 from "@/app/components/hero/variant-6";
import Hero7 from "@/app/components/hero/variant-7";
import Hero8 from "@/app/components/hero/variant-8";
import Pricing1 from "@/app/components/pricing/variant-1";
import Pricing2 from "@/app/components/pricing/variant-2";
import Pricing3 from "@/app/components/pricing/variant-3";
import Pricing4 from "@/app/components/pricing/variant-4";
import Pricing5 from "@/app/components/pricing/variant-5";
import Pricing6 from "@/app/components/pricing/variant-6";
import Testimonials1 from "@/app/components/testimonials/variant-1";
import Testimonials2 from "@/app/components/testimonials/variant-2";
import Testimonials3 from "@/app/components/testimonials/variant-3";
import Table1 from "@/app/components/table/variant-1";
import Table2 from "@/app/components/table/variant-2";
import Table3 from "@/app/components/table/variant-3";
import Card1 from "@/app/components/cards/variant-1";
import Card2 from "@/app/components/cards/variant-2";
import Card3 from "@/app/components/cards/variant-3";
import Card4 from "@/app/components/cards/variant-4";
import Card5 from "@/app/components/cards/variant-5";
import Card6 from "@/app/components/cards/variant-6";
import Card7 from "@/app/components/cards/variant-7";
import Card8 from "@/app/components/cards/variant-8";
import Card9 from "@/app/components/cards/variant-9";
import Card10 from "@/app/components/cards/variant-10";
import Card11 from "@/app/components/cards/variant-11";
import RandomCard1 from "@/app/components/randomcards/variant-1";
import RandomCard2 from "@/app/components/randomcards/variant-2";
import Footer1 from "@/app/components/footer/variant-1";
import Footer2 from "@/app/components/footer/variant-2";
import Footer3 from "@/app/components/footer/variant-3";
import Footer4 from "@/app/components/footer/variant-4";
import CommingSoon1 from "@/app/components/commingsoon/variant-1";
import Animated1 from "@/app/components/animatedcards/variant-1";
import Contactus1 from "@/app/components/contactus/variant-1";
import Contactus2 from "@/app/components/contactus/variant-2";
import Login1 from "@/app/components/login/variant-1";
import Login2 from "@/app/components/login/variant-2";
import Faq1 from "@/app/components/faq/variant-1";

const NAVBAR = {
  "variant-1": Navbar1,
  "variant-2": Navbar2,
  "variant-3": Navbar3,
};

const HERO = {
  "variant-1": Hero1,
  "variant-2": Hero2,
  "variant-3": Hero3,
  "variant-4": Hero4,
  "variant-5": Hero5,
  "variant-6": Hero6,
  "variant-7": Hero7,
  "variant-8": Hero8,
};

const PRICING = {
  "variant-1": Pricing1,
  "variant-2": Pricing2,
  "variant-3": Pricing3,
  "variant-4": Pricing4,
  "variant-5": Pricing5,
  "variant-6": Pricing6,
};

const TESTIMONIALS = {
  "variant-1": Testimonials1,
  "variant-2": Testimonials2,
  "variant-3": Testimonials3,
};

const TABLE = {
  "variant-1": Table1,
  "variant-2": Table2,
  "variant-3": Table3,
};

const RANDOMCARD = {
  "variant-1": RandomCard1,
  "variant-2": RandomCard2,
};

const FOOTER = {
  "variant-1": Footer1,
  "variant-2": Footer2,
  "variant-3": Footer3,
  "variant-4": Footer4,
};

const FAQ = {
  "variant-1": Faq1,
};

const CARDS = {
  "variant-1": Card1,
  "variant-2": Card2,
  "variant-3": Card3,
  "variant-4": Card4,
  "variant-5": Card5,
  "variant-6": Card6,
  "variant-7": Card7,
  "variant-8": Card8,
  "variant-9": Card9,
  "variant-10": Card10,
  "variant-11": Card11,
};

const COMMING_SOON = {
  "variant-1": CommingSoon1,
};

const ANIMATED_CARDS = {
  "variant-1": Animated1,
};

const CONTACT_US = {
  "variant-1": Contactus1,
  "variant-2": Contactus2,
};

const LOGIN = {
  "variant-1": Login1,
  "variant-2": Login2,
};

export const COMPONENTS_ARRAY = [
  { name: "Navbar", components: Object.values(NAVBAR) },
  { name: "Hero", components: Object.values(HERO) },
  {
    name: "Pricing",
    components: Object.values(PRICING),
  },

  {
    name: "Testimonials",
    components: Object.values(TESTIMONIALS),
  },
  {
    name: "Table",
    components: Object.values(TABLE),
  },
  {
    name: "Faq",
    components: Object.values(FAQ),
  },
  {
    name: "RandomCards",
    components: Object.values(RANDOMCARD),
  },
  {
    name: "Footer",
    components: Object.values(FOOTER),
  },
  {
    name: "Cards",
    components: Object.values(CARDS),
  },
  {
    name: "CommingSoon",
    components: Object.values(COMMING_SOON),
  },
  {
    name: "AnimatedCard",
    components: Object.values(ANIMATED_CARDS),
  },
  {
    name: "ContactUs",
    components: Object.values(CONTACT_US),
  },
  {
    name: "Login",
    components: Object.values(LOGIN),
  },
];

export const PREMIUM_FEATURES = [
  {
    item_id: "next_auth",
    selected: false,
    title: "Next Auth",
  },
  {
    item_id: "database",
    selected: false,
    title: "Database (Drizzle ORM)",
  },
];

export const PAGES = [
  {
    item_id: "terms-condition",
    selected: false,
    title: "Terms and Condition",
  },
  {
    item_id: "privacy-policy",
    selected: false,
    title: "Privacy Policy",
  },
];

export const FLOATER_SELECT = [
  {
    item_id: "navbar",
    variants: NAVBAR,
    title: "Nabar",
    selected: "variant-2",
  },
  {
    item_id: "hero",
    variants: HERO,
    title: "Hero",
    selected: "variant-7",
  },
  {
    item_id: "pricing",
    variants: PRICING,
    title: "Pricing",
    selected: "variant-3",
  },
  {
    item_id: "login",
    variants: LOGIN,
    title: "Login",
    selected: "variant-2",
  },
  {
    item_id: "testimonials",
    variants: TESTIMONIALS,
    title: "Testimonials",
    selected: "variant-1",
  },
  {
    item_id: "table",
    variants: TABLE,
    title: "Table",
    selected: "variant-1",
  },
  {
    item_id: "faq",
    variants: FAQ,
    title: "Faq",
    selected: "variant-1",
  },
  {
    item_id: "cards",
    variants: CARDS,
    title: "Card",
    selected: "variant-6",
  },
  {
    item_id: "commingsoon",
    variants: COMMING_SOON,
    title: "Commingsoon",
    selected: "variant-1",
  },
  {
    item_id: "contactus",
    variants: CONTACT_US,
    title: "Contact Us",
    selected: "variant-2",
  },
  {
    item_id: "footer",
    variants: FOOTER,
    title: "Footer",
    selected: "variant-4",
  },

  // {
  //   item_id: "randomcards",
  //   variants: RANDOMCARD,
  //   title: "Random Card",
  //   selected: "variant-2",
  // },
  // {
  //   item_id: "animatedcards",
  //   variants: ANIMATED_CARDS,
  //   title: "Animated",
  //   selected: "variant-1",
  // },
];
