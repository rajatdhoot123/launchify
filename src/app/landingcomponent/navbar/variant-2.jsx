import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="h-12 w-12" />
      </Link>

      <ul className="hidden md:block">
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
      </ul>

      <div className="flex items-center">
        <Button variant="link">
          <Link href="/auth__/signin">Sign in</Link>
        </Button>
        <Button>
          <Link href="/auth__/signin">Sign up</Link>
        </Button>
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
