"use client";

import { signIn } from "next-auth/react";

export default function EmailSignIn() {
  const handleSubmit = async (event) => {
    const email = event.target[0].value;
    event.preventDefault();
    await signIn("email", { email });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <input
          name="email"
          type="email"
          className="w-full rounded border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-400"
          placeholder="Email"
        />

        <button
          className="btn btn-primary flex w-full justify-center text-center"
          type="submit"
        >
          Send Magic Link
        </button>
      </div>
    </form>
  );
}
