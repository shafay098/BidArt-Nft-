import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollButton from "../components/common/button/scrollbutton/ScrollButton";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Layout;
