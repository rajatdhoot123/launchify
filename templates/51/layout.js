import React from "react";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={`${poppins.className} space-y-16`}>{children}</div>
      </body>
    </html>
  );
}

export default layout;
