"use client";
import Select from "@/app/components/__select/varient-1";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import { useDrag, useDrop } from "react-dnd";
import { logEvent } from "@/app/utils__/events";
import { useSession } from "next-auth/react";

const ItemType = "ITEM";

const ListCard = ({
  moveItem,
  selected,
  title,
  item_id,
  varients,
  index,
  handleChange,
}) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

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
      className="p-2 border border-gray-200 rounded-md cursor-move space-y-2"
    >
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
        <div className="text-sm font-bold">{title}</div>
      </div>
      <Select
        handleChange={(val) => handleChange(val, index, item_id)}
        value={selected}
        title={title}
        list={Object.keys(varients)}
      />
    </div>
  );
};

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

const Floater = ({ setState, components = [], ga_id, next_auth }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleExport = async () => {
    logEvent("export_clicked", { event_name: "export_clicked" });
    const response = await fetch("/handle_export__", {
      method: "POST",
      body: JSON.stringify({
        ga_id,
        next_auth,
        components: components.map(({ selected, item_id }) => ({
          item_id,
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
      if (typeof navigator !== "undefined") {
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          router.replace("/?floater=true");
        }
      }
    },
    [router, setState]
  );

  const renderList = useCallback(
    (props, index) => {
      return (
        <ListCard
          handleChange={handleChange}
          index={index}
          moveItem={moveItem}
          {...props}
        />
      );
    },
    [handleChange, moveItem]
  );

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

  const is_disabled = !["rajatdhoot123@gmail.com"].includes(
    session?.user?.email
  );

  return (
    <div className="z-20 fixed md:top-1/2 md:right-4  md:transform  md:-translate-y-1/2 w-full md:w-3/12 md:h-[80vh] h-full bg-white rounded-lg shadow-xl border border-gray-200 p-5 space-y-6 flex flex-col justify-between">
      <button
        className="right-4 absolute cursor-pointer"
        onClick={() => router.replace("/?floater=true", { scroll: false })}
      >
        <CloseIcon />
      </button>
      <div className="flex-1 space-y-4 overflow-y-scroll py-2">
        <div className="space-y-2">
          {components.map(({ item_id, varients, title, selected }, index) => {
            return renderList({ item_id, varients, title, selected }, index);
          })}
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
        <div className="border p-2 rounded-md bg-gradient-to-r from-purple-200 via-pink-200 to-red-200">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm">PRO Features</div>
            <a href="https://boilercode.app" target="_blank" className="font-bold text-sm my-2 bg-red-300 p-2 rounded-md">Boilercode App</a>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center mb-4">
              <input
                disabled={is_disabled}
                onChange={(e) => {
                  console.log(e.target.value);
                  setState((prev) => ({
                    ...prev,
                    next_auth: e.target.value === "true" ? false : true,
                  }));
                }}
                type="checkbox"
                value={next_auth}
                checked={next_auth}
                className={`w-4 h-4 text-blue-600  border-gray-300 rounded ${
                  is_disabled ? "bg-gray-300" : "bg-gray-100"
                }`}
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Next Auth
              </label>
            </div>
          </div>
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
