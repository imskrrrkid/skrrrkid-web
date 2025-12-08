import projectcardcss from "../elements/ProjectCars.module.css";
import Project from "../Projects";
import Card from "./cards/Card";
// import { useState } from "react";
import TwoFS from "../../assets/temp-data/2fs.png";

// function Project3D() {
//   const [back, setBack] = useState("project3d");
//   if (back === "project") {
//     return <Project closeCont={() => setBack("project3d")} />;
//   }

//   // const proLinked = () => {
//   //   return "https://www.patreon.com/posts/2fsquare-139034764";
//   // };

//   return (
//     <>
//       <div className={projectcardcss.mainCont}>
//         <div className={projectcardcss.mainCont}>
//           <div
//             className={projectcardcss.close}
//             onClick={() => setBack("project")}
//           >
//             <button>Back</button>
//           </div>
//         </div>

//         {/* // TODO: Add Dynamic Title and names + img which will link to data base */}
//         <div className={projectcardcss.cardslider}>
//           <Card
//             imgSource={TwoFS}
//             titleName="2FSquare"
//             paraInfo="Set inside the Garrison Sports Arena near Askari X, this venue brings a dedicated drift circuit to the city. With wide asphalt lanes, smooth flow, and technical sections, the track is built to challenge precision and control while rewarding style and consistency. Designed for high-speed slides, sharp transitions, and clean lines, 2FSquare offers the perfect playground for both casual drifters and competitive runs. Whether you’re chaining corners or pushing for maximum angle, the layout guarantees non-stop action."
//             isDisabled={false}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

function Project3D({ closeCont }) {
  return (
    <div className={projectcardcss.mainCont}>
      <div className={projectcardcss.close} onClick={closeCont}>
        <button>Back</button>
      </div>

      <div className={projectcardcss.cardslider}>
        <Card
          imgSource={TwoFS}
          titleName="2FSquare"
          paraInfo="Set inside the Garrison Sports Arena near Askari X, this venue brings a dedicated drift circuit to the city. With wide asphalt lanes, smooth flow, and technical sections, the track is built to challenge precision and control while rewarding style and consistency. Designed for high-speed slides, sharp transitions, and clean lines, 2FSquare offers the perfect playground for both casual drifters and competitive runs. Whether you’re chaining corners or pushing for maximum angle, the layout guarantees non-stop action."
          isDisabled={false}
        />
      </div>
    </div>
  );
}

export default Project3D;
