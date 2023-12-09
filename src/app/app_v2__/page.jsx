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
    <div className="page-container">
      <Editor
        onRender={RenderNode}
        resolver={{
          Container,
          ElementContainer,
          ...all_components,
        }}
      >
        <Viewport>
          <div className="w-full craftjs-renderer shadow-xl">
            <Frame className="w-full">
              <Element
                canvas
                is={Container}
                width="100%"
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
