import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="container px-4 md:px-6 mx-auto">
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
        <div className="flex flex-col p-6  shadow-lg rounded-lg justify-between border border-gray-300">
          <div>
            <h3 className="text-2xl font-bold text-center">Starter Pack</h3>
            <div className="mt-4 text-center ">
              <span className="text-4xl font-bold">$29</span>/ month
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
        <div className="relative flex flex-col p-6  shadow-lg rounded-lg justify-between border border-primary">
          <div className="px-3 py-1 text-sm text-primary bg-gradient-to-r from-primary to-secondary rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Most Popular
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center">
              Professional Suite
            </h3>
            <div className="mt-4 text-center ">
              <span className="text-4xl font-bold">$57</span>/ month
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg
                  className="text-secondary text-2xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
            <Button className="w-full">Upgrade Now</Button>
          </div>
        </div>
        <div className="flex flex-col p-6  shadow-lg rounded-lg justify-between border border-gray-300">
          <div>
            <h3 className="text-2xl font-bold text-center">
              Enterprise Solution
            </h3>
            <div className="mt-4 text-center ">
              <span className="text-4xl font-bold">$99</span>/ month
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
                  className="text-secondary text-xs bg-primary rounded-full mr-2 p-1"
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
            <Button className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
