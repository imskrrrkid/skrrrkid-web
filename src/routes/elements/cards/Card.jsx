import projectcardcss from "../../elements/ProjectCars.module.css";

function Card({ titleName, paraInfo, isDisabled, imgSource, proLink }) {
  return (
    <>
      <div className={projectcardcss.card}>
        <div className={projectcardcss.inCard}>
          <div className={projectcardcss.cardImg}>
            <img
              src={imgSource}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
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
            {proLink && (
              <button
                disabled={isDisabled}
                onClick={() => window.open(proLink, "_blank")}
              >
                See Project
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
