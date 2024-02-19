import { Button } from "@/components/ui/button";

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
              <p className="max-w-[600px] text-primary/80 md:text-xl">
                Give your team the toolkit to stop configuring and start
                innovating. Securely build, deploy, and scale the best web
                experiences.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="ghost">Get Started</Button>
              <Button>Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
