import { Element, useEditor } from "@craftjs/core";
import { COMPONENTS_ARRAY } from "../constants__/floater";
import ElementContainer from "./selectors/ElementContainer";
const ToolBox = () => {
  const { connectors } = useEditor();

  return (
    <div className="space-y-6 p-5 shadow-xl w-1/6 bg-white">
      <div>
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
    </div>
  );
};

export default ToolBox;
