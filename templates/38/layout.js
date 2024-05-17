import React from "react";
import { DM_Sans } from "next/font/google";
import "./styles/globals.css";


const DMSans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={DMSans.className}>
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

export default layout;
