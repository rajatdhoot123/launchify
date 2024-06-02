import { updateItemId } from "./helper";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateRootPage = ({ components, copywriting_components = [] }) => {
  const modified_component = updateItemId(components).filter(
    (items) => items.item_id !== "chatbot"
  );

  return `

${modified_component
  .filter(({ appearedPreviously }) => !appearedPreviously)
  .reduce((acc, { updatedName, export_path }) => {
    return `${acc} \n import ${capitalizeFirstLetter(
      updatedName
    )} from "${export_path[0].replace("src", "@")}";`;
  }, "")}

export default function Home() {
      return (
        <>
          <div className="w-full overflow-scroll space-y-12">
          ${modified_component.reduce((acc, { updatedName }) => {
            return `${acc} \n <${capitalizeFirstLetter(updatedName)} />`;
          }, "")}
          </div>
        </>
      );
    }
`;
};

export default generateRootPage;
