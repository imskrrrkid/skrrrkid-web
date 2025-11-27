import projectcardcss from "../elements/ProjectCars.module.css";

function ProjectCards() {
  return (
    <>
      <div className={projectcardcss.mainCont}>
        <div className={projectcardcss.card}>
          <div className={projectcardcss.inCard}>
            <div className={projectcardcss.cardImg}>
              <img src="https://picsum.photos/300/300"></img>
            </div>

            <div className={projectcardcss.cardInfo}>
              <div className={projectcardcss.cardInfoTitle}>
                <h2>Title XYZ</h2>
              </div>
              <div className={projectcardcss.cardInfoPara}>
                <p>This is Paragraph which include detail about Project...</p>
              </div>
            </div>

            <div className={projectcardcss.cardBtn}>
              <button>See Project</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
