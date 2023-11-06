function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateRootPage = ({ components }) => {
  return `

${components.reduce((acc, { name, varient }) => {
  return `${acc} \n import ${capitalizeFirstLetter(
    name
  )} from "@/app/components/${name}/${varient}";`;
}, "")}

export default function Home() {
      return (
        <>
          <div className="w-full overflow-scroll">
          ${components.reduce((acc, { name }) => {
            return `${acc} \n <${capitalizeFirstLetter(name)} />`;
          }, "")}
          </div>
        </>
      );
    }
`;
};

export default generateRootPage;
