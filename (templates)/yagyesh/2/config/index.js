import logo1 from "../assets/icons/hero/logo-1.svg";
import logo2 from "../assets/icons/hero/logo-2.svg";
import logo3 from "../assets/icons/hero/logo-3.svg";


const navLinks = [
  {
    id: 0,
    title: "Features",
    link: "/",
    type: 2, // 0 for internal link, 1 for external link, 2 for dropdown
  },
  {
    id: 1,
    title: "Resources",
    link: "/",
    type: 2, // 0 for internal link, 1 for external link, 2 for dropdown
  },
  {
    id: 2,
    title: "Company",
    link: "/",
    type: 2, // 0 for internal link, 1 for external link, 2 for dropdown
  },
  {
    id: 3,
    title: "Contact Sales",
    link: "/",
    type: 0, // 0 for internal link, 1 for external link, 2 for dropdown
  },
];

const featured = [
  {
    id: 1,
    name: "Fluid Glu",
    logo: logo1,
    type: 0,
  },
  {
    id: 2,
    name: "Hikenno",
    logo: logo2,
    type: 0,
  },
  {
    id: 3,
    name: "Bubble",
    logo: logo3,
    type: 0,
  },
  {
    id: 4,
    name: "Snitch",
    type: 1,
  },
];

const heroCardItems = [
  {
    amt: 99,
    title: "Monthly investments",
    variant: "dark",
  },
  {
    amt: 79,
    title: "Monthly investments",
    variant: "light",
  },
  {
    amt: 49,
    title: "Monthly investments",
    variant: "light",
  },
];


const cardFeatures = [
  {
    id: 1,
    name: "Access to 15+ libraries",
  },
  {
    id: 2,
    name: "1 user license",
  },
  {
    id: 3,
    name: "Figma Plugin",
  },
  {
    id: 4,
    name: "Free exclusives",
  },
  {
    id: 5,
    name: "Free exclusives",
  }
];

const footerLinks = [
  {
    id: 1,
    title: "About",
    link: "/",
    otherLinks: [
      {
        id: 1,
        title: "Contact",
        link: "/",
      },
      {
        id: 2,
        title: "Blog",
        link: "/",
      },
      {
        id: 3,
        title: "Story",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Contact",
    link: "/",
    otherLinks: [
      {
        id: 1,
        title: "Contact",
        link: "/",
      },
      {
        id: 2,
        title: "Blog",
        link: "/",
      },
      {
        id: 3,
        title: "Story",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Press",
    link: "/",
    otherLinks: [
      {
        id: 1,
        title: "Contact",
        link: "/",
      },
      {
        id: 2,
        title: "Blog",
        link: "/",
      },
      {
        id: 3,
        title: "Story",
        link: "/",
      },
    ],
  },
];
    
const faqs = [
  {
    id: 1,
    titles: "Can we visit apartment before i book?",
    details:
      "To cancel a booking request which has not yet been accepted by the advertiser, go to the top of your conversation with the advertiser and click 'Cancel request'. There is nothing more for you to do after this, as nothing can be charged until a request is accepted.If the booking was already completed and paid for, but you still want to cancel, check our cancellation policy or get in touch with our Customer Solutions team to discuss the situation",
  },
  {
    id: 1,
    titles:
      "Will the landlord be able to provide a certificate of residence?",
    details:
      "To cancel a booking request which has not yet been accepted by the advertiser, go to the top of your conversation with the advertiser and click 'Cancel request'. There is nothing more for you to do after this, as nothing can be charged until a request is accepted.If the booking was already completed and paid for, but you still want to cancel, check our cancellation policy or get in touch with our Customer Solutions team to discuss the situation",
  },
  {
    id: 1,
    titles: "What is included in the rent?",
    details:
      "To cancel a booking request which has not yet been accepted by the advertiser, go to the top of your conversation with the advertiser and click 'Cancel request'. There is nothing more for you to do after this, as nothing can be charged until a request is accepted.If the booking was already completed and paid for, but you still want to cancel, check our cancellation policy or get in touch with our Customer Solutions team to discuss the situation",
  },
  {
    id: 1,
    titles: "Can i cancel my booking",
    details:
      "To cancel a booking request which has not yet been accepted by the advertiser, go to the top of your conversation with the advertiser and click 'Cancel request'. There is nothing more for you to do after this, as nothing can be charged until a request is accepted.If the booking was already completed and paid for, but you still want to cancel, check our cancellation policy or get in touch with our Customer Solutions team to discuss the situation",
  },
  {
    id: 1,
    titles: "The landlord accepted my request, what now?",
    details:
      "To cancel a booking request which has not yet been accepted by the advertiser, go to the top of your conversation with the advertiser and click 'Cancel request'. There is nothing more for you to do after this, as nothing can be charged until a request is accepted.If the booking was already completed and paid for, but you still want to cancel, check our cancellation policy or get in touch with our Customer Solutions team to discuss the situation",
  },
];


export default {
  navLinks,
  heroCardItems,
  featured,
  cardFeatures,
  footerLinks,
  faqs,
};
