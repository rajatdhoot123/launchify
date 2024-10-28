export const CREATE_FILE_NOT_PRESENT = [
  {
    path: ".env.example",
    content: `
  #Google Analytics
  NEXT_PUBLIC_GOOGLE_ANALYTICS=
  
  # Next Auth Environment Variables
  NEXTAUTH_SECRET=
  NEXTAUTH_URL=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  DATABASE_URL=
  
  # For magic links
  EMAIL_FROM=
  EMAIL_SERVER_USER=
  EMAIL_SERVER_PASSWORD=
  EMAIL_SERVER_HOST=
  EMAIL_SERVER_PORT=
  
  #Lemon Squeezy Webhook Secret
  LEMON_SQUEEZY_WEBHOOK_SECRET=
  
  OPEN_AI_KEY=
`,
  },
  {
    path: ".eslintrc.json",
    content: `
{
  "extends": "next/core-web-vitals",
  "rules": { "react/no-unescaped-entities": 0 }
} 
`,
  },
  {
    path: ".gitignore",
    content: `

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts


drizzle 

  `,
  },
];

export const NECESSARY_FILES = [
  "tailwind.config.js",
  "postcss.config.js",
  "tsconfig.json",
  "next.config.mjs",
  "src/lib/utils.js",
];

export const SHADCN_UI_FILE = ["components.json"];
export const SHADCN_UI_FOLDER = ["src/components/ui"];

export const NECESSARY_FOLDERS = ["public", "src/app/styles"];

export const DATABASE_FILES = [
  "src/lib/database/db.js",
  "src/lib/database/schema.js",
  "drizzle.config.js",
];

export const NEXT_AUTH_FILES = [
  "src/app/auth/EmailSignIn.js",
  "src/app/auth/GoogleSignIn.js",
  "src/app/auth/authenticated/page.js",
  "src/app/auth/signin/page.js",
  "src/app/nextauth/provider.js",
  "src/app/api/auth/[...nextauth]/route.ts",
  "src/app/api/auth/[...nextauth]/authOptions.ts",
];

export const LEMON_SQUEEZY_FILES = [
  "src/app/api/lemon-squeezy/webhook/route.ts",
];

export const SUPPORT_PAGES = [
  "src/app/(markdown)/terms-condition/page.mdx",
  "src/app/(markdown)/privacy-policy/page.mdx",
];

export const STRIPE_HOSTED_EMBEDDED_PAGE = [
  "src/app/api/stripe/webhook/route.ts",
  "src/app/actions/stripe/index.ts",
  "src/app/components/stripe/CheckoutForm.jsx",
  "src/app/components/stripe/contant.ts",
  "src/app/stripe-with-checkout/page.jsx",
  "src/app/utils/stripe/index.ts",
  "src/lib/stripe/client.ts",
  "src/lib/stripe/server.ts",
];

export const MARKDOWN_PAGES = [
  "src/markdown.css",
  "src/mdx-components.tsx",
  "src/app/(markdown)/layout.jsx",
];

export const AI_FILES = ["src/app/ai"];

export const SITE_MAP_FILES = ["next-sitemap.config.js"];

export const WEBSITES_TEMPLATES = [
  {
    id: 1,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Yagyesh",
    link: "/1",
    image: ["/images/yagyesh/1-a.png", "/images/yagyesh/1-b.png"],
  },
  {
    id: 5,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Yagyesh",
    link: "/5",
    dependencies: {
      "framer-motion": "^11.0.25",
    },
    image: ["/images/yagyesh/2-a.png", "/images/yagyesh/2-b.png"],
  },
  {
    id: 7,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Jayesh",
    link: "/7",
    image: ["/images/jayesh/2-a.png", "/images/jayesh/2-b.png"],
  },
  {
    id: 23,
    isOpenSource: false,
    isPaid: false,
    type: "Landing Page",
    author: "Jayesh",
    link: "/23",
    dependencies: {
      "react-icons": "^5.0.1",
    },
    image: ["/images/23/a.png", "/images/23/b.png"],
  },
  {
    id: 24,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Jayesh",
    link: "/24",
    dependencies: {
      "react-icons": "^5.0.1",
    },
    image: ["/images/24/a.png", "/images/24/b.png"],
  },
  {
    id: 28,
    isOpenSource: false,
    isPaid: false,
    type: "Landing Page",
    author: "Yagyesh",
    link: "/28",
    dependencies: {
      "react-icons": "^5.0.1",
    },
    image: ["/images/28/a.png", "/images/28/b.png"],
  },
  {
    id: 29,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Mayur",
    link: "/29",
    image: ["/images/29/a.png", "/images/29/b.png"],
  },
  {
    id: 31,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Jayesh",
    link: "/31",
    dependencies: {
      "react-icons": "^5.0.1",
    },
    image: ["/images/31/a.png", "/images/31/b.png"],
  },
  {
    id: 33,
    isOpenSource: false,
    isPaid: false,
    type: "Landing Page",
    author: "Mayur",
    link: "/33",
    image: ["/images/33/a.png", "/images/33/b.png"],
  },
  {
    id: 35,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Mayur",
    link: "/35",
    image: ["/images/35/a.png", "/images/35/b.png"],
  },
  {
    id: 38,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Mayur",
    link: "/38",
    image: ["/images/mayur/2-a.png", "/images/mayur/2-b.png"],
  },
  {
    id: 44,
    isOpenSource: false,
    isPaid: false,
    type: "Landing Page",
    author: "Mayur",
    link: "/44",
    dependencies: {
      "react-icons": "^5.0.1",
    },
    image: ["/images/44/a.png", "/images/44/b.png"],
  },
  {
    id: 46,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Mayur",
    link: "/46",
    dependencies: {
      "react-icons": "^5.0.1",
    },
    image: ["/images/46/a.png", "/images/46/b.png"],
  },
  {
    id: 47,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Mayur",
    link: "/47",
    image: ["/images/47/a.png", "/images/47/b.png"],
  },
  {
    id: 50,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Yagyesh",
    link: "/50",
    dependencies: {
      "react-slick": "^0.30.2",
      "slick-carousel": "^1.8.1",
    },
    image: ["/images/yagyesh/3-a.png", "/images/yagyesh/3-b.png"],
  },
  {
    id: 51,
    isOpenSource: false,
    isPaid: true,
    dependencies: {
      "framer-motion": "^11.0.25",
      "react-slick": "^0.30.2",
      "slick-carousel": "^1.8.1",
    },
    type: "Portfolio",
    author: "Jayesh",
    link: "/51",
    image: ["/images/jayesh/1-a.png", "/images/jayesh/1-b.png"],
  },
  {
    id: 51,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Yagyesh",
    link: "/37",
    dependencies: {
      "react-slick": "^0.30.2",
      "slick-carousel": "^1.8.1",
    },
    image: ["/images/yagyesh/4-a.png", "/images/yagyesh/4-b.png"],
  },
  {
    id: 52,
    isOpenSource: false,
    isPaid: false,
    type: "Landing Page",
    author: "Mayur",
    link: "/52",
    image: ["/images/mayur/1-a.png", "/images/mayur/1-b.png"],
  },
  {
    id: 53,
    isOpenSource: false,
    isPaid: true,
    type: "Landing Page",
    author: "Rajat",
    link: "/53",
    image: ["/images/53/a.png", "/images/53/b.png"],
  },
  {
    id: 54,
    isPaid: false,
    isOpenSource: true,
    dependencies: {
      "react-icons": "^5.0.1",
      "framer-motion": "^11.0.25",
      "@react-email/components": "^0.0.17",
      "@react-email/tailwind": "^0.0.16",
      clsx: "^2.1.1",
      "react-hot-toast": "^2.4.1",
      "react-vertical-timeline-component": "^3.6.0",
      resend: "^3.2.0",
    },
    type: "Landing Page",
    author: "ByteGrad",
    link: "/54",
    github: ["https://github.com/ByteGrad/portfolio-website"],
    image: ["/images/54/a.png", "/images/54/b.png"],
  },
];
