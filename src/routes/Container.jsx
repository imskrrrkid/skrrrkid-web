// Added localStorage to store current page state.
// So on refresh it avoid loading default component.

import AboutMe from "./AboutMe";
import Home from "./Home";
import Homepage from "./Hompage.module.css";
import { useState } from "react";
import Project from "./Projects";

function Container() {
  const [page, setPage] = useState(
    localStorage.getItem("currentPage") || "home",
  );

  // const changePage = (newPage) => {
  //   setPage(newPage);
  //   localStorage.setItem("currentPage", newPage);
  // };

  // const toggleAbout = () => {
  //   setPage(page === "about" ? "home" : "about");
  // };

  return (
    <>
      <div className={Homepage.container}>
        <div className={Homepage.left}>
          {page === "home" && <Home />}
          {page === "about" && <AboutMe />}
          {page === "projects" && <Project />}
        </div>
        {/* <div className={Homepage.right}>
          <ul>
            <li>
              <button
                onClick={() => changePage(page === "about" ? "home" : "about")}
              >
                {page === "about" ? "Home" : "About"}
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  changePage(page === "projects" ? "home" : "projects")
                }
              >
                {page === "projects" ? "Home" : "Projects"}
              </button>
            </li>
          </ul>
        </div>*/}
      </div>
    </>
  );
}

export default Container;
