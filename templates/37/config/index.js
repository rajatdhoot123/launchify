import logo1 from '../assets/icons/hero/companies/logo-1.svg'
import logo2 from '../assets/icons/hero/companies/logo-2.svg'
import logo3 from '../assets/icons/hero/companies/logo-3.svg'
import logo4 from '../assets/icons/hero/companies/logo-4.svg'


// testimonials
import p1 from '../assets/images/testimonials/person-1.svg'
import p2 from '../assets/images/testimonials/person-2.svg'
import p3 from '../assets/images/testimonials/person-3.svg'

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

const heroCompanies = [
  logo1, logo2, logo3, logo4,
]

const purchases = [
  {
    id: 0,
    title: ["Crowd holding accepts a", "variety of payments"],
    metric: "998K",
  },
  {
    id: 1,
    title: ["Payments with us are", "easy yet secure"],
    metric: "89%",
  },
  {
    id: 2,
    title: ["We accept all major", "currencies and crypto"],
    metric: "2848+",
  },
];


const pricing = [
  {
    id: 0,
    tag: "Lite",
    cost: "7",
    tagline:
      "Just using this for yourself? Lite is the way to go for the lites platform.",
    buttonText: "Select lite",
    buttonLink: "",
    features: [
      "One person team",
      "Exports to files for easy client viewing",
      "2TB of data for your account",
    ],
  },
  {
    id: 1,
    tag: "Pro",
    cost: "19",
    tagline:
      "Just using this for yourself? Pro is the way to go for the pro platform.",
    buttonText: "Select pro",
    buttonLink: "",
    features: [
      "One person team",
      "Exports to files for easy client viewing",
      "2TB of data for your account",
    ],
    variant: "dark" 
  },
  {
    id: 2,
    tag: "Team",
    cost: "19",
    tagline:
      "Just using this for yourself? Lite is the way to go for the lites platform.",
    buttonText: "Select team",
    buttonLink: "",
    features: [
      "One person team",
      "Exports to files for easy client viewing",
      "2TB of data for your account",
    ],
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Company",
    link: "/",
    otherLinks: [
      {
        id: 1,
        title: "About us",
        link: "/",
      },
      {
        id: 2,
        title: "Careers",
        link: "/",
      },
      {
        id: 3,
        title: "Contact",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Product",
    link: "/",
    otherLinks: [
      {
        id: 1,
        title: "Features",
        link: "/",
      },
      {
        id: 2,
        title: "Pricing",
        link: "/",
      },
      {
        id: 3,
        title: "Login",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Resources",
    link: "/",
    otherLinks: [
      {
        id: 1,
        title: "Help",
        link: "/",
      },
      {
        id: 2,
        title: "Blog",
        link: "/",
      },
      {
        id: 3,
        title: "Status",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Press",
    link: "/",
    otherLinks: [
      {
        id: 1,
        title: "News letters",
        link: "/",
      },
      {
        id: 2,
        title: "Careers",
        link: "/",
      },
      {
        id: 3,
        title: "More",
        link: "/",
      },
    ],
  }
];


const testimonials = [
  {
    id: 0,
    author: "Bessie Cooper",
    role: "Manager @ glue",
    message:
      "Buyer buzz partner network disruptive non-disclosure agreement business",
    profile: p1,
  },
  {
    id: 1,
    author: "Savannah Nguyen",
    role: "Director @ Google.",
    message:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    profile: p2,
  },
  {
    id: 2,
    message:
      "Release facebook responsive web design business model canvas seed money monetization.",
    role: "Team Leader @ Logitech",
    author: "Robert Fox",
    profile: p3,
  },
  {
    id: 3,
    author: "Devon Lane",
    role: "Team Leader @ Gryffindor",
    message:
      "Release facebook responsive web design business model canvas seed money monetization.",
    profile: p3,
  },
];


export default {
    navLinks,
    heroCompanies,
    purchases,
    pricing,
    footerLinks,
    testimonials,
}