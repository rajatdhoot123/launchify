"use client";
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";
import { useToast } from "@/components/ui/use-toast";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ToastAction } from "@/components/ui/toast";
import NextBoilerPlate from "@/app/components/integtrations";
import { COMPONENTS_ARRAY } from "@/app/constants__/floater";
import ThemeSelector from "@/app/components/__theme_selector";
import { LoginDialog } from "@/app/components/__login_dialog/login";
import ViewDemo from "@/app/components/view_demo";
import { useEffect, useReducer, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { logEvent } from "../utils__/events";
import { updateCopywriting } from "../api/code-generation__/update-copywriting";
import CopyWritingDialog from "@/app/components/__copywriting_dialog";
import Loader from "@/app/components/__loader/loader";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/app/__context/ConfigContext";
import Link from "next/link";

// Describe the initial data
const initialData = {
  content: [],
  root: {},
  zones: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_COPWRITING_MODAL":
      return { ...state, is_copywriting_active: true };
    case "CLOSE_COPWRITING_MODAL":
      return { ...state, ...action.payload, is_copywriting_active: false };
    default:
      return state;
  }
};

const modify_components = (content) => {
  return content.reduce((acc, current) => {
    const [item_id, variant] = current.type.split("-");
    return [
      ...acc,
      { item_id: item_id, variant: `variant-${variant}`, key: item_id },
    ];
  }, []);
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
              fields: {
                params: {
                  type: "object",
                  objectFields: {
                    title: { type: "text" },
                  },
                },
              },
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
  const { toast } = useToast();
  const { is_active } = useConfig();
  const [isPuckLoaded, setPuckLoaded] = useState(false);
  const { data: session } = useSession();
  const user = session?.user?.email;
  const [state, dispatch] = useReducer(reducer, {
    open_ai_key: "",
    groq_ai_key: "",
    open_ai_prompt: "",
    is_copywriting_active: false,
  });

  const [modal_is_open, set_modal] = useState(false);
  const [data, setData] = useState({ content: [], root: {} });
  const [loader, setLoader] = useState({
    export: false,
    export_with_copy_writing: false,
  });
  const state_ref = useRef({});
  const puck_data = useRef({});
  const puck_init = useRef(initialData);

  const handleExportWithCopywriting = async ({
    selected_components,
    open_ai_key,
    groq_ai_key,
    open_ai_prompt,
  }) => {
    const state = state_ref.current;
    try {
      setLoader((prev) => ({ ...prev, export_with_copy_writing: true }));
      logEvent("export_clicked", {
        event_name: "export_with_copywriting_clicked",
      });

      const files = await fetch("/api/get-files", {
        method: "POST",
        body: JSON.stringify({ files: selected_components }),
      });
      const files_arr = await files.json();

      const fileFromAI = files_arr.map((file) =>
        updateCopywriting({
          jsx_code: file.content,
          use_case: open_ai_prompt,
          open_ai_key: open_ai_key,
          groq_ai_key: groq_ai_key,
        })
      );

      const filesWithCopywriting = await Promise.all(fileFromAI);

      const modifiedWithCode = filesWithCopywriting.map((file, index) => {
        return {
          ...files_arr[index],
          ai_content: file,
        };
      });

      const response = await fetch("/handle_export", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          twak_to_id: state.twak_to_id,
          use_case: open_ai_prompt,
          // open_ai_key: open_ai_key,
          // groq_ai_key: groq_ai_key,
          ga_id: state.ga_id,
          post_hog: state.post_hog,
          crisp_id: state.crisp_id,
          pages: state.pages,
          premium_features: state.premium_features,
          copywriting_components: modifiedWithCode,
          components: modify_components(puck_data.current.content),
        }),
      });
      if (response.ok) {
        const res_blob = await response.blob();
        const url = window.URL.createObjectURL(res_blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "uicomponents";
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw response;
      }
    } catch (error) {
      console.log({ error });
      if (error instanceof Response) {
        const { message } = await error.json();

        switch (error.status) {
          case 403:
            toast({
              title: "Something went wrong",
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
          /* ... */
          default:
            toast({
              title: error.statusText,
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
        }
      }
    } finally {
      setLoader((prev) => ({ ...prev, export_with_copy_writing: false }));
    }
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      setPuckLoaded(true);
      const puck_data = JSON.parse(localStorage.getItem("puck_state"));
      if (puck_data) {
        puck_init.current = puck_data;
      }
    }
    setPuckLoaded(true);
  }, []);

  const handleComponentExport = async ({ components }) => {
    logEvent("export_component_clicked", {
      event_name: "export_component_clicked",
    });

    try {
      const response = await fetch("/handle_export/components", {
        method: "POST",
        body: JSON.stringify({
          components: components,
        }),
      });

      if (response.ok) {
        const res_blob = await response.blob();
        const url = window.URL.createObjectURL(res_blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "uicomponents";
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw response;
      }
    } catch (error) {
      if (error instanceof Response) {
        const { message } = await error.json();

        switch (error.status) {
          case 403:
            toast({
              title: "Something went wrong",
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
          /* ... */
          default:
            toast({
              title: error.statusText,
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
        }
      }
    }
  };

  const handleExport = async ({ components }) => {
    const state = state_ref.current;
    logEvent("export_clicked", {
      event_name: "export_clicked",
    });

    try {
      const response = await fetch("/handle_export", {
        method: "POST",
        body: JSON.stringify({
          twak_to_id: state.twak_to_id,
          post_hog: state.post_hog,
          ga_id: state.ga_id,
          crisp_id: state.crisp_id,
          pages: state.pages,
          premium_features: state.premium_features,
          components: components,
        }),
      });

      if (response.ok) {
        const res_blob = await response.blob();
        const url = window.URL.createObjectURL(res_blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "uicomponents";
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw response;
      }
    } catch (error) {
      if (error instanceof Response) {
        const { message } = await error.json();

        switch (error.status) {
          case 403:
            toast({
              title: "Something went wrong",
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
          /* ... */
          default:
            toast({
              title: error.statusText,
              description: message,
              action: (
                <ToastAction altText="Buy Now">
                  <Link href="https://shop.boilercode.app/checkout/buy/f2c1375e-6435-4c93-991c-3d7ad763a5b4?media=0">
                    Subscribe Now
                  </Link>
                </ToastAction>
              ),
            });
        }
      }
    }
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
      {isPuckLoaded && (
        <Puck
          onChange={(data) => {
            puck_data.current = data;
            if (localStorage) {
              localStorage.setItem("puck_state", JSON.stringify(data));
            }
          }}
          overrides={{
            header: () => {
              // return Children.map(
              //   children,
              //   (child) => console.log(child) || child
              // );

              // return children

              return (
                <div className="w-screen h-16 flex items-center justify-between drop-shadow-2xl px-6 bg-background">
                  <div className="w-1/3">
                    {user && (
                      <span className="text-primary text-sm font-bold">
                        {user}
                      </span>
                    )}
                    {/* <Button
                    onClick={() => {
                      console.log("Called");
                      puck_dispatch({
                        type: "setUi",
                        ui: {
                          leftSideBarVisible: false,
                          rightSideBarVisible: false,
                        },
                      });
                    }}
                  >
                    Hide Sidebar
                  </Button> */}
                  </div>
                  <div className="text-center w-1/3">
                    Drag a page component from the left menu here to begin
                  </div>
                  <div className="space-x-6 flex items-center w-1/3 justify-end">
                    {!user ? (
                      <LoginDialog text="With Copywriting" />
                    ) : (puck_data?.current?.content ?? []).length === 0 ? (
                      <Button
                        onClick={() =>
                          alert("Add components to generate copywriting")
                        }
                      >
                        With Copywriting
                      </Button>
                    ) : (
                      <CopyWritingDialog
                        handleExportWithCopywriting={
                          handleExportWithCopywriting
                        }
                        state={state}
                        dispatch={dispatch}
                        is_open={state.is_copywriting_active}
                        data={puck_data.current}
                        key="Show code"
                        title="Select component to update copywriting"
                      >
                        <Button
                          disabled={loader.export_with_copy_writing}
                          onClick={() =>
                            dispatch({ type: "OPEN_COPWRITING_MODAL" })
                          }
                        >
                          {loader.export_with_copy_writing && <Loader />}
                          With Copywriting
                        </Button>
                      </CopyWritingDialog>
                    )}
                    {!user ? (
                      <LoginDialog text="Export" />
                    ) : (
                      <Button
                        disabled={loader.export}
                        onClick={() =>
                          handleExport({
                            components: modify_components(
                              puck_data.current.content
                            ),
                          })
                        }
                        className="cursor-pointer"
                      >
                        {loader.export && <Loader />}
                        Export
                      </Button>
                    )}
                    <Button
                      onClick={() => {
                        set_modal(true);
                        setData(puck_data.current);
                      }}
                      className="cursor-pointer"
                    >
                      Preview
                    </Button>
                  </div>
                </div>
              );
            },
            componentItem: ({ children }) => {
              const [comp_name, index] =
                children?.props?.children?.props?.children?.[0]?.props?.children?.split(
                  "-"
                );

              const selectedComponent = COMPONENTS_ARRAY.find(
                ({ name }) => name === comp_name
              );

              const RenderComponent = selectedComponent.components[index - 1];
              <RenderComponent />;

              const libs = selectedComponent?.lib ?? [];

              return (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleComponentExport({
                        components: [
                          { variant: `variant-${index}`, item_id: comp_name },
                        ],
                      });
                    }}
                    className="absolute p-2 right-8 z-20 top-1/2 -translate-y-1/2"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Export">
                        <g>
                          <path d="M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z"></path>
                          <path d="M12.337,3.176a.455.455,0,0,0-.311-.138c-.015,0-.028,0-.043-.006s-.027,0-.041.006a.457.457,0,0,0-.312.138L7.961,6.845a.5.5,0,0,0,.707.707l2.816-2.815V15.479a.5.5,0,0,0,1,0V4.737L15.3,7.552a.5.5,0,0,0,.707-.707Z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                  <div className="mb-4 relative">
                    <div className="absolute -top-3 right-0">
                      {libs.map((lib) => (
                        <a
                          target="_blank"
                          title="Loops Email"
                          href={lib.link}
                          className="text-xs font-bold text-primary bg-background px-2 border"
                          key={lib.link}
                        >
                          <span>{lib.title}</span>
                        </a>
                      ))}
                    </div>

                    <HoverCard className="z-[999]">
                      <HoverCardTrigger>{children}</HoverCardTrigger>
                      <HoverCardPortal>
                        <HoverCardContent
                          side="right"
                          className="w-[340px] h-[196px] overflow-hidden"
                        >
                          <div className="frame">
                            <RenderComponent />
                          </div>
                        </HoverCardContent>
                      </HoverCardPortal>
                    </HoverCard>
                  </div>
                </div>
              );
            },
            components: ({ children }) => {
              return (
                <div>
                  <ThemeSelector />
                  <div>{children}</div>
                  <NextBoilerPlate ref={state_ref} />
                </div>
              );
            },
          }}
          headerTitle="Drag a page component from the left menu here to begin"
          config={config}
          data={puck_init.current}
          onPublish={save}
        />
      )}
    </>
  );
}

export default Editor;
