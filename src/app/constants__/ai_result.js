const all_copy_writing = [
  {
    name: "src/app/components/navbar/varient-3.jsx",
    data: {
      id: "chatcmpl-8XP0aUAmPJIPNGLkeTKz718pHjmVF",
      object: "chat.completion",
      created: 1702971648,
      model: "gpt-4-1106-preview",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              '"use client";\nimport React, { useState } from "react";\n\nconst Navbar = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <nav className="container flex md:hidden mx-auto items-center justify-between p-5">\n        <div className="flex items-center">\n          <button\n            onClick={() => setIsOpen((prev) => !prev)}\n            className="pointer-cursor md:hidden block lg:hidden mr-5"\n          >\n            <svg\n              className="fill-current text-gray-900"\n              xmlns="http://www.w3.org/2000/svg"\n              width="20"\n              height="20"\n              viewBox="0 0 20 20"\n            >\n              <title>menu</title>\n              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>\n            </svg>\n          </button>\n          <a\n            href="/"\n            className="flex items-center hover:scale-125 transition duration-150 ease-in"\n          >\n            <div className="flex-shrink-0">\n              <div className="text-xl font-bold">Fashion Hub</div>\n            </div>\n          </a>\n        </div>\n        <button className="p-2 rounded-lg font-bold text-xl">Shop Now</button>\n      </nav>\n      <nav className="hidden md:flex items-center text-white justify-between p-2 px-5 shadow-md">\n        <a\n          href="/"\n          className="flex items-center hover:scale-125 transition duration-150 ease-in text-black text-xl font-bold"\n        >\n          Fashion Hub\n        </a>\n        <div\n          className="hidden peer-checked:block md:flex md:items-center md:w-auto w-full"\n          id="menu"\n        >\n          <nav>\n            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">\n              <li>\n                <a className="md:p-4 py-3 px-0 block" href="#">\n                  New Arrivals\n                </a>\n              </li>\n              <li>\n                <a className="md:p-4 py-3 px-0 block" href="#">\n                  Best Sellers\n                </a>\n              </li>\n              <li>\n                <a className="md:p-4 py-3 px-0 block" href="#">\n                  Deals & Offers\n                </a>\n              </li>\n              <li>\n                <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">\n                  Clearance\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n        <button className="p-2 rounded-lg text-black font-bold">My Cart</button>\n      </nav>\n      <div\n        className={`z-20 md:hidden fixed inset-0 bg-white w-full md:w-96 transform transition-all ease-in-out duration-500 ${\n          isOpen ? "translate-x-0" : "-translate-x-full"\n        }`}\n      >\n        <div>\n          <div className="w-full justify-between flex items-center p-5">\n            <a\n              href="/"\n              className="flex items-center hover:scale-125 transition duration-150 ease-in text-black text-xl font-bold"\n            >\n              Fashion Hub\n            </a>\n            <button onClick={() => setIsOpen((prev) => !prev)}>\n              <strong className="text-[28px] align-center cursor-pointer alert-del">\n                &times;\n              </strong>\n            </button>\n          </div>\n          <div className="px-5">\n            <div\n              className=" peer-checked:block md:flex md:items-center md:w-auto w-full"\n              id="menu"\n            >\n              <nav>\n                <ul className="items-center justify-between text-base text-gray-700">\n                  <li>\n                    <a className="md:p-4 py-3 px-0 block" href="#">\n                      Our Story\n                    </a>\n                  </li>\n                  <li>\n                    <a className="md:p-4 py-3 px-0 block" href="#">\n                      Exclusive Collections\n                    </a>\n                  </li>\n                  <li>\n                    <a className="md:p-4 py-3 px-0 block" href="#">\n                      Style Insights\n                    </a>\n                  </li>\n                  <li>\n                    <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">\n                      Get in Touch\n                    </a>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default Navbar;',
          },
          logprobs: null,
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 1144,
        completion_tokens: 1015,
        total_tokens: 2159,
      },
      system_fingerprint: "fp_3905aa4f79",
    },
  },
  {
    name: "src/app/components/hero/varient-1.jsx",
    data: {
      id: "chatcmpl-8XP0ZSln4KUoSNS73UhkNsxaf3Xji",
      object: "chat.completion",
      created: 1702971647,
      model: "gpt-4-1106-preview",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              '```jsx\nimport Link from "next/link";\n\nexport default function Hero() {\n  return (\n    <>\n      <section className="container mx-auto flex items-center justify-center bg-white">\n        <div className="mx-auto max-w-[43rem]">\n          <div className="text-center">\n            <p className="text-lg font-medium leading-8 text-indigo-600/95">\n              New Season Arrivals\n            </p>\n            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">\n              Discover Fashion Trends &amp; Styles\n            </h1>\n            <p className="mt-3 text-lg leading-relaxed text-slate-400">\n              Explore our latest collection and elevate your wardrobe with our premium selection of clothing. Embrace your personal style with us.\n            </p>\n          </div>\n\n          <div className="mt-6 flex items-center justify-center gap-4">\n            <Link\n              href="/shop-now"\n              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"\n            >\n              Shop Now\n            </Link>\n            <a\n              href="/about-us"\n              className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"\n            >\n              Learn More\n            </a>\n          </div>\n        </div>\n      </section>\n    </>\n  );\n}\n```',
          },
          logprobs: null,
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 460,
        completion_tokens: 326,
        total_tokens: 786,
      },
      system_fingerprint: "fp_3905aa4f79",
    },
  },
  {
    name: "src/app/components/pricing/varient-4.jsx",
    data: {
      id: "chatcmpl-8XP0aCLycdJc6bxhokwGm8N0ZGILl",
      object: "chat.completion",
      created: 1702971648,
      model: "gpt-4-1106-preview",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              'const Pricing = () => {\n  return (\n    <div className="container p-5 w-full mx-auto">\n      <div className="grid grid-cols-3 mt-5 gap-6">\n        <div>\n          <div className="border h-full rounded-md">\n            <div className="text-2xl pt-4 pb-3 px-4 space-y-4 py-5">\n              <h5>Try Before You Buy</h5>\n              <h3 className="font-bold">FREE</h3>\n              <div>\n                <a\n                  href="#"\n                  className="border border-gray-500 text-sm p-2 rounded-md"\n                >\n                  Explore for Free\n                </a>\n              </div>\n            </div>\n            <hr className="horizontal dark my-5" />\n            <div className="">\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Basic Feature Access</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Limited Product Previews</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i className="fas fa-minus text-sm" aria-hidden="true"></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Premium Fabric Options</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i className="fas fa-minus text-sm" aria-hidden="true"></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Custom Tailoring</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i className="fas fa-minus text-sm" aria-hidden="true"></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Exclusive Discounts</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i className="fas fa-minus text-sm" aria-hidden="true"></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Priority Customer Support</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i className="fas fa-minus text-sm" aria-hidden="true"></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Free Shipping</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <div className="border h-full rounded-md">\n            <div className="text-2xl pt-4 pb-3 px-4 space-y-4 py-5">\n              <h5>Essential Wardrobe</h5>\n              <h3 className="font-bold">\n                <small className="text-secondary font-weight-bold">\n                  <strike>$239</strike>\n                </small>\n                <span className="text-danger">$49</span>{" "}\n                <small className="text-sm text-secondary font-weight-bold">\n                  / year\n                </small>\n              </h3>\n              <div>\n                <a\n                  href="#"\n                  className="border border-gray-500 text-sm p-2 rounded-md"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n\n            <hr className="horizontal dark my-5" />\n            <div className="">\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Complete Catalog Access</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Early Sale Access</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Standard Fabric Selection</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Custom Size Profiles</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Member-Only Discounts</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i className="fas fa-minus text-sm" aria-hidden="true"></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Priority Customer Support</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i className="fas fa-minus text-sm" aria-hidden="true"></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Free Shipping</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <div className="border h-full rounded-md">\n            <div className="text-2xl pt-4 pb-3 px-4 space-y-4 py-5">\n              <h5>Exclusive Collection</h5>\n              <h3 className="font-bold">\n                <small className="text-secondary font-weight-bold">\n                  <strike>$479</strike>\n                </small>\n                <span className="text-danger">$199</span>{" "}\n                <small className="text-sm text-secondary font-weight-bold">\n                  / year\n                </small>\n              </h3>\n              <div>\n                <a\n                  href="#"\n                  className="border border-gray-500 text-sm p-2 rounded-md"\n                >\n                  Upgrade Now\n                </a>\n              </div>\n            </div>\n\n            <hr className="horizontal dark my-5" />\n\n            <div className="">\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">All Essential Benefits</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Premium Fabric Collection</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Personal Stylist Consultations</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Exclusive Event Invitations</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Complimentary Alterations</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Priority Customer Support</span>\n                </div>\n              </div>\n              <div className="flex pb-3">\n                <div>\n                  <i\n                    className="fas fa-check text-success text-sm"\n                    aria-hidden="true"\n                  ></i>\n                </div>\n                <div className="ps-3">\n                  <span className="text-sm">Free Shipping on All Orders</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default Pricing;',
          },
          logprobs: null,
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 2262,
        completion_tokens: 2108,
        total_tokens: 4370,
      },
      system_fingerprint: "fp_3905aa4f79",
    },
  },
  {
    name: "src/app/components/login/varient-2.jsx",
    data: {
      id: "chatcmpl-8XP0a5O41bSvhDRopQOIdrR86k4od",
      object: "chat.completion",
      created: 1702971648,
      model: "gpt-4-1106-preview",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              'const Login = () => {\n  return (\n    <div\n      className="w-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-200 container mx-auto p-5 rounded-lg"\n      data-id="1"\n    >\n      <div\n        className="bg-white shadow-md max-w-md w-full overflow-hidden relative p-12 rounded-md"\n        data-id="2"\n      >\n        <h1 className="text-2xl font-bold text-center mb-5" data-id="4">\n          Welcome Back, Fashionista!\n        </h1>\n        <button\n          className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full py-2 mb-4 flex items-center justify-center"\n          data-id="5"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            stroke="currentColor"\n            strokeWidth="2"\n            strokeLinecap="round"\n            strokeLinejoin="round"\n            className=" mr-2 text-red-500 h-5 w-5"\n            data-id="6"\n          >\n            <rect width="20" height="16" x="2" y="4" rx="2"></rect>\n            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>\n          </svg>\n          Sign in with Google\n        </button>\n        <div\n          className="border-b border-gray-200 dark:border-gray-600 my-4"\n          data-id="7"\n        ></div>\n        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400" data-id="8">\n          Or sign in instantly with a secure magic link\n        </p>\n        <div className="mb-4" data-id="9">\n          <label\n            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"\n            htmlFor="email"\n            data-id="10"\n          >\n            Email Address\n          </label>\n          <input\n            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"\n            id="email"\n            placeholder="Enter your email"\n            required=""\n            data-id="11"\n            type="email"\n          />\n        </div>\n        <button\n          className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-foreground hover:bg-gray-100 h-10 px-4 py-2 w-full flex items-center justify-center border border-gray-300"\n          type="submit"\n          data-id="12"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            stroke="currentColor"\n            strokeWidth="2"\n            strokeLinecap="round"\n            strokeLinejoin="round"\n            className=" mr-2 text-blue-500 h-5 w-5"\n            data-id="13"\n          >\n            <rect width="20" height="16" x="2" y="4" rx="2"></rect>\n            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>\n          </svg>\n          Email Me a Magic Link\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Login;',
          },
          logprobs: null,
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 1050,
        completion_tokens: 926,
        total_tokens: 1976,
      },
      system_fingerprint: "fp_3905aa4f79",
    },
  },
  {
    name: "src/app/components/testimonials/varient-2.jsx",
    data: {
      id: "chatcmpl-8XP0aBLo1Fpn0ebFbvPPIro2Lg7DI",
      object: "chat.completion",
      created: 1702971648,
      model: "gpt-4-1106-preview",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              'const Testinomials = () => {\n  return (\n    <section className="px-5 md:px-0 container mx-auto">\n      <div className="max-w-6xl mx-auto  md:px-16 xl:px-10">\n        <div className="flex flex-col items-center lg:flex-row lg:gap-8 gap-0">\n          <div className="flex flex-col items-center lg:items-start justify-center w-full h-full mb-10 lg:mb-0 lg:w-1/2">\n            <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">\n              Rave Reviews from Fashion Enthusiasts\n            </p>\n            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">\n              Happy Customers\n            </h2>\n            <p className="text-center lg:text-left my-6 text-lg text-gray-600">\n              Experience the joy of our satisfied shoppers. Dive into a sea of\n              positive feedback and stories of fashion triumphs.\n            </p>\n            <a\n              href="#_"\n              className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow focus:shadow-outline-indigo hover:bg-indigo-500 focus:outline-none focus:border-indigo-700  md:py-4 md:text-lg md:px-10"\n            >\n              Explore Customer Stories\n            </a>\n          </div>\n          <div className="w-full lg:w-1/2">\n            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">\n              <div className="flex flex-col w-9/12">\n                <div className="relative">\n                  <svg\n                    className="absolute -left-4 -top-4 w-10 h-10 text-indigo-500 fill-current"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 100 125"\n                  >\n                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>\n                  </svg>\n                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">\n                    The selection and quality of clothes are unparalleled. I\'ve never received so many compliments on my outfits until I started shopping here!\n                  </p>\n                </div>\n\n                <h3 className="mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">\n                  Jane Cooper\n                  <span className="whitespace-nowrap\tmt-1 text-sm leading-5 text-gray-500 truncate">\n                    - Fashion Blogger, Style by Jane\n                  </span>\n                </h3>\n              </div>\n              <img\n                className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"\n                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"\n                alt=""\n              />\n            </blockquote>\n            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">\n              <div className="flex flex-col w-9/12">\n                <div className="relative">\n                  <svg\n                    className="absolute -left-4 -top-4 w-10 h-10 text-indigo-500 fill-current"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 100 125"\n                  >\n                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>\n                  </svg>\n                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">\n                    The personalized shopping experience is fantastic! It\'s like having a stylist in your pocket.\n                  </p>\n                </div>\n                <h3 className="mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">\n                  John Doe\n                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">\n                    - Creative Director, Modern Wear Co.\n                  </span>\n                </h3>\n                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>\n              </div>\n              <img\n                className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"\n                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"\n                alt=""\n              />\n            </blockquote>\n            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">\n              <div className="flex flex-col w-9/12">\n                <div className="relative">\n                  <svg\n                    className="absolute -left-4 -top-4 w-10 h-10 text-indigo-500 fill-current"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 100 125"\n                  >\n                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>\n                  </svg>\n                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">\n                    The attention to detail in every garment is just incredible. I feel like each piece was made just for me!\n                  </p>\n                </div>\n\n                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">\n                  Emma Brown\n                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">\n                    - Wardrobe Consultant, The Vogue Room\n                  </span>\n                </h3>\n                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>\n              </div>\n              <img\n                className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"\n                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"\n                alt=""\n              />\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nexport default Testinomials;',
          },
          logprobs: null,
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 2424,
        completion_tokens: 2258,
        total_tokens: 4682,
      },
      system_fingerprint: "fp_3905aa4f79",
    },
  },
];