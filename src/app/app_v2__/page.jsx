"use client";
import {
  Editor,
  Frame,
  Canvas,
  Selector,
  Element,
  useEditor,
} from "@craftjs/core";

import { useNode } from "@craftjs/core";
import { COMPONENTS_ARRAY } from "../constants__/floater";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div>
      <button
        ref={(ref) => connectors.create(ref, <div>Bhosadike</div>)}
        variant="contained"
        data-cy="toolbox-button"
      >
        Button
      </button>
    </div>
  );
};

export const Container = ({ background, padding, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};

const TextComponent = ({ text }) => {
  const {
    connectors: { drag },
  } = useNode();

  return (
    <div ref={drag}>
      <h2>{text}</h2>
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

const EditorComp = () => {
  return (
    <Frame>
      <Element
        canvas
        is={Container}
        padding={5}
        background="#eeeeee"
        data-cy="root-container"
      >
        <TextComponent text="Madarchod" />
      </Element>
    </Frame>
  );
};

const App = () => {
  return (
    <div className="w-full flex">
      <Editor
        resolver={{
          Container,
          TextComponent,
        }}
      >
        <div className="w-3/12">
          <SideBar />
        </div>
        <div className="w-full">
          <EditorComp />
        </div>
      </Editor>
    </div>
  );
};

export default App;
