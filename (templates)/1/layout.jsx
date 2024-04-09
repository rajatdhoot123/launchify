import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={`${poppins.className} space-y-16`}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default layout;
