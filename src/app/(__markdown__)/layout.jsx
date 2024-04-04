import "../../markdown.css";
import NavBar from "@/app/landingcomponent/navbar";
import Footer from "@/app/landingcomponent/footer/variant-3";
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
