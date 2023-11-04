/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BzrWYyYbQNQ
 */
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="w-full container py-12 md:py-24 mx-auto">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hero Variant 1
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Beautifully designed components that you can copy and paste into
                your apps. Accessible. Customizable. Open Source.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 "
                href="#"
              >
                Button
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
