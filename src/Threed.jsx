import threedee from "./Threedee.module.css";
import gameimg from "./assets/gamedevimg.png";

function Threed({ setPage }) {
  return (
    <>
      <div className={threedee.mainBody}>
        <div className={threedee.back}>
          <button onClick={() => setPage("home")}>Back</button>
        </div>
        <div className={threedee.cardmenu}>
          <div className={threedee.card}>
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

export default Threed;
