import sp1 from '../assets/images/strategy/profile/profile-1.svg'
import sp2 from '../assets/images/strategy/profile/profile-2.svg'
import sp3 from '../assets/images/strategy/profile/profile-3.svg'
import r1 from '../assets/images/strategy/rating/rating-1.svg'
import r2 from '../assets/images/strategy/rating/rating-2.svg'
import r3 from '../assets/images/strategy/rating/rating-3.svg'

// case study
import img1 from '../assets/images/casestudies/img-1.png'
import img2 from '../assets/images/casestudies/img-2.png'
import img3 from '../assets/images/casestudies/img-3.png'


// industries 
import indus1 from '../assets/images/industry/images/img-1.svg'
import indus2 from '../assets/images/industry/images/img-2.svg'
import indus3 from '../assets/images/industry/images/img-3.svg'
import indus4 from '../assets/images/industry/images/img-4.svg'
import indus5 from '../assets/images/industry/images/img-5.svg'
import indus6 from '../assets/images/industry/images/img-6.svg'
import indus7 from '../assets/images/industry/images/img-7.svg'
import indus8 from '../assets/images/industry/images/img-8.svg'
import indus9 from '../assets/images/industry/images/img-9.svg'

// footer flag
import flag from '../assets/icons/footer/flag.svg'


// paperwork
import logo1 from '../assets/images/paperwork/logo1.svg'
import logo2 from '../assets/images/paperwork/logo-2.svg'
import logo3 from '../assets/images/paperwork/logo-3.svg'
import logo4 from '../assets/images/paperwork/logo-4.svg'
import logo5 from '../assets/images/paperwork/logo-5.svg'
import logo6 from '../assets/images/paperwork/logo-6.svg'
import logo7 from '../assets/images/paperwork/logo-7.svg'
import logo8 from '../assets/images/paperwork/logo-8.svg'
import logo9 from '../assets/images/paperwork/logo-9.svg'
import logo10 from '../assets/images/paperwork/logo-10.svg'


// workforce
import workforce1 from '../assets/images/industry/workforce/logo-1.svg'
import workforce2 from '../assets/images/industry/workforce/logo-2.svg'
import workforce3 from '../assets/images/industry/workforce/logo-3.svg'
import workforce4 from '../assets/images/industry/workforce/logo-4.svg'

// fieldworkers
import field1 from '../assets/images/industry/fieldwork/logo-1.svg'
import field2 from '../assets/images/industry/fieldwork/logo-2.svg'
import field3 from '../assets/images/industry/fieldwork/logo-3.svg'
import field4 from '../assets/images/industry/fieldwork/logo-4.svg'


// automate
import auto1 from '../assets/images/industry/automate/logo-1.svg'
import auto2 from '../assets/images/industry/automate/logo-2.svg'
import auto3 from '../assets/images/industry/automate/logo-3.svg'
import auto4 from '../assets/images/industry/automate/logo-4.svg'


// connect
import cl1 from '../assets/icons/connect/logo-1.svg'
import cl2 from '../assets/icons/connect/logo-2.svg'
import cl3 from '../assets/icons/connect/logo-3.svg'
import cl4 from '../assets/icons/connect/logo-4.svg'
import cl5 from '../assets/icons/connect/logo-5.svg'
import cl6 from '../assets/icons/connect/logo-6.svg'
import cl7 from '../assets/icons/connect/logo-7.svg'
import cl8 from '../assets/icons/connect/logo-8.svg'


// keypoints
import kp1 from '../assets/icons/software/logo-1.png'
import kp2 from '../assets/icons/software/logo-2.png'
import kp3 from '../assets/icons/software/logo-3.png'
import kp4 from '../assets/icons/software/logo-4.png'

const navLinks = [
  {
    id: 0,
    title: "Features",
    link: "/",
    type: 2, // 0 for internal link, 1 for external link, 2 for dropdown
  },
  {
    id: 1,
    title: "Industries",
    link: "/",
    type: 2, // 0 for internal link, 1 for external link, 2 for dropdown
  },
  {
    id: 2,
    title: "Resources",
    link: "/",
    type: 2, // 0 for internal link, 1 for external link, 2 for dropdown
  },
  {
    id: 3,
    title: "Pricing",
    link: "/",
    type: 0, // 0 for internal link, 1 for external link, 2 for dropdown
  },
  {
    id: 4,
    title: "Login",
    link: "/",
    type: 0, // 0 for internal link, 1 for external link, 2 for dropdown
  },
];

const strategy = [
  {
    id: 1,
    title: "Streamline your work",
    desc: "Manage jobs, quotes, invoices, customers and schedules all within a single, affordable app. Basically, get more done with less effort!",
    bg: "bg-[#52C3BD]",
    testimonial: {
      author: "Michelle Avis ",
      role: "Drains ahead Ltd",
      message:
        "Having everything in a single system has changed the way we do business and saved so much time",
      rating: r1,
      profile: sp1,
    },
  },
  {
    id: 2,
    title: "Delight your customers",
    desc: "Provide an outstanding customer experience by keeping customers updated with the right information at the right time",
    bg: "bg-[#6460AA]",
    testimonial: {
      author: "Kris Gibson ",
      role: "Nu-life floor care Ltd",
      message:
        "Giving our customers access to the customer portal and regular status updates has been a massive help",
      rating: r2,
      profile: sp2,
    },
  },
  {
    id: 3,
    title: "Grow with confidence",
    desc: "Grow with an all-in-one tool that will help you win more business and get paid faster",
    bg: "bg-[#0089D1]",
    testimonial: {
      author: "Mike Philbin",
      role: "Nu-life floor care Ltd",
      message:
        "We know we have a system that can grow with us which gives us confidence to win more business",
      rating: r3,
      profile: sp3,
    },
  },
];

const caseStudy = [
  {
    title: "WH Armstrong Plumbing",
    desc: "WH Armstrong are a well respected Plumbing & Heating company who wanted to improve customer satisfaction and stay ahead of the competition",
    link: "/",
    img: img1,
  },
  {
    title: "Nu Life Floorcare",
    desc: "Nu-life Floorcare were looking for an all in one solution that helped manage fieldworkers, keep track of customer contracts and streamline processes",
    link: "/",
    img: img2,
  },
  {
    title: "Prymo Resurfacing",
    desc: "See how the team at Prymo streamlined the way they work with their team out in the field and saw a 20% reduction in job completion times",
    link: "/",
    img: img3,
  },
];

const industries = [
  {
    title: "Plumbing",
    img:indus1,
  },
  {
    title: "Electrical",
    img: indus4,
  },
  {
    title: "Pest Control",
    img: indus7,
  },
  {
    title: "Gardening",
    img: indus2,
  },
  {
    title: "HVAC",
    img: indus5,
  },
  {
    title: "Property Maintenance",
    img: indus6,
  },
  {
    title: "Locksmiths",
    img: indus3,
  },
  {
    title: "Facilities Management",
    img: indus8,
  },
  {
    title: "+15 more",
    img: indus9,
  },
]

const footerLinks = [
  {
    title: "Contact us",
    links: [
      { title: ["Contact us"], link: "/" },
      { title: ["Schedule A", "Product Demo"], link: "/" },
      { title: ["Start Free Trial"], link: "/" },
      { title: ["Call Sales"], link: "/" },
      { title: ["0208 064 4004"], link: "/", color: "text-orange", icon: flag },
    ],
  },
  {
    title: "Links",
    links: [
      { title: ["Workforce Blog"], link: "/" },
      { title: ["Privacy & Cookies"], link: "/" },
      { title: ["Terms of Service"], link: "/" },
      { title: ["Service level", ["agreement"]], link: "/" },
      { title: ["Download PDF", "Brochure"], link: "/" },
    ],
  },
  {
    // write title - TOP FEATURES
    // links Job Management, Customer Management,Fieldworker Management,Stock Management,Purchase Orders,Customer Portal
    title: "Top Features",
    links: [
      { title: ["Job Management"], link: "/" },
      { title: ["Customer", "Management"], link: "/" },
      { title: ["Fieldworker", "Management"], link: "/" },
      { title: ["Stock Management"], link: "/" },
      { title: ["Purchase Orders"], link: "/" },
      { title: ["Customer Portal"], link: "/" },
    ],
  },
  {
    // write titel: recent posts
    // links: How Will Brexit Affect the Service Industry in the UK?, The Top 5 Field Service Industry Trends for 2020, Rated People or MyBuilder; Which is the Best Choice for my Business?, The benefits of Xero cloud accounting software for trade and Field service businesses, Cloud accounting for tradesman
    title: "Recent Posts",
    links: [
      {
        title: ["How Will Brexit Affect", "the Service Industry in", "the UK?"],
        link: "/",
      },
      {
        title: ["The Top 5 Field Service", "Industry Trends for 2020"],
        link: "/",
      },
      {
        title: [
          "Rated People or",
          "MyBuilder; Which is the",
          "Best Choice for my",
          "Business?",
        ],
        link: "/",
      },
      {
        title: [
          "The benefits of Xero",
          "cloud accounting software",
          "for trade and Field",
          "service businesses",
        ],
        link: "/",
      },
      { title: ["Cloud accounting for", "tradesman"], link: "/" },
    ],
  },
];

const paperwork =[
  logo1, 
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
]


const workforce = [
  {
    title: "Real time",
    desc: "See on a map where your fieldworkers are in real time",
    icon: workforce1,
  },
  {
    title: "Drag and drop",
    desc: "Drag and drop schedule or reschedule jobs in seconds",
    icon: workforce2,
  },
  {
    title: "Create quotes",
    desc: "Create quotes, convert them into jobs and back again",
    icon: workforce3,
  },
  {
    title: "Work remotely",
    desc: "All you need is an internet connection and a comfy chair (not provided...)",
    icon: workforce4,
  },
];

const fieldWorkers = [
  {
    title: "Devices",
    desc: "Receive jobs and notifications on their mobile or tablet",
    icon: field1,
  },
  {
    title: "Progress",
    desc: "Update the progress of a job, which updates the office instantly",
    icon: field2,
  },
  {
    title: "Documents",
    desc: "Capture data, notes, customer signatures, PDF forms and images",
    icon: field3,
  },
  {
    title: "Work remotely",
    desc: "Track time & keep working on a job even if they have no internet connection",
    icon: field4,
  },
];

const automate = [
  {
    title: "Notifications",
    desc: "Send notifications to your team when a new job is scheduled",
    icon: auto1,
  },
  {
    title: "Job Reports",
    desc: "Send a job report to your customer when the job is done",
    icon: auto2,
  },
  {
    title: "Automated Emails",
    desc: "Let automated follow-up emails for overdue invoices or quotes do the chasing for you",
    icon: auto3,
  },
  {
    title: "Reminders",
    desc: "let customers know when something needs to be done using reminders",
    icon: auto4,
  },
];

const connect = [
  cl1, 
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
]

const keyPoints = [
  {
    title: "Remove Paperwork",
    desc: "Create jobs, quotes, invoices, purchase orders and forms electronically.",
    icon: kp1,
  },
  {
    title: "Schedule In Seconds",
    desc: "Get jobs to your team with a click of a button. They receive a notification of work and your customer doesn’t have to wait.",
    icon: kp2,
  },
  {
    title: "Stay In The Loop",
    desc: "Get vital data from your team. Photos, notes, customer signatures and forms keep you instantly updated.",
    icon: kp3,
  },
  {
    title: "Keep Customers Informed",
    desc: "Automated Messaging, a secure customer portal area, on my way tracking and completed job reports make great customer service effortless",
    icon: kp4,
  },
];


export default {
  navLinks,
  strategy,
  caseStudy,
  industries,
  footerLinks,
  paperwork,
  workforce,
  fieldWorkers,
  automate,
  connect,
  keyPoints
};

