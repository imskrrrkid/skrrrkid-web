import Projecter from "./Project.module.css";
// import ProjectThumb from "./elements/ProjectThumb";
// function Project() {
//   return (
//     <>
//       <div className={Projecter.home}>
//         <div className={Projecter.topTitle}>
//           <h1>Projects</h1>
//         </div>
//         <div className={Projecter.catalog}>
//           <ProjectThumb />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Project;

import { useState } from "react";
import ProjectThumb from "./elements/ProjectThumb";
import ProjectCards from "./elements/ProjectCards";
import Project3D from "./elements/Project3D";

function Projects() {
  const [screen, setScreen] = useState("thumb");

  return (
    <>
      <div className={Projecter.home}>
        {screen === "thumb" && (
          <ProjectThumb
            openGames={() => setScreen("games")}
            open3D={() => setScreen("3d")}
          />
        )}

        {screen === "games" && (
          <ProjectCards closeCont={() => setScreen("thumb")} />
        )}

        {screen === "3d" && <Project3D closeCont={() => setScreen("thumb")} />}
      </div>
    </>
  );
}

export default Projects;
