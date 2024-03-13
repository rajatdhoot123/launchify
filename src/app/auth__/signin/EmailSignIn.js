"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const EmailSingIn = () => {
  async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");

    await signIn("email", { email });
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4" data-id="9">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
          data-id="10"
        >
          Email
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          name="email"
          placeholder="you@example.com"
          required=""
          data-id="11"
          type="email"
        />
      </div>

      <Button className="w-full" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 text-primary-foreground h-5 w-5"
          data-id="13"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        Send Magic Link
      </Button>
    </form>
  );
};

export default EmailSingIn;
