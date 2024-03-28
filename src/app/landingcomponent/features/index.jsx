import { TESTINOMIAL_COLORS } from "../constant";

const FEATURES = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    ),
    title: "Drag & Drop Builder",
    description:
      "🚀 Create a stunning landing page in minutes, not hours. Our AI-powered builder helps you craft a compelling message and choose the perfect integrations for your campaign.",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path>
      </svg>
    ),
    title: "Customize & Personalize",
    description:
      "🎨 Make your landing page stand out with our easy-to-use editor. Export code, customize to your heart's content, and add those final touches to make your project truly unique.",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
      </svg>
    ),
    title: "Production Ready",
    description:
      "🚀 Launch your campaign with confidence. Our platform ensures your landing page is optimized for conversion, loaded with the right integrations, and ready to drive revenue for your business.",
  },
];

const Features = () => {
  return (
    <div className="space-y-12">
      <div className="md:w-[550px] gap-12 flex flex-col items-center text-center mx-auto">
        <div className="md:text-4xl text-2xl font-semibold">
          Build your app instantly.launch faster, make 💸
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                TESTINOMIAL_COLORS[index % TESTINOMIAL_COLORS.length].hex,
            }}
            className=" p-5 rounded-md space-y-2"
          >
            <h2 className="text-lg font-semibold flex items-center">
              <span>{feature.icon}</span>
              <span className="ml-2">{feature.title}</span>
            </h2>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
