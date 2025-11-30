import projectcardcss from "../elements/ProjectCars.module.css";
import Project from "../Projects";
import Card from "./cards/Card";
import { useState } from "react";

function Project3D() {
  const [back, setBack] = useState("project3d");
  if (back === "project") {
    return <Project closeCont={() => setBack("project3d")} />;
  }
  return (
    <>
      <div className={projectcardcss.mainCont}>
        {/* <div
          className={projectcardcss.close}
          onClick={() => setBack("project")}
        >
          <button>Back</button>
        </div>*/}

        {/* // TODO: Add Dynamic Title and names + img which will link to data base */}
        <div className={projectcardcss.cardslider}>
          <Card
            titleName="2FSquare"
            paraInfo="2FSquare is...."
            isDisabled={true}
          />
          <Card
            titleName="2FSquare"
            paraInfo="2FSquare is...."
            isDisabled={true}
          />
          <Card
            titleName="2FSquare"
            paraInfo="2FSquare is...."
            isDisabled={true}
          />
          <Card
            titleName="2FSquare"
            paraInfo="2FSquare is...."
            isDisabled={true}
          />
          <Card
            titleName="2FSquare"
            paraInfo="2FSquare is...."
            isDisabled={true}
          />
          <Card
            titleName="2FSquare"
            paraInfo="2FSquare is...."
            isDisabled={true}
          />
        </div>
      </div>
    </>
  );
}
export default Project3D;
