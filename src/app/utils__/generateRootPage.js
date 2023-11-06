function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateRootPage = (comp) => {
  return `

${Object.entries(comp).reduce((acc, [key, varient]) => {
  return `${acc} \n import ${capitalizeFirstLetter(
    key
  )} from "@/app/components/${key}/${varient}";`;
}, "")}

export default function Home() {
      return (
        <>
          <div className="w-full overflow-scroll">
          ${Object.entries(comp).reduce((acc, [key]) => {
            return `${acc} \n <${capitalizeFirstLetter(key)} />`;
          }, "")}
          </div>
        </>
      );
    }
`;
};

export default generateRootPage;
