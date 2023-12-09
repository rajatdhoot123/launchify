"use client";
import { Editor, Frame, Element, useEditor, useNode } from "@craftjs/core";
import Viewport from "./ViewPort";
import RenderNode from "./render_node";
import ElementContainer from "./selectors/ElementContainer";
import Container from "./selectors/Container";
import { COMPONENTS_ARRAY } from "../constants__/floater";

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

const App = () => {
  return (
    <div className="w-full flex page-container">
      <Editor
        onRender={RenderNode}
        resolver={{
          Container,
          ElementContainer,
          ...all_components,
        }}
      >
        <Viewport>
          <div className="w-full craftjs-renderer">
            <Frame className="h-56 w-full bg-red-100">
              <Element
                canvas
                is={Container}
                width="800px"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={["40", "40", "40", "40"]}
                custom={{ displayName: "App" }}
              ></Element>
            </Frame>
          </div>
        </Viewport>
      </Editor>
    </div>
  );
};

export default App;
