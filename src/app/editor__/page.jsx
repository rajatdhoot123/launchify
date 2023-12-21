"use client";
import { Frame, Element } from "@craftjs/core";
import Viewport from "@/app/editor__/Viewport";
import RenderNode from "@/app/editor__/render_node";
import ElementContainer from "@/app/editor__/selectors/Container";
import Container from "@/app/editor__/selectors/Container";
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";
import { COMPONENTS_ARRAY } from "@/app/constants__/floater";

console.log(COMPONENTS_ARRAY);

const config = {
  categories: {
    ...COMPONENTS_ARRAY.reduce(
      (acc, current) => ({
        ...acc,
        [current.name]: {
          components: current.components.map(
            (currentComp, index) => `${current.name}-${index + 1}`
          ),
        },
      }),
      {}
    ),
  },
  components: {
    ...COMPONENTS_ARRAY.reduce(
      (acc, current) => ({
        ...acc,
        ...current.components.reduce(
          (compAcc, CurrentComp, index) => ({
            ...compAcc,
            [`${current.name}-${index + 1}`]: {
              render: () => <CurrentComp />,
            },
          }),
          {}
        ),
      }),
      {}
    ),
  },
  root: {
    render: ({ children }) => {
      return <div>{children}</div>;
    },
  },
};

console.log(config);

const all_components = COMPONENTS_ARRAY.reduce((acc, currentComp) => {
  return {
    ...acc,
    ...currentComp.components.reduce((acc, currentVarient, index) => {
      return {
        ...acc,
        [`${currentComp.name}${index + 1}`]: currentVarient,
      };
    }, {}),
  };
}, {});

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

const save = (data) => {};

// Render Puck editor
export function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}

export default Editor;
