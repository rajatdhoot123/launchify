import "../../markdown.css";
import NavBar from "@/app/__landingcomponents__/navbar/varient-2";
import Footer from "@/app/__landingcomponents__/footer/varient-3";
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
