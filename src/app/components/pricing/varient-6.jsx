const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col container mx-auto items-center justify-center mt-32 pt-20 relative"
    >
      <div className="max-w-xl text-center">
        <div className="rounded-[40px] border uppercase backdrop-blur-sm text-xs text-primary font-medium md:mt-0 mb-4 py-2 px-4 border-primary/40 w-fit mx-auto text-center z-10">
          Pricing
        </div>
        <h2 className="text-3xl md:text-5xl font-medium md:leading-[64px] mt-6">
          Free until your first subscriber. Yep.
        </h2>
        <p className="mt-6 text-primary/80 text-base md:text-xl mb-10 max-w-xl">
          Breeew is the best option for your productized service. Whether you're
          testing your idea or scaling, we've got a plan for you.
        </p>
      </div>
      <div
        dir="ltr"
        data-orientation="horizontal"
        className="flex flex-col items-center justify-center"
      >
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="inline-flex h-10 items-center justify-center rounded-md p-1 text-primary space-x-2 mb-4 outline-none"
          tabindex="0"
          data-orientation="horizontal"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:Rjbqbqda:-content-month"
            data-state="active"
            id="radix-:Rjbqbqda:-trigger-month"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 w-fit text-sm bg-primary/5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-transparent disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            tabindex="0"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:Rjbqbqda:-content-year"
            data-state="inactive"
            id="radix-:Rjbqbqda:-trigger-year"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 w-fit text-sm bg-primary/5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-transparent disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Yearly (2 months OFF)
          </button>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:Rjbqbqda:-trigger-month"
          id="radix-:Rjbqbqda:-content-month"
          tabindex="0"
          className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 grid md:grid-flow-col grid-flow-row justify-center gap-6 items-stretch"

        >
          <div className="rounded-lg border bg-card text-card-foreground w-full max-w-full my-4 shadow-lg flex flex-col justify-between relative md:w-[640px] md:max-w-[640px]">
            <div>
              <div className="flex flex-col space-y-1.5 p-8">
                <h3 className="text-lg font-medium leading-none tracking-tight">
                  Starter
                </h3>
                <p className="text-sm text-muted-foreground md:h-10 md:max-w-[65%]">
                  Setup your subscription based service for free. Automatically
                  billed at your first subscriber.
                </p>
              </div>
              <div className="p-8 pt-0 mt-6">
                <p className="text-3xl font-medium">
                  Free <span className="text-sm mx-2">then</span> $49.95
                  <span className="text-xs text-muted-foreground font-normal">
                    /month
                  </span>
                </p>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border h-[1px] w-full my-6"
                ></div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">2 team seats</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Accept subscriptions</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Manage plans and add-ons</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Autogenerated public page</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Custom client portal</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Embed anywhere</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">
                      Theming &amp; custom domain name
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Powerful task management</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Communicate with comments</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">2TB of cloud storage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center p-8 pt-0">
              <form className="flex flex-1 gap-6 items-center w-full flex-col-reverse">
                <div className="flex md:flex-row flex-col items-center justify-center mt-6 w-full">
                  <div className="flex flex-1 flex-col w-full relative">
                    <div className="group flex items-center space-x-2 w-full rounded-md border-input px-3 py-2 focus-within:outline-none focus-within:border-primary/30 h-11 md:h-14 rounded-b-none border-0 border-t border-x md:rounded-r-none md:rounded-l-md md:border md:border-r-0 bg-background md:px-6">
                      <input
                        className="bg-transparent w-full ring-offset-background file:border-0 outline-none file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground text-base"
                        placeholder="Email address"
                        value=""
                        name="email"
                      />
                    </div>
                  </div>
                  <button
                    className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-accent text-accent-foreground hover:bg-accent/90 h-11 md:h-14 px-6 rounded-md text-base rounded-t-none md:rounded-l-none w-full md:w-fit md:rounded-r-md"
                    type="submit"
                  >
                    Start now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="ml-2 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <span className="text-xs text-primary/60">
                  Free until first subscriber - No credit card needed
                </span>
              </form>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground w-full max-w-full md:max-w-xs my-4 shadow-lg flex flex-col justify-between relative">
            <div>
              <div className="flex flex-col space-y-1.5 p-8">
                <h3 className="text-lg font-medium leading-none tracking-tight">
                  Agency
                </h3>
                <p className="text-sm text-muted-foreground md:h-10">
                  For more established agencies with powerful team features and
                  a fully white labeled experience.
                </p>
              </div>
              <div className="p-8 pt-0 mt-6">
                <p className="text-3xl font-medium">Contact us</p>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border h-[1px] w-full my-6"
                ></div>
                <div className="grid gap-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">2+ team members</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Manage permissions</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Dedicated support</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">Fully white labelled</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-normal">
                      Emails sent with custom domain
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center p-8 pt-0">
              <a
                className="w-full"
                target="_blank"
                href="https://gv8y05ju6yg.typeform.com/to/Blzx6tEh"
              >
                <button
                  className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-primary/5 hover:text-secondary-foreground bg-background h-11 md:h-14 px-6 rounded-md text-base w-full"
                  type="submit"
                >
                  Join waitlist
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:Rjbqbqda:-trigger-year"
          id="radix-:Rjbqbqda:-content-year"
          tabindex="0"
          className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 grid md:grid-flow-col grid-flow-row justify-center gap-6 items-stretch"
          hidden=""
        ></div>
      </div>
    </section>
  );
};

export default Pricing;
