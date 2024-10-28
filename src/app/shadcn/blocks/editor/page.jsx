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
import { COMPONENTS_ARRAY } from "@/app/shadcn/constant";
import ThemeSelector from "@/app/components/__theme_selector";
import { LoginDialog } from "@/app/components/__login_dialog/login";
import ViewDemo from "@/app/components/view_demo";
import { useEffect, useReducer, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { logEvent } from "@/app/utils__/events";
import Loader from "@/app/components/__loader/loader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LOCAL_STORAGE_VERSION = "0.0.1";
const LOCAL_STORAGE_KEY = "puck_state_shadcn";

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

const config = {
  categories: {
    ...COMPONENTS_ARRAY.reduce(
      (acc, current) => ({
        ...acc,
        [current.name]: {
          components: current.components.map(
            (currentComp, index) => currentComp.name
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
          (compAcc, { name, comp: CurrentComp }) => ({
            ...compAcc,
            [name]: {
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

  useEffect(() => {
    if (typeof window !== "undefined" && window?.Tawk_API) {
      try {
        window.Tawk_API.onLoad = function () {
          window.Tawk_API.hideWidget();
        };
      } catch (err) {
        console.log(err);
      }
    }
    if (typeof localStorage !== "undefined") {
      setPuckLoaded(true);
      const puck_data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (puck_data && puck_data.version === LOCAL_STORAGE_VERSION) {
        puck_init.current = puck_data;
      }
    }
    setPuckLoaded(true);

    return () => {
      if (typeof window !== "undefined" && window?.Tawk_API) {
        try {
          window.Tawk_API.onLoad = function () {
            window.Tawk_API.showWidget();
          };
        } catch (err) {
          console.log(err);
        }
      }
    };
  }, []);

  const handleExport = async ({ components }) => {
    const state = state_ref.current;
    logEvent("export_clicked", {
      event_name: "export_clicked",
    });

    const export_components = components.content.reduce((acc, { type }) => {
      const filteredComponents = COMPONENTS_ARRAY.flatMap(({ components }) =>
        components
          .map(({ name, export_path }) => {
            if (name === type) {
              return {
                export_path,
                name,
              };
            }
            return null;
          })
          .filter(Boolean)
      );
      return acc.concat(filteredComponents);
    }, []);

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
          components: export_components,
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
              localStorage.setItem(
                LOCAL_STORAGE_KEY,
                JSON.stringify({ ...data, version: LOCAL_STORAGE_VERSION })
              );
            }
          }}
          overrides={{
            header: () => {
              return (
                <div className="w-screen h-16 flex items-center justify-between drop-shadow-2xl px-6 bg-background">
                  <div className="w-1/3">
                    {user && (
                      <span className="text-primary text-sm font-bold">
                        {user}
                      </span>
                    )}
                  </div>
                  <div className="text-center w-1/3 flex items-center">
                    <span className="pl-5 border-l-2 ml-5"> Drag and Drop</span>
                  </div>
                  <div className="space-x-6 flex items-center w-1/3 justify-end">
                    {!user ? (
                      <LoginDialog text="Export" />
                    ) : (
                      <Button
                        disabled={loader.export}
                        onClick={() =>
                          handleExport({
                            components: puck_data.current,
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
              const child =
                children?.props?.children?.props?.children?.[0]?.props
                  ?.children;

              const selectedComponent = COMPONENTS_ARRAY.reduce(
                (acc, { components }) => {
                  const selected_child = components.find(
                    ({ name }) => name === child
                  );
                  if (selected_child) {
                    return selected_child;
                  }
                  return acc;
                },
                {}
              );

              const RenderComponent = selectedComponent.comp;

              const libs = selectedComponent?.lib ?? [];

              return (
                <div className="relative">
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
        />
      )}
    </>
  );
}

export default Editor;
