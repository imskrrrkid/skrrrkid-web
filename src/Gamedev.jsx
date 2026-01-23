import game from "./Gamedev.module.css";
import gameimg from "./assets/gamedevimg.png";

function Gamedev({ setPage }) {
  return (
    <>
      <div className={game.mainBody}>
        <div className={game.back}>
          <button onClick={() => setPage("home")}>Back</button>
        </div>
        <div className={game.cardmenu}>
          <div className={game.card}>
            <img src={gameimg} />
            <h2>Death Prints Terror</h2>
            <p>DPT is First Person Survival game based at lahore.</p>
            <a href="https://github.com/imskrrrkid/O2OLS">See Project</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gamedev;
