import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="container mx-auto flex items-center justify-center">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8">
              Introducing Design Data Platform
            </p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight">
              Distribute your brand from&nbsp;design to code
            </h1>
            <p className="mt-3 text-lg leading-relaxed">
              Specify helps you unify your brand identity by collecting, storing
              and distributing design tokens and assets — automatically.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button>Get started for free</Button>
            <Button variant="secondary">Request a demo </Button>
          </div>
        </div>
      </section>
    </>
  );
}
