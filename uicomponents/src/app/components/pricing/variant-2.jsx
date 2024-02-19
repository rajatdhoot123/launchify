import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <header className="text-center mb-16">
        <h1 className="text-5xl mb-4">Our Plans</h1>
        <p className="leading-normal text-grey-dark md:w-1/2 md:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          aperiam, repellat expedita velit incidunt laborum consequuntur iure
          quisquam blanditiis. Voluptate.
        </p>
      </header>

      <div className="lg:flex lg:items-center lg:-mx-2">
        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
          <div className="text-center border border-grey-light p-10 rounded">
            <h2 className="text-lg mb-4">Small</h2>
            <div className="mb-6">
              <span className="block text-5xl pb-2">$22</span>
              <span className="text-sm text-grey">Monthly</span>
            </div>
            <ul className="text-grey leading-loose list-reset mb-6">
              <li>1 core</li>
              <li>1GB RAM</li>
              <li>5GB Storage</li>
              <li>2 Containers</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>

        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
          <div className="text-center border border-grey-light p-10 rounded">
            <h2 className="text-lg mb-4">Medium</h2>
            <div className="mb-6">
              <span className="block text-5xl pb-2">$49</span>
              <span className="text-sm text-grey">Monthly</span>
            </div>
            <ul className="text-grey-dark leading-loose list-reset mb-6">
              <li>2 core</li>
              <li>2GB RAM</li>
              <li>20GB Storage</li>
              <li>20 Containers</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>

        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
          <div className="text-center border border-grey-light p-10 rounded">
            <h2 className="text-lg mb-4">Large</h2>
            <div className="mb-6">
              <span className="block text-5xl pb-2">$79</span>
              <span className="text-sm text-grey">Monthly</span>
            </div>
            <ul className="text-grey leading-loose list-reset mb-6">
              <li>4 core</li>
              <li>4GB RAM</li>
              <li>40GB Storage</li>
              <li>40 Containers</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
