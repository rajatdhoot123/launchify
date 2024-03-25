function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateRootPage = ({ components, copywriting_components }) => {
  return `

${components.reduce((acc, { item_id, variant }) => {
  const select_comp_index = copywriting_components.findIndex(
    (file) => file.item_id === item_id
  );
  return `${acc} \n import ${capitalizeFirstLetter(
    item_id
  )} from "@/app/components/${item_id}/${
    select_comp_index ? "index" : variant
  }";`;
}, "")}

export default function Home() {
      return (
        <>
          <div className="w-full overflow-scroll space-y-12">
          ${components.reduce((acc, { item_id }) => {
            return `${acc} \n <${capitalizeFirstLetter(item_id)} />`;
          }, "")}
          </div>
        </>
      );
    }
`;
};

export default generateRootPage;
