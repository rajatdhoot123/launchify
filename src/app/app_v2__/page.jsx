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
      className="min-h-screen overflow-y-scroll pb-16"
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        background,
        padding: `${padding}px`,
      }}
    >
      {children}
    </div>
  );
};

const ElementContainer = ({ background, padding, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      className="relative z-50"
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        background,
        padding: `${padding}px`,
      }}
    >
      {children}
    </div>
  );
};

ElementContainer.craft = {
  rules: {
    canDrag: (node, helper) => {
      return true;
    },
    canMoveIn: (incoming, self, helper) => {
      return false;
    },
    canMoveOut: (outgoing, self, helper) => {
      return true;
    },
  },
};

const SideBar = () => {
  const { connectors } = useEditor();

  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div className="space-y-6 p-5">
      {COMPONENTS_ARRAY.map(({ name, components }) => (
        <div className="p-2" key={name}>
          <div className="font-bold my-2">{name}</div>
          <ul className="space-y-2">
            {components.map((Comp, index) => (
              <li className="flex items-center space-x-2" key={index}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
                <button
                  ref={(ref) =>
                    connectors.create(
                      ref,
                      <Element
                        custom={{
                          displayName: `${name}${index + 1}`,
                          type: name,
                        }}
                        canvas
                        is={ElementContainer}
                        padding={20}
                      >
                        <Comp />
                      </Element>
                    )
                  }
                >{`Varient ${index + 1}`}</button>
              </li>
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
          ElementContainer,
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
              background={{ r: 255, g: 255, b: 255, a: 1 }}
              padding={["40", "40", "40", "40"]}
              custom={{ displayName: "App" }}
            ></Element>
          </Frame>
        </div>
      </Editor>
    </div>
  );
};

export default App;
