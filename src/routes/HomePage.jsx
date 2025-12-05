import React from "react";
import Homepage from "./Hompage.module.css";
import Header from "./Header.jsx";
import Ticker from "./Ticker.jsx";
import Footer from "./Footer.jsx";
import Tooltips from "./Tooltips.jsx";
import Contact from "./elements/Contact.jsx";
import { useState } from "react";
import ProjectCards from "./elements/ProjectCards.jsx";
import Home from "./Home.jsx";
import Project from "./Projects";
import AboutMe from "./AboutMe";

function HomePage() {
  const [page, setPage] = useState("home");

  if (page === "contact") {
    return <Contact closeCont={() => setPage("home")} />;
  }

  return (
    <>
      <div className={Homepage.mainCon}>
        {page === "home" && <Home />}
        {page === "about" && <AboutMe />}
        {page === "projects" && <Project />}
        <Footer
          page={page}
          setPage={setPage}
          onContactClick={() => setPage("contact")}
        />
      </div>

      <Tooltips />
    </>
  );
}

export default HomePage;
