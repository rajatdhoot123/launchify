"use client";
import Floater from "@/app/components/__floater/varient-1";
import { createRef, useEffect, useRef, useState } from "react";
import {
  FLOATER_SELECT,
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const LeftDrawer = ({ children = null, is_active }) => {
  return (
    <>
      <div
        className={`rounded-md h-screen md:h-5/6 top-1/2 transform -translate-y-1/2 transition duration-500 ease-in-out shadow-2xl z-50 fixed right-0 bg-white w-full md:w-96  ${
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

  const handleShowCode = (index) => {
    console.log({ d: elementsRef.current });
    return elementsRef.current[index].current.innerHTML;
  };

  const toggleHamburger = () => {
    set_is_active((prev) => !prev);
  };
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {!is_active && (
          <button
            onClick={toggleHamburger}
            className="z-20 bottom-10 fixed right-10 shadow-2xl p-5 rounded-full text-xs font-bold bg-[#F53855]"
          >
            <svg
              className="text-white text-xl md:text-2xl"
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
          </button>
        )}
        <LeftDrawer is_active={is_active}>
          <Floater
            toggleHamburger={toggleHamburger}
            handleShowCode={handleShowCode}
            pages={state.pages}
            crisp_id={state.crisp_id}
            premium_features={state.premium_features}
            ga_id={state.ga_id}
            components={state.components}
            setState={setState}
          />
        </LeftDrawer>
      </DndProvider>

      <div className="space-y-24">
        {state.components.map((comp, index) => {
          const Component = comp.varients[comp.selected];
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
