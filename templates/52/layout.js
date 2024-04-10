import React from "react";
import { Poppins, Sora } from "next/font/google";
import "./styles/index.css";

const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={sora.className}>
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

export default layout;
