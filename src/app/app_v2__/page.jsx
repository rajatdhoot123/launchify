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
  return (
    <div>
      <div>
        <Toolbox />
      </div>
      <div>Component 2</div>
      <div>Component 3</div>
      <div>Component 4</div>
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
