"use client";
import Select from "@/app/components/__select/varient-1";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { TextFieldInput, TextFieldRoot } from "@radix-ui/themes";

const FloterIcon = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
    <path d="M16 5l3 3"></path>
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path>
  </svg>
);

const Floater = ({ setState, components = [], ga_id }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleExport = async () => {
    const response = await fetch("/handle_export__", {
      method: "POST",
      body: JSON.stringify({
        ga_id,
        components: components.map(({ selected, key }) => ({
          name: key,
          varient: selected,
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
  };

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        router.replace("/?floater=true");
      }
    }
  }, [router]);

  if (searchParams.get("floater")) {
    return (
      <button
        onClick={() => router.replace("/", { scroll: false })}
        className="z-20 bottom-10 fixed right-10 shadow-2xl p-5 rounded-full text-xs font-bold bg-[#F53855]"
      >
        <FloterIcon className="text-white text-xl md:text-2xl" />
      </button>
    );
  }

  const handleChange = (value, index, key) => {
    setState((prev) => ({
      ...prev,
      components: prev.components.map((comp, findex) =>
        findex === index ? { ...comp, selected: value } : comp
      ),
    }));

    router.push(`#${key}`);
    if (typeof navigator !== "undefined") {
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        router.replace("/?floater=true");
      }
    }
  };
  return (
    <div className="z-20 fixed md:top-1/2 md:right-4  md:transform  md:-translate-y-1/2 w-full md:w-3/12 md:h-[80vh] h-full bg-white rounded-lg shadow-xl border border-gray-200 p-5 space-y-6 flex flex-col justify-between">
      <button
        className="right-4 absolute cursor-pointer"
        onClick={() => router.replace("/?floater=true", { scroll: false })}
      >
        <CloseIcon />
      </button>
      <div className="flex-1 space-y-4">
        <div className="space-y-2">
          {components.map(({ key, varients, title, selected }, index) => (
            <Fragment key={key}>
              <div className="text-sm font-bold">{title}</div>
              <Select
                handleChange={(val) => handleChange(val, index, key)}
                value={selected}
                title={title}
                list={Object.keys(varients)}
              />
            </Fragment>
          ))}
        </div>
        <div className="space-y-2">
          <div className="text-sm font-bold">Google Analytics</div>
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
      </div>
      <div className="text-center">
        <button
          onClick={handleExport}
          className="font-bold bg-[#F53855] w-full text-white p-2 rounded-lg"
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Floater;
