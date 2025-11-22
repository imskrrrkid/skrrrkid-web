import React from "react";
import Homepage from "./Hompage.module.css";
import Header from "./Header.jsx";
import Ticker from "./Ticker.jsx";
import Footer from "./Footer.jsx";
import Container from "./Container.jsx";
import Tooltips from "./Tooltips.jsx";

function HomePage() {
  // Create a custom component

  return (
    <>
      <div className={Homepage.mainCon}>
        <Ticker />
        <Header />
        <Container />
        <Footer />
      </div>

      <Tooltips />
    </>
  );
}

export default HomePage;
