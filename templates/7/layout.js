import { Manrope } from "next/font/google";
import "./styles/globals.css";

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
