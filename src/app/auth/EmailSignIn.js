"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

export default function EmailSignIn() {
  const handleSubmit = async (event) => {
    const email = event.target[0].value;
    event.preventDefault();
    await signIn("email", { email, callbackUrl: "/" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email Name</Label>
      <Input type="email" name="email" id="email" placeholder="Email" />
      <Button type="submit" className="w-full mt-4">
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
          className=" mr-2 text-background h-5 w-5"
          data-id="13"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        Send Magic Link
      </Button>
    </form>
  );
}
