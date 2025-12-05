import projectcardcss from "../elements/ProjectCars.module.css";
import Project from "../Projects";
import Card from "./cards/Card";
import { useState } from "react";
function ProjectCards() {
  const [back, setBack] = useState("projectcards");
  if (back === "project") {
    return <Project closeCont={() => setBack("projectcards")} />;
  }
  const proLinked = () => {
    return "#";
  };
  return (
    <>
      <div className={projectcardcss.mainCont}>
        {/* Do no Delete this comment*/}
        {/* <div
          className={projectcardcss.close}
          onClick={() => setBack("project")}
        >
          <button>Back</button>
        </div>*/}

        <div className={projectcardcss.cardslider}>
          {/* // TODO: Add Dynamic Title and names + img which will link to data base */}
          <Card
            titleName="DPT"
            paraInfo="DPT is an horror first person game about corrupt ceo of small private company (DPT)."
            isDisabled={true}
            proLink={proLinked()}
          />
        </div>
      </div>
    </>
  );
}
export default ProjectCards;
