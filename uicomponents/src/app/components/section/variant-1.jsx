const Hero = () => {
  return (
    <section className="w-full container py-12 md:py-24 mx-auto">
      <div className="px-4 md:px-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="https://placekitten.com/g/800/500"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4 w-full">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Section 
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Give your team the toolkit to stop configuring and start
                innovating. Securely build, deploy, and scale the best web
                experiences.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 "
                href="#"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
