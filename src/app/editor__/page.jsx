"use client";
import { Puck, usePuck } from "@measured/puck";
import "@measured/puck/puck.css";
import { COMPONENTS_ARRAY, FLOATER_SELECT } from "@/app/constants__/floater";

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
    render: ({ children, ...rest }) => {
      return <div>{children}</div>;
    },
  },
};

const CustomHeader = ({ onPublish }) => {
  const { appState, dispatch } = usePuck();

  return (
    <header
      className="w-full flex flex-wrap p-6 items-center bg-white border border-gray-300 z-50"
      onClick={() => dispatch({ type: "setUi", ui: { itemSelector: null } })}
    >
      <span style={{ fontWeight: 600 }}>Custom UI example </span>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <div>
          <button onClick={() => onPublish(appState.data)}>Publish</button>
        </div>
      </div>
    </header>
  );
};

// Render Puck editor
function Editor() {
  const save = async (data) => {
    const components = data.content.reduce((acc, current) => {
      const [item_id, variant] = current.type.split("-");
      console.log({ variant, item_id });
      return [
        ...acc,
        { item_id: item_id, variant: `variant-${variant}`, key: item_id },
      ];
    }, []);

    const response = await fetch("/handle_export__", {
      method: "POST",
      body: JSON.stringify({
        ga_id: "",
        crisp_id: "",
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
      renderHeaderActions={() => <div>Click Publish to Export Code</div>}
      headerTitle="Drag and Drop Components"
      config={config}
      data={initialData}
      onPublish={save}
    />
  );
}

export default Editor;
