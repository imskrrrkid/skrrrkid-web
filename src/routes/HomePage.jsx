import React from "react";
import Homepage from "./Hompage.module.css";
import Header from "./Header.jsx";
import Ticker from "./Ticker.jsx";
import Footer from "./Footer.jsx";
import Container from "./Container.jsx";
import Tooltips from "./Tooltips.jsx";
import Contact from "./elements/Contact.jsx";
// import { useState } from "react";
import ProjectCards from "./elements/ProjectCards.jsx";

function HomePage() {
  // const [page, setPage] = useState("home");

  // if (page === "contact") {
  //   return <Contact closeCont={() => setPage("home")} />;
  // }

  return (
    <>
      <div className={Homepage.mainCon}>
        {/* <Ticker />*/}
        {/* <Header onContactClick={() => setPage("contact")} />*/}
        <Container />
        <Footer />
      </div>

      <Tooltips />
    </>
  );
}

export default HomePage;
