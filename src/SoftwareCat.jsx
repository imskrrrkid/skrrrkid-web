import SoftCat from "./SoftwareCat.module.css";
import gameimg from "./assets/gamedevimg.png";

function SoftwareCat({ setPage }) {
  return (
    <>
      <div className={SoftCat.mainBody}>
        <div className={SoftCat.back}>
          <button onClick={() => setPage("home")}>Back</button>
        </div>
        <div className={SoftCat.cardmenu}>
          <div className={SoftCat.card}>
            <img src={gameimg} />
            <h2>O2OLS</h2>
            <p>One To One Location Share Open Source Platform.</p>
            <a href="https://github.com/imskrrrkid/O2OLS">See Project</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareCat;
