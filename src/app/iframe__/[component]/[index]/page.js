"use client";

import { COMPONENTS_ARRAY } from "@/app/constants__/floater";

const Iframe = ({ params: { component, index } }) => {
  const selectedComponent = COMPONENTS_ARRAY.find(
    ({ name }) => name === component
  );

  const RenderComponent = selectedComponent.components[index - 1];
  return <RenderComponent />;
};

export default Iframe;
