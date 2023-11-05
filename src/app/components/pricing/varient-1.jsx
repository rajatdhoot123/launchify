const Pricing = () => (
  <div className="py-4 md:py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-medium">Pricing Plans</h1>
        <p className="text-xl text-gray-900 my-4">
          Start with <strong>FREE</strong> Trial. No credit card. Cancel
          anytime.
        </p>
        <p className="text-gray-600 xl:px-32">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          commodi consectetur consequatur distinctio, enim error eum impedit
          incidunt laboriosam, laudantium magnam, mollitia nemo non numquam
          officia officiis optio quaerat quasi qui reiciendis rem similique sint
          sit temporibus ullam voluptatem voluptates? Accusamus adipisci
          architecto hic molestias odit placeat quod quos recusandae.
        </p>
      </div>
      <div className="md:flex md:justify-center md:mt-12 md:pt-4 mt-6">
        <div className="text-center md:w-1/4">
          <input
            className="sr-only peer"
            type="radio"
            value="yes"
            name="answer"
            id="free"
          />
          <label
            className="block peer-checked:shadow-[0_-3px_0px_0px_rgba(90,103,216,1)]"
            htmlFor="free"
          >
            <div className=" border md:border-r-0 border-solid rounded md:rounded-r-none">
              <div className=" p-4 md:py-6 border-b border-solid">
                <h4 className="text-2xl md:text-3xl">Free</h4>
                <p className="text-gray-600 mb-4">Forever Free</p>
                <div className="text-4xl md:text-5xl leading-none">
                  <span className="text-sm align-top inline-block mt-2">$</span>
                  0
                </div>
                <button className="border-2 border-solid border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div>
                <ul>
                  <li className="text-gray-700 py-3">Feature 1</li>
                </ul>
              </div>
            </div>
          </label>
        </div>

        <div className="text-center md:w-1/4 mt-6 md:mt-0">
          <input
            className="sr-only peer"
            type="radio"
            value="no"
            name="answer"
            id="starter"
          />
          <label
            className="block peer-checked:shadow-[0_-3px_0px_0px_rgba(90,103,216,1)]"
            htmlFor="starter"
          >
            <div className=" border md:border-r-0 border-solid rounded md:rounded-r-none md:rounded-tl-none relative">
              <div className=" p-4 md:py-6 border-b border-solid">
                <h4 className="text-2xl md:text-3xl">Starter</h4>
                <p className="text-gray-600 mb-4">For Small Fishes</p>
                <div className="text-4xl md:text-5xl leading-none">
                  <span className="text-sm align-top inline-block mt-2">$</span>
                  19
                </div>
                <button className="border-2 border-solid border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div>
                <ul className="divide-y">
                  <li className="text-gray-700 py-3">Feature 1</li>
                  <li className="text-gray-700 py-3">Feature 2</li>
                  <li className="text-gray-700 py-3">Feature 3</li>
                </ul>
              </div>
            </div>
          </label>
        </div>

        <div className=" text-center md:w-1/4 mt-6 md:mt-0">
          <input
            className="sr-only peer"
            type="radio"
            value="maybe"
            name="answer"
            id="pro"
          />
          <label
            className="block peer-checked:shadow-[0_-3px_0px_0px_rgba(90,103,216,1)]"
            htmlFor="pro"
          >
            <div className=" border md:border-r-0 border-solid rounded md:rounded-r-none md:rounded-tl-none">
              <div className=" p-4 md:py-6 border-b border-solid">
                <h4 className="text-2xl md:text-3xl">Pro</h4>
                <p className="text-gray-600 mb-4">For Large Fishes</p>
                <div className="text-4xl md:text-5xl leading-none">
                  <span className="text-sm align-top inline-block mt-2">$</span>
                  29
                </div>
                <button className="border-2 border-solid border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div>
                <ul className="divide-y">
                  <li className="text-gray-700 py-3">Feature 1</li>
                  <li className="text-gray-700 py-3">Feature 2</li>
                  <li className="text-gray-700 py-3">Feature 3</li>
                  <li className="text-gray-700 py-3">Feature 4</li>
                </ul>
              </div>
            </div>
          </label>
        </div>

        <div className=" text-center md:w-1/4 mt-6 md:mt-0">
          <input
            className="sr-only peer"
            type="radio"
            value="maybe_new"
            name="answer"
            id="premium"
          />
          <label
            className="block peer-checked:shadow-[0_-3px_0px_0px_rgba(90,103,216,1)]"
            htmlFor="premium"
          >
            <div className=" border border-solid rounded md:rounded-tl-none">
              <div className=" p-4 md:py-6 border-b border-solid">
                <h4 className="text-2xl md:text-3xl">Premium</h4>
                <p className="text-gray-600 mb-4">For Whales</p>
                <div className="text-4xl md:text-5xl leading-none">
                  <span className="text-sm align-top inline-block mt-2">$</span>
                  39
                </div>
                <button className="border-2 border-solid border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div>
                <ul className="divide-y">
                  <li className="text-gray-700 py-3">Feature 1</li>
                  <li className="text-gray-700 py-3">Feature 2</li>
                  <li className="text-gray-700 py-3">Feature 3</li>
                  <li className="text-gray-700 py-3">Feature 4</li>
                  <li className="text-gray-700 py-3">Feature 5</li>
                </ul>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
