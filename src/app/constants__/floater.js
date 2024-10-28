import Navbar1 from "@/app/components/navbar/variant-1";
import Navbar2 from "@/app/components/navbar/variant-2";
import Hero1 from "@/app/components/hero/variant-1";
import Hero2 from "@/app/components/hero/variant-2";
import Hero3 from "@/app/components/hero/variant-3";
import Hero4 from "@/app/components/hero/variant-4";
import Hero5 from "@/app/components/hero/variant-5";
import Section1 from "@/app/components/section/variant-1";
import Pricing1 from "@/app/components/pricing/variant-1";
import Pricing2 from "@/app/components/pricing/variant-2";
import Pricing3 from "@/app/components/pricing/variant-3";
import Pricing4 from "@/app/components/pricing/variant-4";
import Pricing5 from "@/app/components/pricing/variant-5";
import Pricing6 from "@/app/components/pricing/variant-6";
import Testimonials1 from "@/app/components/testimonials/variant-1";
import Testimonials2 from "@/app/components/testimonials/variant-2";
import Table1 from "@/app/components/table/variant-1";
import Table2 from "@/app/components/table/variant-2";
import Table3 from "@/app/components/table/variant-3";
import Card2 from "@/app/components/cards/variant-2";
import Card3 from "@/app/components/cards/variant-3";
import Card4 from "@/app/components/cards/variant-4";
import Card6 from "@/app/components/cards/variant-6";
import Card7 from "@/app/components/cards/variant-7";
import Card8 from "@/app/components/cards/variant-8";
import Card9 from "@/app/components/cards/variant-9";
import Card10 from "@/app/components/cards/variant-10";
import Card11 from "@/app/components/cards/variant-11";
// import RandomCard1 from "@/app/components/randomcards/variant-1";
// import RandomCard2 from "@/app/components/randomcards/variant-2";
import Footer1 from "@/app/components/footer/variant-1";
import Footer2 from "@/app/components/footer/variant-2";
import Footer3 from "@/app/components/footer/variant-3";
import Footer4 from "@/app/components/footer/variant-4";
import WaitList1 from "@/app/components/waitlist/variant-1";
import Animated1 from "@/app/components/animatedcards/variant-1";
import Contactus1 from "@/app/components/contactus/variant-1";
import Contactus2 from "@/app/components/contactus/variant-2";
import Login1 from "@/app/components/login/variant-1";
import Login2 from "@/app/components/login/variant-2";
import Faq1 from "@/app/components/faq/variant-1";
import About1 from "@/app/components/about/variant-1";
import Feature1 from "@/app/components/featureservice/variant-1";
import AnimatedComp1 from "@/app/components/animated/variant-1.jsx";
import ChatBot1 from "@/app/ai/chatbot/page";

export const COMPONENTS_ARRAY = [
  {
    name: "navbar",
    components: [
      {
        name: "nav-1",
        comp: Navbar1,
        export_path: ["src/app/components/navbar/variant-1.jsx"],
      },
      {
        name: "nav-2",
        comp: Navbar2,
        export_path: ["src/app/components/navbar/variant-2.jsx"],
      },
    ],
  },
  {
    name: "hero",
    components: [
      {
        name: "hero-1",
        comp: Hero1,
        export_path: ["src/app/components/hero/variant-1.jsx"],
      },
      {
        name: "hero-2",
        comp: Hero2,
        export_path: ["src/app/components/hero/variant-2.jsx"],
      },
      {
        name: "hero-3",
        comp: Hero3,
        export_path: ["src/app/components/hero/variant-3.jsx"],
      },
      {
        name: "hero-4",
        comp: Hero4,
        export_path: ["src/app/components/hero/variant-4.jsx"],
      },
      {
        name: "hero-5",
        comp: Hero5,
        export_path: ["src/app/components/hero/variant-5.jsx"],
      },
    ],
  },
  {
    name: "cards",
    components: [
      {
        name: "card-2",
        comp: Card2,
        export_path: ["src/app/components/cards/variant-2.jsx"],
      },
      {
        name: "notification-card",
        comp: Card3,
        export_path: ["src/app/components/cards/variant-3.jsx"],
      },
      {
        name: "card-4",
        comp: Card4,
        export_path: ["src/app/components/cards/variant-4.jsx"],
      },
      {
        name: "card-6",
        comp: Card6,
        export_path: ["src/app/components/cards/variant-6.jsx"],
      },
      {
        name: "card-7",
        comp: Card7,
        export_path: ["src/app/components/cards/variant-7.jsx"],
      },
      {
        name: "card-8",
        comp: Card8,
        export_path: ["src/app/components/cards/variant-8.jsx"],
      },
      {
        name: "card-9",
        comp: Card9,
        export_path: ["src/app/components/cards/variant-9.jsx"],
      },
      {
        name: "card-10",
        comp: Card10,
        export_path: ["src/app/components/cards/variant-10.jsx"],
      },
      {
        name: "card-11",
        comp: Card11,
        export_path: ["src/app/components/cards/variant-11.jsx"],
      },
    ],
  },
  {
    name: "featureservice",
    components: [
      {
        name: "feature-1",
        comp: Feature1,
        export_path: ["src/app/components/featureservice/variant-1.jsx"],
      },
    ],
  },
  {
    name: "table",
    components: [
      {
        name: "table-1",
        comp: Table1,
        export_path: ["src/app/components/table/variant-1.jsx"],
      },
      {
        name: "table-2",
        comp: Table2,
        export_path: ["src/app/components/table/variant-2.jsx"],
      },
      {
        name: "table-3",
        comp: Table3,
        export_path: ["src/app/components/table/variant-3.jsx"],
      },
    ],
  },
  {
    name: "animated",
    components: [
      {
        name: "animated-1",
        comp: AnimatedComp1,
        export_path: ["src/app/components/animated/variant-1.jsx"],
      },
    ],
  },
  {
    name: "pricing",
    components: [
      {
        name: "pricing-1",
        comp: Pricing1,
        export_path: ["src/app/components/pricing/variant-1.jsx"],
      },
      {
        name: "pricing-2",
        comp: Pricing2,
        export_path: ["src/app/components/pricing/variant-2.jsx"],
      },
      {
        name: "pricing-3",
        comp: Pricing3,
        export_path: ["src/app/components/pricing/variant-3.jsx"],
      },
      {
        name: "pricing-4",
        comp: Pricing4,
        export_path: ["src/app/components/pricing/variant-4.jsx"],
      },
      {
        name: "pricing-5",
        comp: Pricing5,
        export_path: ["src/app/components/pricing/variant-5.jsx"],
      },
      {
        name: "pricing-6",
        comp: Pricing6,
        export_path: ["src/app/components/pricing/variant-6.jsx"],
      },
    ],
  },
  {
    name: "testimonials",
    components: [
      {
        name: "testimonials-1",
        comp: Testimonials1,
        export_path: ["src/app/components/testimonials/variant-1.jsx"],
      },
      {
        name: "testimonials-2",
        comp: Testimonials2,
        export_path: ["src/app/components/testimonials/variant-2.jsx"],
      },
    ],
  },
  {
    name: "faq",
    components: [
      {
        name: "faq-1",
        comp: Faq1,
        export_path: ["src/app/components/faq/variant-1.jsx"],
      },
    ],
  },
  {
    name: "contactus",
    components: [
      {
        name: "contactus-1",
        comp: Contactus1,
        export_path: ["src/app/components/contactus/variant-1.jsx"],
      },
      {
        name: "contactus-2",
        comp: Contactus2,
        export_path: ["src/app/components/contactus/variant-2.jsx"],
      },
    ],
  },
  {
    name: "login",
    components: [
      {
        name: "login-1",
        comp: Login1,
        export_path: ["src/app/components/login/variant-1.jsx"],
      },
      {
        name: "login-2",
        comp: Login2,
        export_path: ["src/app/components/login/variant-2.jsx"],
      },
    ],
  },
  {
    name: "waitlist",
    components: [
      {
        name: "waitlist-1",
        comp: WaitList1,
        export_path: ["src/app/components/waitlist/variant-1.jsx"],
      },
    ],
    lib: [{ title: "Loops", link: "https://loops.so" }],
  },
  {
    name: "footer",
    components: [
      {
        name: "footer-1",
        comp: Footer1,
        export_path: ["src/app/components/footer/variant-1.jsx"],
      },
      {
        name: "footer-2",
        comp: Footer2,
        export_path: ["src/app/components/footer/variant-2.jsx"],
      },
      {
        name: "footer-3",
        comp: Footer3,
        export_path: ["src/app/components/footer/variant-3.jsx"],
      },
      {
        name: "footer-4",
        comp: Footer4,
        export_path: ["src/app/components/footer/variant-4.jsx"],
      },
    ],
  },
  {
    name: "about",
    components: [
      {
        name: "about-1",
        comp: About1,
        export_path: ["src/app/components/about/variant-1.jsx"],
      },
    ],
  },
  {
    name: "section",
    components: [
      {
        name: "section-1",
        comp: Section1,
        export_path: ["src/app/components/section/variant-1.jsx"],
      },
    ],
  },
  {
    name: "animatedcard",
    components: [
      {
        name: "animatedcard-1",
        comp: Animated1,
        export_path: ["src/app/components/animatedcard/variant-1.jsx"],
      },
    ],
  },
  {
    name: "chatbot",
    type: "page",
    path: ["@/app/ai/chatbot/page"],
    components: [
      {
        name: "chatbot-1",
        comp: ChatBot1,
        export_path: ["src/app/ai"],
      },
    ],
    lib: [{ title: "Vercel AI", link: "https://sdk.vercel.ai/docs/" }],
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

export const INTEGRATIONS = [
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
  {
    item_id: "lemon_squeezy",
    selected: false,
    title: "Lemon Squeezy Webhooks",
  },
  {
    item_id: "stripe_custom_checkout",
    selected: false,
    title: "Stripe Payment Page + Webhook",
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
