import AboutMe from "./AboutMe";
import Home from "./Home";
import Homepage from "./Hompage.module.css";
import { useState } from "react";

function Container() {
  const [page, setPage] = useState("home");
  const toggleAbout = () => {
    setPage(page === "about" ? "home" : "about");
  };

  return (
    <>
      <div className={Homepage.container}>
        <div className={Homepage.left}>
          {page === "home" && <Home />}
          {page === "about" && <AboutMe />}
        </div>
        <div className={Homepage.right}>
          <ul>
            <li>
              <button onClick={toggleAbout}>
                {page === "about" ? "Home" : "About"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Container;
