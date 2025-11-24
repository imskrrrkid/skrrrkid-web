import ProjectThumbCss from "./ProjectThumb.module.css";
import code from "/Projects/Codes/skrrrkid/website/src/assets/censor.png";
function ProjectThumb() {
  return (
    <>
      <div className={ProjectThumbCss.Base}>
        <img src={code}></img>
        <h1>CODE</h1>
      </div>
      <div className={ProjectThumbCss.Base}>
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
