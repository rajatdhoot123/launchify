"use client";
import { Puck, Render, usePuck } from "@measured/puck";
import "@measured/puck/puck.css";
import { useToast } from "@/components/ui/use-toast";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ToastAction } from "@/components/ui/toast";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  COMPONENTS_ARRAY,
  INTEGRATIONS,
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import ThemeSelector from "@/app/components/__theme_selector";
import { LoginDialog } from "@/app/components/__login_dialog/login";
import ViewDemo from "@/app/components/__view_demo";
import { forwardRef, useEffect, useReducer, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { logEvent } from "../utils__/events";
import { updateCopywriting } from "../api/code-generation__/update-copywriting";
import CopyWritingDialog from "@/app/components/__copywriting_dialog";
import Loader from "@/app/components/__loader/loader";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
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

const NextBoilerPlate = forwardRef((props, state_ref) => {
  const [state, setState] = useState({
    ga_id: "",
    premium_features: PREMIUM_FEATURES.reduce(
      (acc, fe) => ({ ...acc, [fe.item_id]: false }),
      {}
    ),
    crisp_id: "",
    post_hog: "",
    twak_to_id: "",
    pages: PAGES.reduce((acc, fe) => ({ ...acc, [fe.item_id]: false }), {}),
  });
  const [isOpen, setIsOpen] = useState({ integrations: false, page: false });

  useEffect(() => {
    state_ref.current = state;
  }, [state, state_ref]);

  return (
    <div className="space-y-6 sticky bottom-0 w-full bg-white">
      <Card>
        <CardContent className="p-2 space-y-4">
          <Collapsible
            open={isOpen.integrations}
            onOpenChange={() =>
              setIsOpen((prev) => ({
                ...prev,
                integrations: !prev.integrations,
              }))
            }
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <CardHeader className="p-2 cursor-pointer">
                <CardTitle className="flex items-center justify-between">
                  <span>Integrations</span>
                  <div>
                    <CaretSortIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </CardTitle>
                <CardDescription>Select your integrations</CardDescription>
              </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-4">
              <div>
                <Label htmlFor="email">Google Analytics</Label>
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      ga_id: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.ga_id}
                  placeholder="Enter GA Id"
                />
              </div>
              <div>
                <Label htmlFor="email">Posthog</Label>
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      post_hog: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.post_hog}
                  placeholder="Enter Posthog key"
                />
              </div>
              <div>
                <Label htmlFor="email">Crisp Support</Label>
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      crisp_id: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.crisp_id}
                  placeholder="Enter Crisp Id"
                />
              </div>
              <div>
                <Label htmlFor="email">Twak To</Label>
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      twak_to_id: e.target.value,
                    }))
                  }
                  type="text"
                  value={state.twak_to_id}
                  placeholder="Enter Twak to Id"
                />
              </div>
              {INTEGRATIONS.map((feature) => (
                <div key={feature.item_id} className="flex items-center">
                  <Checkbox
                    onCheckedChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        premium_features: {
                          ...prev.premium_features,
                          [feature.item_id]: e,
                        },
                      }))
                    }
                    className="mr-2"
                    id="mdx_support"
                    checked={state.premium_features[feature.item_id]}
                  />
                  <Label htmlFor="mdx_support">{feature.title}</Label>
                </div>
              ))}
              <div className="flex items-center">
                <Checkbox
                  className="mr-2"
                  id="mdx_support"
                  readOnly
                  checked={true}
                />
                <Label htmlFor="mdx_support">Mdx Support</Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  className="mr-2"
                  id="sitemap_seo"
                  readOnly
                  checked={true}
                />
                <Label htmlFor="sitemap_seo">Sitemap SEO</Label>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-2 space-y-4">
          <Collapsible
            open={isOpen.page}
            onOpenChange={() =>
              setIsOpen((prev) => ({
                ...prev,
                page: !prev.page,
              }))
            }
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <CardHeader className="p-2 cursor-pointer">
                <CardTitle className="flex items-center justify-between">
                  <span>Page</span>
                  <div>
                    <CaretSortIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </div>
                </CardTitle>
                <CardDescription>Select your page</CardDescription>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4">
              {PAGES.map((feature) => (
                <div key={feature.item_id} className="flex items-center">
                  <Checkbox
                    className="mr-2"
                    id={feature.item_id}
                    onCheckedChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        pages: {
                          ...prev.pages,
                          [feature.item_id]: e,
                        },
                      }))
                    }
                    checked={state.pages[feature.item_id]}
                  />
                  <Label htmlFor={feature.item_id}>{feature.title}</Label>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
});

NextBoilerPlate.displayName = "NextBoilerPlate";

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
    open_ai_prompt,
  }) => {
    const state = state_ref.current;
    try {
      setLoader((prev) => ({ ...prev, export_with_copy_writing: true }));
      logEvent("export_clicked", {
        event_name: "export_with_copywriting_clicked",
      });

      const response = await fetch("/handle_export_with_copy__", {
        method: "POST",
        body: JSON.stringify({
          use_case: open_ai_prompt,
          api_key: open_ai_key,
          ga_id: state.ga_id,
          post_hog: state.post_hog,
          crisp_id: state.crisp_id,
          pages: state.pages,
          premium_features: state.premium_features,
          copywriting_components: selected_components,
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

  const handleExport = async ({ components }) => {
    const state = state_ref.current;
    logEvent("export_clicked", {
      event_name: "export_clicked",
    });

    try {
      const response = await fetch("/handle_export__", {
        method: "POST",
        body: JSON.stringify({
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
              const [name, index] =
                children?.props?.children?.props?.children?.[0]?.props?.children?.split(
                  "-"
                );

              return (
                <div className="mb-4">
                  <HoverCard className="z-[999] relative">
                    <HoverCardTrigger>{children}</HoverCardTrigger>
                    <HoverCardPortal>
                      <HoverCardContent
                        side="right"
                        className="w-[340px] h-[196px] overflow-hidden"
                      >
                        {/* <AspectRatio ratio={16 / 9} className="bg-muted "> */}
                        <iframe
                          className="frame"
                          src={`/iframe__/${name}/${index}`}
                        ></iframe>
                        {/* </AspectRatio> */}
                      </HoverCardContent>
                    </HoverCardPortal>
                  </HoverCard>
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
