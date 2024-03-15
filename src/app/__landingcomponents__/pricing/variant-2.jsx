import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-24" id="pricing">
      <header className="text-center mb-16">
        <h1 className="text-5xl mb-4">Simple Pricing, Powerful Results</h1>
        <p className="leading-normal text-grey-dark md:w-1/2 md:mx-auto">
          No hidden fees, just the features you need to skyrocket your success.
          Choose a plan that suits your ambitions and start making an impact
          today.
        </p>
      </header>

      <div className="lg:flex items-stretch lg:-mx-2">
        <div className="mb-4 lg:mb-0 lg:w-1/2 lg:px-2">
          <div className="text-center border border-pink-400 p-10 rounded h-full flex flex-col justify-between">
            <div>
              <h2 className="text-lg mb-4">Pro Builder</h2>
              <div className="mb-6">
                <span className="block text-5xl pb-2">
                  $57
                  <del className="ml-2 text-3xl">$156</del>
                </span>
                <span className="text-sm text-grey">Lifetime</span>
              </div>
              <ul className="text-grey-dark leading-loose list-reset mb-6">
                <li>
                  <a href="https://www.boilercode.app/">
                    {" "}
                    <u>NextJS Boilercode</u>{" "}
                  </a>
                </li>
                <li>Premium Components(React + Tailwind)</li>
                <li>No UiWidgets Branding</li>
              </ul>
            </div>
            <Button asChild>
              <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                Get started
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-4 lg:mb-0 lg:w-1/2 lg:px-2">
          <div className="text-center border border-grey-light p-10 rounded h-full flex flex-col justify-between">
            <div>
              <h2 className="text-lg mb-4">Ultimate Builder</h2>
              <div className="mb-6">
                <span className="block text-5xl pb-2">
                  $57
                  <del className="ml-2 text-3xl">$196</del>
                </span>
                <span className="text-sm text-grey">Lifetime</span>
              </div>
              <ul className="text-grey leading-loose list-reset mb-6">
                <li>Premium Components (React + Tailwind)</li>
                <li>
                  {" "}
                  <a href="https://www.boilercode.app/">
                    <u>NextJS Boilercode</u>
                  </a>{" "}
                  Lifetime Updates
                </li>
                <li>Discord & Email Support</li>
                <li>No UiWidgets Branding</li>
                <li>Minimum 25% off on all upcoming products</li>
              </ul>
            </div>
            <Button asChild>
              <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                Get started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
