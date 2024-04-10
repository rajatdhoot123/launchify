import { DM_Sans, Manrope } from "next/font/google";
import Footer from "./components/Footer";
import "./styles/index.css";

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className={font.className}>{children}</div>
      </body>
    </html>
  );
};

export default layout;
