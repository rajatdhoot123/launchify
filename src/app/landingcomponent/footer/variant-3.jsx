import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PRODUCTS = [
  {
    title: "Web Apps",
    list: [
      {
        title: "Launchify",
        link: "https:// www.launchify.club?utm_soruce=launchify",
      },
      { title: "VA360", link: "https://www.va360.club?utm_soruce=launchify" },
    ],
  },
  {
    title: "Extensions",
    list: [
      {
        title: "Screenshot to Code",
        link: "https://chromewebstore.google.com/detail/screenshot-to-code/hjbpcilippgfjenlgigmpgfmookfohag?utm_soruce=launchify",
      },
      {
        title: "Launchify",
        link: "https://chromewebstore.google.com/detail/launchify/peflongejpeiohocbimfcedepdphkohk?utm_soruce=launchify",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2">
        <div className="py-8 border-b border-gray-100 lg:order-last lg:border-b-0 lg:border-l lg:py-16 lg:pl-16">
          <div className="block text-primary lg:hidden">
            <div className="flex items-center">
              <img src="/logo.png" className="h-12 w-12" />
              <div className="text-2xl ml-2">Launchify</div>
            </div>
          </div>

          <div className="mt-8 space-y-4 lg:mt-0">
            <span className="hidden w-10 h-1 text-primary/70 rounded lg:block"></span>

            <div>
              <h2 className="text-2xl font-medium ">Connet with us</h2>

              {/* <p className="max-w-lg mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, harum deserunt nesciunt praesentium, repellendus eum
                perspiciatis ratione pariatur a aperiam eius numquam doloribus
                asperiores sunt.
              </p> */}
            </div>

            <div>
              <a href="mailto:hello@kwiktwik.com">hello@kwiktwik.com</a>
            </div>
            {/* <form className="w-full mt-6">
              <label htmlFor="UserEmail" className="sr-only">
                {" "}
                Email{" "}
              </label>

              <div className="rounded-md sm:flex sm:items-center sm:gap-4">
                <Input
                  type="email"
                  id="UserEmail"
                  placeholder="john@rhcp.com"
                />

                <Button>Sign Up</Button>
              </div>
            </form> */}
          </div>
        </div>

        <div className="py-8 lg:py-16 lg:pr-16">
          <div className="hidden text-primary lg:block">
            <div className="flex items-center">
              <img src="/logo.png" className="h-12 w-12" />
              <div className="text-2xl ml-2">Launchify</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
            <div>
              <p className="font-medium ">Products</p>

              {PRODUCTS.map((product) => (
                <nav
                  key={product.title}
                  aria-label={product.title}
                  className="mt-2"
                >
                  <div className="font-semibold">{product.title}</div>
                  <ul className="space-y-2 text-sm">
                    {product.list.map((product) => (
                      <li key={product.link}>
                        <a
                          target="_blank"
                          href={product.link}
                          className="transition hover:opacity-75"
                        >
                          {product.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
            {/* 
            <div>
              <p className="font-medium ">Company</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="  transition hover:opacity-75">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  transition hover:opacity-75">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}

            <div>
              <p className="font-medium ">Helpful Links</p>

              <nav aria-label="Footer Navigation - Company" className="mt-2">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="mailto:hello@kwiktwik.com"
                      className="  transition hover:opacity-75"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a href="/#faqs" className="  transition hover:opacity-75">
                      FAQs
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-100">
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    target="_blank"
                    href="https://www.kwiktwik.com/terms-and-condition"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://www.kwiktwik.com/privacy-policy"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>

            <p className="mt-8 text-xs text-gray-500">
              © 2024. Kwiktwik. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
