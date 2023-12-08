"use client";
import { Editor, Frame, Element, useEditor, useNode } from "@craftjs/core";

import RenderNode from "./render_node";

import { COMPONENTS_ARRAY } from "../constants__/floater";

const Container = ({ background, padding, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        background,
        padding: `${padding}px`,
        zIndex: 9999,
      }}
    >
      {children}
    </div>
  );
};

const SideBar = () => {
  const { connectors } = useEditor();

  return (
    <div className="space-y-6 p-5">
      {COMPONENTS_ARRAY.map(({ name, components }) => (
        <div className="p-2" key={name}>
          <div>{name}</div>
          <ul className="flex flex-col">
            {components.map((comp, index) => (
              <button
                key={index}
                ref={(ref) => connectors.create(ref, comp)}
              >{`Varient ${index + 1}`}</button>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

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
          ...all_components,
        }}
      >
        <div className="w-3/12">
          <SideBar />
        </div>
        <div className="w-full min-h-screen">
          <Frame className="h-56 w-full bg-red-100">
            <Element
              canvas
              is={Container}
              width="800px"
              height="auto"
              background={{ r: 255, g: 255, b: 255, a: 1 }}
              padding={["40", "40", "40", "40"]}
              custom={{ displayName: "App" }}
            >
              <div>Drag and Drop your component</div>
            </Element>
          </Frame>
        </div>
      </Editor>
    </div>
  );
};

export default App;
