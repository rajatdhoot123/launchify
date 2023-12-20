function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateRootPage = ({ components }) => {
  return `

${components.reduce((acc, { item_id, varient }) => {
  return `${acc} \n import ${capitalizeFirstLetter(
    item_id
  )} from "@/app/components/${item_id}";`;
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
