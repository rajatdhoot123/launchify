"use client";
import { useRouter } from "next/navigation";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDrag, useDrop } from "react-dnd";
import { logEvent } from "@/app/utils__/events";
import Loader from "@/app/components/__loader/loader";
import { useSession } from "next-auth/react";

import OptionPopover from "@/app/components/__popover";
import MoreFunctionality from "@/app/components/__more_functionality";
import DialogComponent from "@/app/components/__dialog";
import { codeGenerate } from "@/app/api/code-generation__/code-generate";
import { updateCopywriting } from "@/app/api/code-generation__/update-copywriting";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CaretSortIcon, Cross1Icon, ReloadIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

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
      <Button variant="link" className="flex-shrink-0">
        Copy Writing
      </Button>
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
      <>
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
                      <Button variant="link">Show Code</Button>
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
        <Separator />
      </>
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

  const { theme, setTheme } = useTheme();

  const [localTheme, setLocalTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme, setTheme]);

  return (
    <ScrollArea className="h-full w-full rounded-md border pb-20">
      <Cross1Icon
        onClick={toggleHamburger}
        className="absolute right-4 top-4 cursor-pointer"
      />
      <div className="border w-full bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 space-y-4 p-5">
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
        <CardHeader className="p-2">Select Theme</CardHeader>
        <CardContent className="p-2">
          <RadioGroup
            value={localTheme}
            onValueChange={(val) => setLocalTheme(val)}
            className="flex overflow-scroll"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="r1" />
              <Label htmlFor="r1">Dark</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="r2" />
              <Label htmlFor="r2">Light</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pink" id="r3" />
              <Label htmlFor="r3">Pink</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
      <Card className="p-2 m-5">
        <CardContent className="p-2">
          <Collapsible
            open={collapsible.components}
            onOpenChange={(open) => setCollapsible({ components: open })}
          >
            <div className="space-y-2 justify-between flex">
              <MoreFunctionality setState={setState} components={components}>
                Add/Remove Components
              </MoreFunctionality>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <CaretSortIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
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
      </Card>
      <Card className="p-2 m-5">
        <CardHeader className="p-2">
          <CardTitle>Integrations</CardTitle>
          <CardDescription>Select your integrations</CardDescription>
        </CardHeader>
        <CardContent className="p-2">
          <div className="space-y-4 mt-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="ga_id">Google Analytics</Label>
              <Input
                placeholder="Enter GA Id"
                onChange={(e) =>
                  setState((prev) => ({ ...prev, ga_id: e.target.value }))
                }
                type="text"
                id="ga_id"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="crisp_id">Crisp Support</Label>
              <Input
                placeholder="Enter Crisp Id"
                onChange={(e) =>
                  setState((prev) => ({ ...prev, crisp_id: e.target.value }))
                }
                type="text"
                id="crisp_id"
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
          </div>
        </CardContent>
      </Card>
      <Card className="p-2 m-5">
        <CardContent className="p-2 space-y-4">
          <CardHeader className="p-2">
            <CardTitle>Page</CardTitle>
            <CardDescription>Select your page</CardDescription>
          </CardHeader>
          {pages.map((feature, index) => (
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
        </CardContent>
      </Card>
      <div className="fixed bottom-0 w-full p-5">
        <div className="text-center">
          <small className="font-semibold text-center">
            With copywriting export can take 3-5 mins
          </small>
          <div className="flex gap-6">
            <Button
              className="w-1/2"
              block
              disabled={loader.export}
              onClick={handleExport}
            >
              {loader.export && (
                <span className="m-auto px-2">
                  <Loader />
                </span>
              )}
              Export
            </Button>
            <Button
              className="w-1/2"
              disabled={loader.export_wih_copywriting}
              onClick={handleExportWithCopywriting}
            >
              {loader.export_wih_copywriting && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              With Copywriting
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Floater;
