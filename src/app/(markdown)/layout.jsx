import "../../markdown.css";
import NavBar from "@/app/__landingcomponents__/navbar/variant-2";
import Footer from "@/app/__landingcomponents__/footer/variant-3";
const MarkdownLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="markdown container mx-auto p-5">{children}</div>
      <Footer />
    </>
  );
};

export default MarkdownLayout;
