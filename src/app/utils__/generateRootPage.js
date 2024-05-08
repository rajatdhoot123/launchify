function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateItemId(arr) {
  const itemCount = {};
  return arr.map((item) => {
    const key = item.key;
    if (!itemCount[key]) itemCount[key] = 0;
    itemCount[key]++;

    return {
      ...item,
      updated_item_id: `${key}${itemCount[key] > 1 ? itemCount[key] : ""}`,
    };
  });
}

const generateRootPage = ({ components, copywriting_components = [] }) => {
  const modified_component = updateItemId(components);

  return `

${modified_component.reduce((acc, { item_id, variant, updated_item_id }) => {
  const select_comp_index = copywriting_components.findIndex(
    (file) => file.item_id === item_id
  );
  return `${acc} \n import ${capitalizeFirstLetter(
    updated_item_id
  )} from "@/app/components/${item_id}/${
    select_comp_index === -1 ? variant : "index"
  }";`;
}, "")}

export default function Home() {
      return (
        <>
          <div className="w-full overflow-scroll space-y-12">
          ${modified_component.reduce((acc, { updated_item_id }) => {
            return `${acc} \n <${capitalizeFirstLetter(updated_item_id)} />`;
          }, "")}
          </div>
        </>
      );
    }
`;
};

export default generateRootPage;
