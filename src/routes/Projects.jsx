import Projecter from "./Project.module.css";
import ProjectThumb from "./elements/ProjectThumb";
function Project() {
  return (
    <>
      <div className={Projecter.home}>
        <div className={Projecter.topTitle}>
          <h1>Check what you like...</h1>
        </div>
        <div className={Projecter.catalog}>
          <ProjectThumb />
        </div>
      </div>
    </>
  );
}

export default Project;
