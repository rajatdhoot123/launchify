const Hero = () => {
  return (
    <div class="container mx-auto max-w-4xl text-center flex flex-col justify-center items-center">
      <div class="rounded-[40px] border uppercase backdrop-blur-sm text-xs text-primary font-medium md:mt-0 mb-4 py-2 px-4 border-primary/40 w-fit mx-auto text-center z-10">
        FREE UNTIL YOUR FIRST SUBSCRIBER
      </div>
      <h1 class="text-4xl md:text-6xl font-bold md:leading-[72px] mt-6 max-w-3xl">
        Productize yourself, <br />
        earn more with what you're good at.
      </h1>
      <p class="mt-6 text-primary/80 text-lg md:text-xl mb-10 max-w-xl">
        With Breeew, anyone can generate recurring income online. People need
        your skills, let them subscribe to you. It's that easy.
      </p>
      <form class="flex flex-1 flex-col gap-6 items-center w-full">
        <div class="flex md:flex-row flex-col items-center justify-center mt-6 w-full max-w-lg">
          <div class="flex flex-1 flex-col w-full relative">
            <div class="group flex items-center space-x-2 w-full rounded-md border-input px-3 py-2 focus-within:outline-none focus-within:border-primary/30 h-11 md:h-14 rounded-b-none border-0 border-t border-x md:rounded-r-none md:rounded-l-md md:border md:border-r-0 bg-background md:px-6">
              <input
                class="bg-transparent w-full ring-offset-background file:border-0 outline-none file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground text-base"
                placeholder="Email address"
                name="email"
                value=""
              />
            </div>
          </div>
          <button
            class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-accent text-accent-foreground hover:bg-accent/90 h-11 md:h-14 px-6 rounded-md text-base rounded-t-none md:rounded-l-none w-full md:w-fit md:rounded-r-md"
            type="submit"
          >
            Start now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="ml-2 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
        <span class="text-xs text-primary/60">
          Free until first subscriber - No credit card needed
        </span>
      </form>
    </div>
  );
};

export default Hero;
