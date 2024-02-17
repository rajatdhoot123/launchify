"use client";
import { useRouter } from "next/navigation";
import React, { forwardRef, useCallback, useRef, useState } from "react";
import { Link, TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import { useDrag, useDrop } from "react-dnd";
import { logEvent } from "@/app/utils__/events";
import Loader from "@/app/components/__loader/loader";
import { useSession } from "next-auth/react";

import OptionPopover from "@/app/components/__popover";
import MoreFunctionality from "@/app/components/__more_functionality";
import DialogComponent from "@/app/components/__dialog";
import { codeGenerate } from "@/app/api/code-generation__/code-generate";
import { updateCopywriting } from "@/app/api/code-generation__/update-copywriting";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CaretSortIcon } from "@radix-ui/react-icons";

const ItemType = "ITEM";

const CodeGenerateButton = ({ api_ref, item_id, setLoader, loader }) => {
  return (
    <Button
      variant="ghost"
      disabled={loader}
      onClick={async () => {
        setLoader(true);
        if (!api_ref.current) {
          const open_ai_key = prompt("Enter open ai api key");
          api_ref.current = open_ai_key;
        }

        try {
          logEvent("copy_writing_clicked");
          const el = document.getElementById(item_id);
          const elementToString = el.innerHTML;

          const { choices } = await codeGenerate({
            apiKey: api_ref.current,
            text: elementToString,
          });
          const htmlWithCopy = choices[0]?.message?.content;

          el.innerHTML = htmlWithCopy
            .replace(/```/g, "")
            .replace(/(\r\n|\n|\r)/gm, "");
        } catch (err) {
          console.log(err);
        } finally {
          setLoader(false);
        }
      }}
    >
      {loader && (
        <span className="m-auto px-2">
          <Loader />
        </span>
      )}
      <Link className="flex-shrink-0">Copy Writing</Link>
    </Button>
  );
};

const ListCard = forwardRef(
  (
    {
      handleShowCode,
      moveItem,
      selected,
      title,
      item_id,
      variants,
      index,
      handleChange,
    },
    api_ref
  ) => {
    const [, ref] = useDrag({
      type: ItemType,
      item: { index },
    });

    const [loader, setLoader] = useState(false);
    const [, drop] = useDrop({
      accept: ItemType,
      drop: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveItem(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });

    return (
      <div
        key={item_id}
        ref={(node) => ref(drop(node))}
        className="rounded-md cursor-move space-y-2"
      >
        <div className="px-2"></div>
        <div className="flex items-center">
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

          <div className="flex justify-between w-full items-center">
            <div className="text-sm font-semibold flex-shrink-0">{title}</div>
            <div className="mx-5">
              <OptionPopover
                components={[
                  <DialogComponent
                    key="Show code"
                    title={title}
                    handleShowCode={handleShowCode}
                  >
                    <Link>Show Code</Link>
                  </DialogComponent>,
                  <CodeGenerateButton
                    loader={loader}
                    setLoader={setLoader}
                    item_id={item_id}
                    api_ref={api_ref}
                    key="CodeGeneration"
                  />,
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex text-sm flex-wrap gap-4">
          {Object.keys(variants).map((key) => {
            return (
              <Button
                size="sm"
                onClick={() => {
                  handleChange(key, index, item_id);
                }}
                key={key}
              >
                {key}
              </Button>
            );
          })}
        </div>
        {/* <SelectDropdown
          handleChange={(val) => {
            console.log({ val, index, item_id });
            handleChange(val, index, item_id);
          }}
          value={selected}
          title={title}
          list={Object.keys(variants)}
        /> */}
      </div>
    );
  }
);

ListCard.displayName = "ListCard";

const Floater = ({
  toggleHamburger,
  handleShowCode,
  setState,
  components = [],
  ga_id,
  premium_features,
  pages,
  crisp_id,
}) => {
  const [collapsible, setCollapsible] = useState({ components: true });
  const router = useRouter();
  const { data: session, status } = useSession();
  const ai_key = useRef("");
  const [loader, setLoader] = useState({
    export: false,
    export_wih_copywriting: false,
  });

  const handleExport = async () => {
    setLoader((prev) => ({ ...prev, export: false }));
    try {
      logEvent("export_clicked", { event_name: "export_clicked" });
      const response = await fetch("/handle_export__", {
        method: "POST",
        body: JSON.stringify({
          ga_id,
          crisp_id,
          pages,
          premium_features,
          components: components.map(({ selected, item_id }) => ({
            key: item_id,
            item_id,
            variant: selected,
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
    } finally {
      setLoader((prev) => ({ ...prev, export: false }));
    }
  };

  const handleExportWithCopywriting = async () => {
    try {
      setLoader((prev) => ({ ...prev, export_wih_copywriting: true }));
      logEvent("export_clicked", { event_name: "export_clicked" });

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
          files: components.map(({ selected, item_id }) => ({
            key: item_id,
            item_id,
            variant: selected,
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
          ga_id,
          crisp_id,
          pages,
          premium_features,
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
    } finally {
      setLoader((prev) => ({ ...prev, export_wih_copywriting: false }));
    }
  };

  const moveItem = useCallback(
    (dragIndex, dropIndex) => {
      setState((prevState) => {
        const newState = [...prevState.components]; // Create a copy of the current state
        const [movedItem] = newState.splice(dragIndex, 1); // Remove the item at dragIndex
        newState.splice(dropIndex, 0, movedItem); // Insert the item at dropIndex
        return { ...prevState, components: newState }; // Update the state with the reordered array
      });
    },
    [setState]
  );

  const handleChange = useCallback(
    (value, index, item_id) => {
      setState((prev) => ({
        ...prev,
        components: prev.components.map((comp, findex) =>
          findex === index ? { ...comp, selected: value } : comp
        ),
      }));

      router.push(`#${item_id}`);
    },
    [router, setState]
  );

  const is_premium = ["rajatdhoot123@gmail.com"].includes(session?.user?.email);

  const renderList = useCallback(
    (props, index) => {
      return (
        <ListCard
          ref={ai_key}
          is_premium={is_premium}
          key={index}
          handleChange={handleChange}
          index={index}
          moveItem={moveItem}
          {...props}
        />
      );
    },
    [handleChange, is_premium, moveItem]
  );

  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="border w-full p-2 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 space-y-4 p-5">
        <div className="flex justify-between items-center">
          <p>PRO Features</p>
          <Button variant="link">
            <a
              href="https://boilercode.app?utm_source=uiwidgets"
              target="_blank"
            >
              Boilercode App
            </a>
          </Button>
        </div>
        <Separator />
        <div className="flex items-center space-x-4">
          {premium_features.map(({ item_id, title, selected }, index) => (
            <React.Fragment key={item_id}>
              <div key={item_id} className="flex items-center space-x-2">
                <Checkbox
                  value={selected}
                  onCheckedChange={(val) =>
                    setState((prev) => ({
                      ...prev,
                      premium_features: prev.premium_features.map(
                        (feature, findex) =>
                          findex === index
                            ? {
                                ...feature,
                                selected: val,
                              }
                            : feature
                      ),
                    }))
                  }
                  id={item_id}
                />
                <label
                  htmlFor={item_id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {title}
                </label>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Card className="p-2 m-5">
        {/* <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader> */}
        <CardContent className="p-2">
          <Collapsible
            open={collapsible.components}
            onOpenChange={(open) => setCollapsible({ components: open })}
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <div className="w-full text-left font-bold flex items-center justify-between">
                <MoreFunctionality setState={setState} components={components}>
                  Add/Remove Components
                </MoreFunctionality>
                <Button variant="ghost" size="sm">
                  <CaretSortIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </div>
            </CollapsibleTrigger>

            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="space-y-4 mt-5">
                {components.map(
                  ({ item_id, variants, title, selected }, index) => {
                    return renderList(
                      {
                        item_id,
                        variants,
                        title,
                        selected,
                        handleShowCode: () => handleShowCode(index),
                      },
                      index
                    );
                  }
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter> */}
      </Card>
    </ScrollArea>
  );

  return (
    <div className="flex flex-col h-full p-5 space-y-4">
      <div className="flex justify-between items-center">
        <button className="ml-auto" onClick={toggleHamburger}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeWidth="2"
              d="M3,3 L21,21 M3,21 L21,3"
            ></path>
          </svg>
        </button>
      </div>
      <div className="overflow-scroll h-full flex-1 space-y-6">
        <div className="border p-2 rounded-md bg-gradient-to-r from-purple-200 via-pink-200 to-red-200">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm">PRO Features</div>
            <a
              href="https://boilercode.app?utm_source=uiwidgets"
              target="_blank"
              className="font-bold text-sm my-2 bg-red-300 p-2 rounded-md"
            >
              Boilercode App
            </a>
          </div>
          <Separator mb="3" size="4" />
          <div className="flex flex-wrap items-center gap-2">
            {premium_features.map((feature, index) => (
              <div
                className="flex flex-shrink-0 items-center"
                key={feature.item_id}
              >
                <input
                  disabled={!is_premium}
                  onChange={(e) => {
                    setState((prev) => ({
                      ...prev,
                      premium_features: prev.premium_features.map(
                        (feature, findex) =>
                          findex === index
                            ? {
                                ...feature,
                                selected:
                                  e.target.value === "true" ? false : true,
                              }
                            : feature
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
        </div>
        <div className="border border-gray-200 p-2 rounded-md">
          <Collapsible
            isOpen={true}
            title={
              <div className="w-full text-left font-bold flex items-center justify-between">
                <span className="">Components</span>
                <MoreFunctionality setState={setState} components={components}>
                  Add/Remove Components
                </MoreFunctionality>
              </div>
            }
          >
            <div className="space-y-4 mt-5">
              {components.map(
                ({ item_id, variants, title, selected }, index) => {
                  return renderList(
                    {
                      item_id,
                      variants,
                      title,
                      selected,
                      handleShowCode: () => handleShowCode(index),
                    },
                    index
                  );
                }
              )}
            </div>
          </Collapsible>
        </div>
        <Separator my="3" size="4" />
        <div className="border border-gray-200 p-2 rounded-md">
          <Collapsible
            title={
              <div className="w-full text-left font-bold">
                <span className="">Integrations</span>
              </div>
            }
          >
            <div className="space-y-4 mt-5">
              <div className="space-y-2">
                <div className="text-sm font-semibold">Google Analytics</div>
                <TextFieldRoot>
                  <TextFieldInput
                    onChange={(e) =>
                      setState((prev) => ({ ...prev, ga_id: e.target.value }))
                    }
                    value={ga_id}
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
                    value={crisp_id}
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
        <div className="border border-gray-200 p-2 rounded-md">
          <Collapsible
            isOpen={true}
            title={
              <div className="w-full text-left font-bold">
                <span className="">Pages</span>
              </div>
            }
          >
            <div className="flex flex-col space-y-4 mt-5">
              {pages.map((feature, index) => (
                <div
                  className="flex flex-shrink-0 items-center"
                  key={feature.item_id}
                >
                  <input
                    onChange={(e) => {
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
      <div className="m-5 text-center">
        <small className="font-semibold text-center">
          With copywriting export can take 3-5 mins
        </small>
        <div className="flex gap-6">
          <button
            disabled={loader.export}
            onClick={handleExport}
            className="font-bold bg-[#F53855] w-full text-white p-2 rounded-lg text-sm flex items-center justify-center"
          >
            {loader.export && (
              <span className="m-auto px-2">
                <Loader />
              </span>
            )}
            Export
          </button>
          <button
            disabled={loader.export_wih_copywriting}
            onClick={handleExportWithCopywriting}
            className="font-bold bg-[#F53855] w-full text-white p-2 rounded-lg text-sm flex items-center justify-center"
          >
            {loader.export_wih_copywriting && (
              <span className="m-auto px-2">
                <Loader />
              </span>
            )}
            With Copywriting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floater;
