import projectcardcss from "../../elements/ProjectCars.module.css";

function Card({ titleName, paraInfo }) {
  return (
    <>
      <div className={projectcardcss.card}>
        <div className={projectcardcss.inCard}>
          <div className={projectcardcss.cardImg}>
            <img src="https://picsum.photos/300/300"></img>
          </div>

          <div className={projectcardcss.cardInfo}>
            <div className={projectcardcss.cardInfoTitle}>
              <h2>{titleName}</h2>
            </div>
            <div className={projectcardcss.cardInfoPara}>
              <p>{paraInfo}</p>
            </div>
          </div>

          <div className={projectcardcss.cardBtn}>
            <button>See Project</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
