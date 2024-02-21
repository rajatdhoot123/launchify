import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CommingSoon = () => {
  return (
    <section className="container border border-gray-200 py-12 rounded-xl mx-auto">
      <div className="flex flex-col w-full ">
        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            Coming
          </span>

          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
            Soon
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-center   dark:text-white md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias
          nihil incidunt.
        </p>

        <div className="flex items-center w-1/2 mx-auto my-5 space-x-4">
          <Input id="email" type="text" placeholder="Email Address" />
          <Button>Notify Me</Button>
        </div>
        <p className="mt-8 text-center text-md md:text-xl">
          Notify me when App is launched
        </p>
      </div>
    </section>
  );
};

export default CommingSoon;
