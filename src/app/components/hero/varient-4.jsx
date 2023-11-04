const Hero = () => {
  return (
    <section className="w-full container py-12 md:py-24 mx-auto">
      <div className="space-y-10 xl:space-y-16 px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Hero Variant 4
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </p>
            <div className="space-x-4">
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                Button
              </a>
            </div>
          </div>
        </div>
        <img
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          height="300"
          src="/hero.jpg"
          width="1270"
        />
      </div>
    </section>
  );
};

export default Hero;
