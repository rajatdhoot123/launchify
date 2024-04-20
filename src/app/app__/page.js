"use client";
import { createRef, useRef, useState } from "react";
import {
  FLOATER_SELECT,
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import { Button } from "@/components/ui/button";

const LeftDrawer = ({ children = null, is_active }) => {
  return (
    <>
      <div
        className={`border bg-card border-primary/50 border-opacity-30 rounded-md h-screen md:h-5/6 top-1/2 transform -translate-y-1/2 transition duration-500 ease-in-out shadow-2xl z-50 fixed right-0 w-full md:w-96  ${
          is_active ? "" : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default function Home() {
  const [is_active, set_is_active] = useState(true);
  const [state, setState] = useState({
    components: FLOATER_SELECT,
    ga_id: "",
    premium_features: PREMIUM_FEATURES,
    crisp_id: "",
    pages: PAGES,
  });

  const elementsRef = useRef(state.components.map(() => createRef()));

  const toggleHamburger = () => {
    set_is_active((prev) => !prev);
  };
  return (
    <>
      {!is_active && (
        <Button
          onClick={toggleHamburger}
          className="z-20 bottom-10 fixed right-10 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-full h-16 w-16"
        >
          <svg
            className="text-xl md:text-2xl"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
            <path d="M16 5l3 3"></path>
          </svg>
        </Button>
      )}
      <div className="space-y-24">
        {state.components.map((comp, index) => {
          const Component = comp.variants[comp.selected];
          return (
            <section
              ref={elementsRef.current[index]}
              key={comp.item_id}
              id={comp.item_id}
            >
              <Component />
            </section>
          );
        })}
      </div>
    </>
  );
}
