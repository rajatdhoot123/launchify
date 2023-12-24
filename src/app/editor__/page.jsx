"use client";
import { Puck, usePuck } from "@measured/puck";
import "@measured/puck/puck.css";
import {
  COMPONENTS_ARRAY,
  FLOATER_SELECT,
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import Collapsible from "@/app/components/__accordion/variant-1";
import { TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

const NextBoilerPlate = forwardRef((props, state_ref) => {
  const [state, setState] = useState({
    ga_id: "",
    premium_features: PREMIUM_FEATURES,
    crisp_id: "",
    pages: PAGES,
  });
  const { data: session } = useSession();
  const is_premium = ["rajatdhoot123@gmail.com"].includes(session?.user?.email);

  useEffect(() => {
    state_ref.current = state;
  }, [state, state_ref]);
  return (
    <div className="space-y-6 sticky bottom-0 w-full bg-white">
      <div className=" border border-gray-300 border-opacity-80 p-2 rounded-md">
        <Collapsible
          isOpen={true}
          title={
            <div className="w-full text-left">
              <span>Integrations</span>
            </div>
          }
        >
          <div className="space-y-4 p-2">
            <div className="space-y-2">
              <div className="text-sm font-semibold">Google Analytics</div>
              <TextFieldRoot>
                <TextFieldInput
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      ga_id: e.target.value,
                    }))
                  }
                  value={state.ga_id}
                  placeholder="Enter GA Id"
                />
              </TextFieldRoot>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold">Crisp Support</div>
              <TextFieldRoot>
                <TextFieldInput
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      crisp_id: e.target.value,
                    }))
                  }
                  value={state.crisp_id}
                  placeholder="Enter Crisp Id"
                />
              </TextFieldRoot>
            </div>
            <div className="flex items-center">
              <input
                readOnly
                checked={true}
                type="checkbox"
                className="w-4 h-4 text-blue-600  border-gray-300 rounded bg-gray-300"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Sitemap (SEO)
              </label>
            </div>
            <div className="flex items-center">
              <input
                readOnly
                checked={true}
                type="checkbox"
                className="w-4 h-4 text-blue-600  border-gray-300 rounded bg-gray-300"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Mdx Support
              </label>
            </div>
          </div>
        </Collapsible>
      </div>
      <div className="bg-white border border-gray-300 border-opacity-80 p-2 rounded-md">
        <Collapsible
          isOpen={false}
          title={
            <div className="w-full text-left">
              <span className="">Pages</span>
            </div>
          }
        >
          <div className="flex flex-col space-y-4 mt-5">
            {state.pages.map((feature, index) => (
              <div
                className="flex flex-shrink-0 items-center"
                key={feature.item_id}
              >
                <input
                  onChange={(e) => {
                    e.stopPropagation();
                    setState((prev) => ({
                      ...prev,
                      pages: prev.pages.map((page, findex) =>
                        findex === index
                          ? {
                              ...page,
                              selected:
                                e.target.value === "true" ? false : true,
                            }
                          : page
                      ),
                    }));
                  }}
                  type="checkbox"
                  value={feature.selected}
                  checked={feature.selected}
                  className={`w-4 h-4 text-blue-600  border-gray-300 rounded ${
                    !is_premium ? "bg-gray-300" : "bg-gray-100"
                  }`}
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {feature.title}
                </label>
              </div>
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  );
});

NextBoilerPlate.displayName = "NextBoilerPlate";

// Describe the initial data
const initialData = {
  content: [],
  root: {},
  zones: {},
};

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
              render: () => (
                <div className="pb-12">
                  <CurrentComp />
                </div>
              ),
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
      return children;
    },
  },
};

// Render Puck editor
function Editor() {
  const state_ref = useRef({});

  const save = async (data) => {
    const state = state_ref.current;

    const components = data.content.reduce((acc, current) => {
      const [item_id, variant] = current.type.split("-");
      return [
        ...acc,
        { item_id: item_id, variant: `variant-${variant}`, key: item_id },
      ];
    }, []);

    const response = await fetch("/handle_export__", {
      method: "POST",
      body: JSON.stringify({
        ga_id: state.ga_id,
        crisp_id: state.crisp_id,
        pages: state.pages,
        premium_features: state.premium_features,
        components: components,
      }),
    });
    const res_blob = await response.blob();
    const url = window.URL.createObjectURL(res_blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "uicomponents";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  // return (
  //   <Puck config={config} data={initialData}>
  //     <div className="flex flex-col fixed top-0 w-full h-screen justify-between z-50 bg-white gap-6">
  //       <div>1</div>
  //       <div className="flex-1 overflow-scroll flex gap-5 px-5">
  //         <div class="w-2/6  border border-gray-300 p-5 overflow-y-scroll">
  //           <Puck.Components />
  //           <Puck.Fields />
  //           <Puck.Outline />
  //         </div>
  //         <div class="w-full border border-gray-300 p-5 overflow-y-scroll">
  //           <Puck.Preview className="bg-red-400" />
  //         </div>
  //       </div>
  //       <div className="bg-red-500">2</div>
  //     </div>
  //   </Puck>
  // );
  return (
    <Puck
      overrides={{
        components: ({ children }) => {
          return (
            <div className="flex flex-col space-y-6 justify-between relative">
              <div>{children}</div>
              <NextBoilerPlate ref={state_ref} />
            </div>
          );
        },
      }}
      renderHeaderActions={() => <div>Click Publish to Export Code</div>}
      headerTitle="Drag and Drop Components"
      config={config}
      data={initialData}
      onPublish={save}
    />
  );
}

export default Editor;
