"use client";
import Floater from "@/app/components/__floater/varient-1";
import { useState } from "react";
import { FLOATER_SELECT } from "@/app/constants__/floater";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  const [state, setState] = useState({
    components: FLOATER_SELECT,
    ga_id: "",
    next_auth: false,
  });

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Floater
          next_auth={state.next_auth}
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
