"use client";
import { Editor, Frame, Element } from "@craftjs/core";
import Viewport from "@/app/editor__/Viewport";
import RenderNode from "@/app/editor__/render_node";
import ElementContainer from "@/app/editor__/selectors/Container";
import Container from "@/app/editor__/selectors/Container";
import { COMPONENTS_ARRAY } from "@/app/constants__/floater";

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
