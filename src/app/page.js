"use client";
import Floater from "@/app/components/__floater/varient-1";
import { useState } from "react";
import { FLOATER_SELECT } from "@/app/constants__/floater";

export default function Home() {
  const [state, setState] = useState({
    components: FLOATER_SELECT,
    ga_id: "",
  });

  return (
    <>
      <Floater
        ga_id={state.ga_id}
        components={state.components}
        setState={setState}
      />
      <div className="space-y-12">
        {state.components.map((comp) => {
          return (
            <secion key={comp.key} id={comp.key}>
              {comp.varients[comp.selected]}
            </secion>
          );
        })}
      </div>
    </>
  );
}
