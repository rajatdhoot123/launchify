"use client";
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";
import {
  COMPONENTS_ARRAY,
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import ViewDemo from "@/app/components/__view_demo";
import Collapsible from "@/app/components/__accordion/variant-1";
import { Button, Link, TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { logEvent } from "../utils__/events";
import { updateCopywriting } from "../api/code-generation__/update-copywriting";
import CopyWritingDialog from "@/app/components/__copywriting_dialog";

const modify_components = (content) => {
  return content.reduce((acc, current) => {
    const [item_id, variant] = current.type.split("-");
    return [
      ...acc,
      { item_id: item_id, variant: `variant-${variant}`, key: item_id },
    ];
  }, []);
};

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
  const [state, setState] = useState({ open_ai: "", prompt: "" });

  const [modal_is_open, set_modal] = useState(false);
  const [data, setData] = useState({ content: [], root: {} });
  const ai_key = useRef("");
  const [loader, setLoader] = useState({
    export: false,
    export_wih_copywriting: false,
  });
  const state_ref = useRef({});
  const puck_data = useRef({});

  const handleExportWithCopywriting = async ({ components }) => {
    const state = state_ref.current;

    console.log("Here");
    try {
      setLoader((prev) => ({ ...prev, export_wih_copywriting: true }));
      logEvent("export_clicked", {
        event_name: "export_with_copywriting_clicked",
      });

      if (!ai_key.current) {
        const open_ai_key = prompt("Enter open ai api key");
        ai_key.current = open_ai_key;
      }
      if (!ai_key.current) {
        return;
      }

      const jsx_files = await fetch("/api/get-file__", {
        method: "POST",
        body: JSON.stringify({
          files: components.map(({ variant, item_id }) => ({
            key: item_id,
            item_id,
            variant,
          })),
        }),
      });

      const jsx_code_response = await jsx_files.json();
      const use_case = prompt("Provide use case for website generation");
      const open_ai_copy_writing = jsx_code_response.map(({ key, content }) =>
        updateCopywriting({
          jsx_code: content,
          use_case: use_case,
          apiKey: ai_key.current,
        })
      );

      const result = await Promise.all(open_ai_copy_writing);

      const response = await fetch("/handle_export_with_copy_from_fe__", {
        method: "POST",
        body: JSON.stringify({
          ga_id: state.ga_id,
          crisp_id: state.crisp_id,
          pages: state.pages,
          premium_features: state.premium_features,
          components: result.map(({ choices }, index) => ({
            file_path: jsx_code_response[index].key,
            item_id: jsx_code_response[index].item_id,
            content: choices?.[0]?.message?.content,
          })),
        }),
      });
      const res_blob = await response.blob();
      const url = window.URL.createObjectURL(res_blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "uicomponents";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log({ err });
    } finally {
      setLoader((prev) => ({ ...prev, export_wih_copywriting: false }));
    }
  };

  const handleExport = async ({ components }) => {
    const state = state_ref.current;
    logEvent("export_clicked", {
      event_name: "export_clicked",
    });
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

  const save = async (data) => {
    const components = modify_components(data.content);

    try {
      await handleExport({ components });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ViewDemo onClose={() => set_modal(false)} isOpen={modal_is_open}>
        <Render data={data} config={config} />
      </ViewDemo>
      <Puck
        onChange={(data) => {
          puck_data.current = data;
        }}
        overrides={{
          headerActions: () => {
            return (
              <div className="space-x-6 flex items-center">
                {(puck_data?.current?.content ?? []).length === 0 ? (
                  <Button
                    onClick={() =>
                      alert("Add components to generate copywriting")
                    }
                  >
                    With Copywriting
                  </Button>
                ) : (
                  <CopyWritingDialog
                    handleCopywriting={async () =>
                      await handleExportWithCopywriting({
                        components: modify_components(
                          puck_data.current.content
                        ),
                      })
                    }
                    state={state}
                    setState={setState}
                    data={puck_data.current}
                    key="Show code"
                    title="Select component to update copywriting"
                  >
                    <Button className="cursor-pointer">With Copywriting</Button>
                  </CopyWritingDialog>
                )}
                <Button
                  onClick={() =>
                    handleExport({
                      components: modify_components(puck_data.current.content),
                    })
                  }
                  className="cursor-pointer"
                >
                  Export
                </Button>
                <Button
                  onClick={() => {
                    set_modal(true);
                    setData(puck_data.current);
                  }}
                  className="cursor-pointer"
                >
                  View
                </Button>
              </div>
            );
          },
          components: ({ children }) => {
            return (
              <div className="flex flex-col space-y-6 justify-between relative">
                <div>{children}</div>
                <NextBoilerPlate ref={state_ref} />
              </div>
            );
          },
        }}
        headerTitle="Drag and Drop Components"
        config={config}
        data={initialData}
        onPublish={save}
      />
    </>
  );
}

export default Editor;
