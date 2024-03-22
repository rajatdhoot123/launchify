import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <a href="/#">
        <img src="/logo.png" alt="logo" className="h-12 w-12" />
      </a>

      <ul className="hidden md:block">
        <Button variant="link" >
          Home
        </Button>
        <Button variant="link" >
          Payment
        </Button>
        <Button variant="link" >
          About
        </Button>
        <Button variant="link" >
          Blog
        </Button>
      </ul>

      <div className="flex items-center">
        <Button variant="link" href="/#">
          Sign in
        </Button>
        <Button href="/#">Sign up</Button>
        <div className="z-10 relative md:hidden">
          <Drawer>
            <DrawerTrigger>
              <HamburgerMenuIcon className="ml-2" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-5 flex flex-col">
                <Button variant="link" >
                  Home
                </Button>
                <Button variant="link" >
                  Payment
                </Button>
                <Button variant="link" >
                  About
                </Button>
                <Button variant="link" >
                  Blog
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
