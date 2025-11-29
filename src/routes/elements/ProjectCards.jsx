import projectcardcss from "../elements/ProjectCars.module.css";
import Card from "./cards/Card";

function ProjectCards() {
  return (
    <>
      <div className={projectcardcss.mainCont}>
        {/* // TODO: Add Dynamic Title and names + img which will link to data base */}
        <Card
          titleName="DPT"
          paraInfo="DPT is an horror first person game about corrupt ceo of small private company (DPT)."
          isDisabled={true}
        />
      </div>
    </>
  );
}

export default ProjectCards;
