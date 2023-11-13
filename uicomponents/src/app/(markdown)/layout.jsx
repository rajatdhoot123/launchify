import "../../markdown.css";
const MarkdownLayout = ({ children }) => {
  return (
    <>
      <div className="markdown container mx-auto p-5">{children}</div>
    </>
  );
};

export default MarkdownLayout;
