"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from "./actions";
import { toast } from "@/components/ui/use-toast";

const Waitlist = () => {
  const handleSubmit = async (formAction) => {
    const response = await joinWaitlist(formAction);

    toast({
      title: response.message,
    });
  };
  return (
    <section className="container border border-gray-200 py-12 rounded-xl mx-auto">
      <div className="flex flex-col w-full ">
        <div className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            Coming
          </span>

          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
            Soon
          </span>
        </div>
        <div className="max-w-3xl mx-auto mt-2 text-center">
          <p className="text-2xl text-primary">
            You caught us before we are ready
          </p>
          <div className="text-primary/60">
            <div>
              We will be working hard to put the final finishing touches.
            </div>
            <div>
              If you like us to send you a reminder when we are ready, just put
              your email below
            </div>
          </div>
        </div>
        <div className="flex items-center w-1/2 mx-auto my-5 space-x-4">
          <form className="w-full flex space-x-4" action={handleSubmit}>
            <Input
              className="w-full"
              name="email"
              id="email"
              type="text"
              placeholder="Email Address"
            />
            <Button>Notify Me</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
