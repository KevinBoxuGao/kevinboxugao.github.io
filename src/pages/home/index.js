import React from "react";
import Scrollbar from "./scrollbar";
import Header from "./header";
import Portfolio from "./portfolio";
import Footer from "./footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Portfolio />
      <Footer />
      <Scrollbar />
    </div>
  );
}

export default Home;
