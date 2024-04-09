import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
