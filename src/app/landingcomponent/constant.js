export const COLORS = [
  { name: "Yello", hex: "#FAEA73" },
  { name: "Off White", hex: "#6D7D93" },
  { name: "Paste", hex: "#CCEFF6" },
  { name: "Deep Pink", hex: "#F7CEDC" },
  { name: "Light Green", hex: "#E6FFD7" },
];

export const TESTINOMIAL_COLORS = [
  { name: "Paste", hex: "#CCEFF6" },
  { name: "Deep Pink", hex: "#F7CEDC" },
  { name: "Yello", hex: "#FAEA73" },
  { name: "Light Green", hex: "#E6FFD7" },
];

export const EXTENSION_BUILD_FEATURE = [
  // {
  //   icons: ["/"],
  //   title: "Content script Sidebar",
  //   features: ["Build a sidebar to provide additional functionality"],
  // },
  {
    icons: ["/extension/popup.svg"],
    title: "Popup",
    features: [
      "Users can click on your extension to open a popup and interact with it.",
    ],
  },
  {
    icons: ["/extension/sidepanel.svg"],
    title: "Native side panel",
    features: [
      "Use chrome's native side panel to provide a custom functionality.",
    ],
  },
  {
    icons: ["/extension/content-script.svg"],
    title: "Inject content script to a web page",
    features: [
      "Inject content scripts and let your users interact with your extension within the parent web page.",
    ],
  },
];

export const BUILD_FEATURES = [
  {
    icons: ["/builder.png"],
    title: "Landing Page Builder",
    features: [
      "Drag & drop landing page builder with Ai copywriting support",
      "Ready to use templates &  dark mode support",
    ],
    time_saved: "Time saved: 8+ hours",
  },
  {
    icons: ["/drizzle.png"],
    title: "Database Drizzle ORM",
    features: [
      "Drizzle ORM Setup",
      "Connect to any database",
      "Authentication Schema",
    ],
    time_saved: "Time saved: 4+ hours",
  },
  {
    icons: ["/stripe.webp", "/lemonsqueezy.jpeg"],
    title: "Payment Gateway",
    features: [
      "Create checkout sessions (Stripe)",
      "Manage webhooks for subscriptions and one-time payments (Stripe & Lemonsqueezy)",
    ],
    time_saved: "Time saved: 2+ hours",
  },
  {
    icons: ["/next-auth.png"],
    title: "User Authentication",
    features: [
      "Enable authentication with Magic Link and Google Auth",
      "Integrate various authentication methods, including NextAuth",
    ],
    time_saved: "Time saved: 4+ hours",
  },
  {
    icons: ["/posthog.png", "/ga.png"],
    title: "Analytics",
    features: [
      "Integrate Google Analytics for tracking and analyzing data effectively.",
      "Posthog Analytics coming soon",
    ],
    time_saved: "Time saved: 1+ hours",
  },
  {
    icons: ["/crisp.jpeg"],
    title: "Customer Support",
    features: [
      "Integrate Crisp for efficient customer support",
      "More integrations for customer support coming soon",
    ],
    time_saved: "Time saved: 0.5+ hours",
  },
  {
    icons: ["/mdx.png"],
    title: "Blogs",
    features: [
      "Integrate MDx with customizable styling for blogs.",
      "Set up Notion to blog conversion upon request.",
    ],
    time_saved: "Time saved: 4+ hours",
  },
  {
    title: "Style",
    icons: ["/tailwind.svg"],
    features: [
      "Shadcn UI Components with Tailwind CSS Setup",
      "A Landing Page Builder",
      "Multi Theme Support",
      "Responsive Design",
    ],
    time_saved: "Time saved: 4+ hours",
  },
  {
    title: "Waitlist Page",
    icons: ["/loops.png"],
    features: ["Drag and drop waitlist page with loops email integration"],
    time_saved: "Time saved: 2+ hours",
  },
  {
    title: "Extra",
    features: [
      "AI Copy Writing",
      "Terms & Privacy Page",
      "Lots more feature comming soon",
    ],
    time_saved: "Time saved: 4+ hours",
  },
];

export const EXTENSION_FAQS = [
  {
    title: "What exactly do I get?",
    content:
      "You get access to a download codebase which contains the boilerplate code. There is code for content script side bar, native sidepanel, popup and injecting content script.",
  },
  {
    title: "Will I get support with chrome web store submissions?",
    content:
      "I will try my best to address any questions over meet or over email hello@kwiktwik.com",
  },
  {
    title: "Javascript or Typescript?",
    content: "Currently only Javascript is supported",
  },
  {
    title: "Can I get a refund?",
    content:
      "Once you gain access to the code, the code becomes yours indefinitely, making it non-refundable.",
  },
  {
    title: "Are updates included with the purchase?",
    content: "Yes, all future updates are included with your purchase.",
  },
];

export const FAQS = [
  {
    title: "What exactly do I get?",
    content:
      "The NextJS starter provides you with all the necessary boilerplate code to operate an online business, including payment systems, a database, login functionality, a blog, UI components, and more. The repo is available in Javascript, utilizing the Nextjs /app router.,",
  },
  {
    title: "Can I still use it if my tech stack is different?",
    content:
      "Absolutely, as long as you're comfortable with React & NextJS. The libraries are independent. You can opt for SendGrid over Mailgun, LemonSqueezy instead of Stripe, or Postgres instead of MongoDB, for instance.",
  },
  {
    title: "Is this a website template?",
    content:
      "It offers more than just a template. You can reuse sections to build your site quickly, such as a pricing section, an FAQ, or even an entire blog. It also includes UI components like buttons, modals, popovers, and more. Furthermore, the NextJS starter comes with essential tools for running an online business—payment processing, payment, SEO, etc., ",
  },
  {
    title: "Are there any additional costs?",
    content:
      "Numerous hosting platforms, like Vercel, allow you to host a project for free (front-end + back-end), and MongoDB/Supabase offer free tiers—enabling you to launch your first app for $0/month. If you use Magic Link sign-ups, you'll spend $1 per 1,000 users.,",
  },
  {
    title: "How often is the boilercode updated?",
    content:
      " We frequently update the boilerplate for all our projects, so it's updated regularly.,",
  },
  {
    title: "Can I get a refund?",
    content:
      "Once you gain access to the code, the code becomes yours indefinitely, making it non-refundable.",
  },
  {
    title: "Are updates included with the purchase?",
    content: "Yes, all future updates are included with your purchase.",
  },
];
