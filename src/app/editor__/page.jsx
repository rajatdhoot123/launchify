"use client";
import { Puck, Render, usePuck } from "@measured/puck";
import "@measured/puck/puck.css";

import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
  PAGES,
  PREMIUM_FEATURES,
} from "@/app/constants__/floater";
import ThemeSelector from "@/app/components/__theme_selector";
import ViewDemo from "@/app/components/__view_demo";
import { forwardRef, useEffect, useReducer, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { logEvent } from "../utils__/events";
import { updateCopywriting } from "../api/code-generation__/update-copywriting";
import CopyWritingDialog from "@/app/components/__copywriting_dialog";
import Loader from "@/app/components/__loader/loader";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

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
    premium_features: PREMIUM_FEATURES,
    crisp_id: "",
    pages: PAGES,
  });
  const [isOpen, setIsOpen] = useState({ integrations: false, page: false });
  const { data: session } = useSession();
  const is_premium = ["rajatdhoot123@gmail.com"].includes(session?.user?.email);

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
                  placeholder="Email"
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
              {state.pages.map((feature, index) => (
                <div key={feature.item_id} className="flex items-center">
                  <Checkbox
                    className="mr-2"
                    id={feature.item_id}
                    readOnly
                    onCheckedChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        pages: prev.pages.map((page, findex) =>
                          findex === index
                            ? {
                                ...page,
                                selected: e,
                              }
                            : page
                        ),
                      }))
                    }
                    checked={true}
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

  const handleExportWithCopywriting = async ({
    components,
    open_ai_key,
    open_ai_prompt,
  }) => {
    const state = state_ref.current;
    try {
      setLoader((prev) => ({ ...prev, export_with_copy_writing: true }));
      logEvent("export_clicked", {
        event_name: "export_with_copywriting_clicked",
      });

      const jsx_files = await fetch("/api/get-file__", {
        method: "POST",
        body: JSON.stringify({
          files: components.map(({ variant, item_id }) => ({
            item_id,
            variant,
          })),
        }),
      });

      const jsx_code_response = await jsx_files.json();
      const open_ai_copy_writing = jsx_code_response.map(({ key, content }) =>
        updateCopywriting({
          jsx_code: content,
          use_case: open_ai_prompt,
          apiKey: open_ai_key,
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
      setLoader((prev) => ({ ...prev, export_with_copy_writing: false }));
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
                    handleExportWithCopywriting={handleExportWithCopywriting}
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
                <Button
                  disabled={loader.export}
                  onClick={() =>
                    handleExport({
                      components: modify_components(puck_data.current.content),
                    })
                  }
                  className="cursor-pointer"
                >
                  {loader.export && <Loader />}
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
        data={state.puck_state}
        onPublish={save}
      />
    </>
  );
}

export default Editor;
