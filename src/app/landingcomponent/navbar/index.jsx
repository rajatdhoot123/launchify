"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";
import Link from "next/link";
import { useConfig } from "@/app/__context/ConfigContext";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { setTheme } = useTheme();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setTheme("light"); //set your theme here after component mounts
  }, [pathname, setTheme]);

  const { session } = useConfig();

  if (pathname.startsWith("/iframe__")) return null;
  return (
    <header className="flex items-center justify-around h-20">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="h-12 w-12" />
      </Link>

      <ul className="hidden md:block">
        <Button className="text-lg" asChild variant="link">
          <Link
            target="_blank"
            href="https://templates.launchify.club?utm_source=launchify"
          >
            Templates
          </Link>
        </Button>
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
        {session?.user?.email ? (
          <>
            {/* <div className="font-semibold">{`Hey ${session?.user?.name}`}</div> */}
            <Button onClick={signOut} variant="link">
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Button variant="link">
              <Link href="/auth/signin">Sign in</Link>
            </Button>
            <Button>
              <Link href="/auth/signin">Sign up</Link>
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
