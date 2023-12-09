"use client";
import Floater from "@/app/components/__floater/varient-1";
import { createRef, useRef, useState } from "react";
import {
  FLOATER_SELECT,
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  const [state, setState] = useState({
    components: FLOATER_SELECT,
    ga_id: "",
    premium_features: PREMIUM_FEATURES,
    crisp_id: "",
    pages: PAGES,
  });

  const elementsRef = useRef(state.components.map(() => createRef()));

  const handleShowCode = (index) => {
    return elementsRef.current[index].current.innerHTML;
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Floater
          handleShowCode={handleShowCode}
          pages={state.pages}
          crisp_id={state.crisp_id}
          premium_features={state.premium_features}
          ga_id={state.ga_id}
          components={state.components}
          setState={setState}
        />
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
