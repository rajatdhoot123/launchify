"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { useConfig } from "@/app/__context/ConfigContext";

const Navbar = () => {
  const { session } = useConfig();

  return (
    <header className="flex items-center justify-around p-5">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="h-12 w-12" />
      </Link>

      <ul className="hidden md:block">
        <Button className="text-lg" asChild variant="link">
          <Link href="#pricing">Pricing</Link>
        </Button>
        {/* <Button className="text-lg" asChild variant="link">
          <Link href="#testinomials">Testinomials</Link>
        </Button> */}
        <Button className="text-lg" asChild variant="link">
          <Link href="#faqs">Faq</Link>
        </Button>
        <Button className="text-lg" asChild variant="link">
          <Link href="#boilerplate">Whats Included</Link>
        </Button>
      </ul>

      <div className="flex items-center">
        {session?.user?.name ? (
          <>
            {/* <div className="font-semibold">{`Hey ${session?.user?.name}`}</div> */}
            <Button onClick={signOut} variant="link">
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Button variant="link">
              <Link href="/auth__/signin">Sign in</Link>
            </Button>
            <Button>
              <Link href="/auth__/signin">Sign up</Link>
            </Button>
          </>
        )}
        {/* <div className="z-10 relative md:hidden">
          <Drawer>
            <DrawerTrigger>
              <HamburgerMenuIcon className="ml-2" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-5 flex flex-col">
                <Button asChild variant="link">
                  <Link href="#pricing">Pricing</Link>
                </Button>
                <Button asChild variant="link">
                  <Link href="#testinomials">Testinomials</Link>
                </Button>
                <Button asChild variant="link">
                  <Link href="#faqs">Faq</Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href="#boilerplate">Whats Included</Link>
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
