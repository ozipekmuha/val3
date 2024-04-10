import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Cards from "./cards";

function BasicExample() {
  return (
    <div>
      <Header></Header>
      <h1>Blog</h1>
      <Cards />
      <Footer></Footer>
    </div>
  );
}
export default BasicExample;
