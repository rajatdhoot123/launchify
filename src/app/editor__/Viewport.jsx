import { useEditor } from "@craftjs/core";
import React from "react";

import Toolbox from "./Toolbox";

const Viewport = ({ children }) => {
  const { connectors } = useEditor();

  return (
    <div className="viewport">
      <div
        className={
          "flex h-full overflow-hidden flex-row w-full fixed bg-[#3e434c]"
        }
      >
        <Toolbox />
        <div className="page-container flex flex-1 h-full flex-col">
          <div
            className="craftjs-renderer flex-1 h-full w-full transition overflow-auto"
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div className="relative flex-col flex items-center p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewport;
