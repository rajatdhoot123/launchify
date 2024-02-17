import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  height="12"
                  width="12"
                  className="h-6 w-auto sm:h-8"
                  src="/logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="z-10 relative md:hidden">
              <Drawer>
                <DrawerTrigger>
                  <HamburgerMenuIcon />
                </DrawerTrigger>
                <DrawerContent>
                  <nav className="grid gap-y-8 p-5">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Analytics
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Engagement
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Security
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Integrations
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Automations
                      </span>
                    </a>
                  </nav>
                  {/* <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter> */}
                </DrawerContent>
              </Drawer>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}

                <DropdownMenu width={30} className="min-[400px]">
                  <DropdownMenuTrigger asChild>
                    <Button variant="link">Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/chart-bar */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Analytics
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get a better understanding of where your traffic
                              is coming from.
                            </p>
                          </div>
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem>
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/cursor-click */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Engagement
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Speak directly to your customers in a more
                              meaningful way.
                            </p>
                          </div>
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem>
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Your customers' data will be safe and secure.
                            </p>
                          </div>
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem>
                        <a
                          href="#"
                          className="p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Automations
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Build strategic funnels that will drive your
                              customers to convert
                            </p>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Button
                variant="link"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Button>
              <Button
                variant="link"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Docs
              </Button>
              <div className="relative">
                <DropdownMenu width={30} className="min-[400px]">
                  <DropdownMenuTrigger asChild>
                    <Button variant="link">More</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96">
                    <DropdownMenuItem>
                      <a
                        href="#"
                        className=" p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/support */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Help Center
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get all of your questions answered in our forums or
                            contact support.
                          </p>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                      <a
                        href="#"
                        className=" p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/bookmark-alt */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Guides
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn how to maximize our platform to get the most
                            out of it.
                          </p>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                      <a
                        href="#"
                        className=" p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/calendar */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Events
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            See what meet-ups and other events we might be
                            planning near you.
                          </p>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                      <a
                        href="#"
                        className=" p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/shield-check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Security
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Understand how we take your privacy seriously.
                          </p>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled> Recent Posts</DropdownMenuItem>
                    <DropdownMenuItem>
                      Boost your conversion rate
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      How to use search engine optimization to drive traffic to
                      your site
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      {" "}
                      Improve your customer experience
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button variant="ghost">Sign in</Button>
              <Button> Signup</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
