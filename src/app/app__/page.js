"use client";
import Floater from "@/app/components/__floater/varient-1";
import { useState } from "react";
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

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Floater
          pages={state.pages}
          crisp_id={state.crisp_id}
          premium_features={state.premium_features}
          ga_id={state.ga_id}
          components={state.components}
          setState={setState}
        />
      </DndProvider>
      <div className="space-y-16">
        {state.components.map((comp) => {
          return (
            <section key={comp.item_id} id={comp.item_id}>
              {comp.varients[comp.selected]}
            </section>
          );
        })}
      </div>
    </>
  );
}
