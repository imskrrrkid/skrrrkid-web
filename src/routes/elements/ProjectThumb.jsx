import ProjectCards from "./ProjectCards.jsx";
import ProjectThumbCss from "./ProjectThumb.module.css";
import code from "/src/assets/censor.png";
import { useState } from "react";
import Projects from "../Projects.jsx";
function ProjectThumb() {
  const [codePro, setCodePro] = useState("projects");

  if (codePro === "projectcards") {
    return <ProjectCards closeCont={() => setCodePro("projects")} />;
  }

  return (
    <>
      <div
        className={ProjectThumbCss.Base}
        onClick={() => setCodePro("projectcards")}
      >
        <img src={code}></img>
        <h1>GAMES</h1>
      </div>
      <div className={ProjectThumbCss.Base}>
        <img src={code}></img>
        <h1>3D</h1>
      </div>
    </>
  );
}

export default ProjectThumb;
