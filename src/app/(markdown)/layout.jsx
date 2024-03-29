import "../../markdown.css";
import NavBar from "@/app/landingcomponent/navbar/variant-2";
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
