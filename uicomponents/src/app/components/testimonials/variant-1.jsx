import { Button } from "@/components/ui/button";

/* eslint-disable react/no-unescaped-entities */
const Testinomials = () => {
  return (
    <section className="px-5 md:px-0 container mx-auto">
      <div className="max-w-6xl mx-auto  md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row lg:gap-8 gap-0">
          <div className="flex flex-col items-center lg:items-start justify-center w-full h-full mb-10 lg:mb-0 lg:w-1/2">
            <p className="mb-2 text-base font-medium tracking-tight text-primary uppercase">
              Our customers love our product
            </p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              Testimonials
            </h2>
            <p className="text-center lg:text-left my-6 text-lg ">
              Don't just take our word for it, read from our extensive list of
              case studies and customer testimonials.
            </p>
            <Button>View Case Studies</Button>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-foreground rounded-lg shadow">
              <div className="flex flex-col w-9/12">
                <div className="relative">
                  <svg
                    className="absolute -left-4 -top-4 w-10 h-10 text-background fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                  <p className="mt-2 text-sm  sm:text-base lg:text-sm xl:text-base text-background">
                    This SaaS is a game-changer for our workflow. The landing
                    pages we've created are not just visually appealing but have
                    significantly boosted our conversion rates. The fact that
                    the support feels genuinely human and responsive makes all
                    the difference!
                  </p>
                </div>

                <h3 className="mt-3 text-sm font-medium leading-5  truncate sm:text-base lg:text-base text-background">
                  Jane Cooper
                  <span className="whitespace-nowrap	mt-1 text-sm leading-5 truncate text-background/70">
                    - Head of Operations, Synergy Solutions
                  </span>
                </h3>
              </div>
              <img
                className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-foreground rounded-lg shadow">
              <div className="flex flex-col w-9/12">
                <div className="relative">
                  <svg
                    className="absolute -left-4 -top-4 w-10 h-10 text-background fill-current "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                  <p className="mt-2 text-sm  sm:text-base lg:text-sm xl:text-base text-background">
                    I can't express enough, how amazing this service has been
                    for my company.
                  </p>
                </div>
                <h3 className="mt-3 text-sm font-medium leading-5  truncate sm:text-base lg:text-base text-background">
                  John Doe
                  <span className="mt-1 text-sm leading-5 text-background/70 truncate">
                    - Dynamic Product Labs
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-primary-foreground truncate"></p>
              </div>
              <img
                className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-foreground rounded-lg shadow">
              <div className="flex flex-col w-9/12">
                <div className="relative">
                  <svg
                    className="absolute -left-4 -top-4 w-10 h-10 text-background fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                  <p className="mt-2 text-sm  sm:text-base lg:text-sm xl:text-base text-background">
                    It's not just the features (which are awesome), but the way
                    the team provides support is outstanding
                  </p>
                </div>

                <h3 className="mt-3 text-sm font-medium leading-5  truncate sm:text-base lg:text-base text-background">
                  John Smith
                  <span className="mt-1 text-sm leading-5 text-background/70 truncate">
                    - Co-Founder, Nexus Innovations
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-primary-foreground/10 truncate"></p>
              </div>
              <img
                className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testinomials;
