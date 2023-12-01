const Button = () => <button>Button</button>;

export default function Pricing() {
  return (
    <section>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Starter Pack</h3>
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$29</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  High-Quality 720p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  2GB of Secure Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Access to Basic Video Templates
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Most Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">
                Professional Suite
              </h3>
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$59</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Full HD 1080p Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  10GB of Expansive Cloud Storage
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Exclusive Premium Video Templates
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Team Collaboration Tools
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="text-white bg-purple-600 hover:bg-purple-800 font-bold py-2 px-4 rounded">
                Upgrade Now
              </button>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">
                Enterprise Solution
              </h3>
              <div className="mt-4 text-center text-zinc-600">
                <span className="text-4xl font-bold">$99</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Ultra HD 4K Video Rendering
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Unlimited Cloud Storage Space
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Tailored Custom Video Templates
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Advanced Team Collaboration Tools
                </li>
                <li className="flex items-center">
                  <svg
                    className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  24/7 Dedicated Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="text-white bg-gray-800 hover:bg-gray-900 font-bold py-2 px-4 rounded">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
