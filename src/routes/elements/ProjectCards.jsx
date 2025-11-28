import projectcardcss from "../elements/ProjectCars.module.css";
import Card from "./cards/Card";

function ProjectCards() {
  return (
    <>
      <div className={projectcardcss.mainCont}>
        {/* // TODO: Add Dynamic Title and names + img which will link to data base */}
        <Card titleName="AAAAAA" paraInfo="Working" />
      </div>
    </>
  );
}

export default ProjectCards;
