import HomeStyle from "./Home.module.css";
import pfp from "../assets/kid.jpeg";
function Home() {
  return (
    <>
      <div className={HomeStyle.main}>
        <div className={HomeStyle.name}>
          <h1>MUHAMMAD YASIR</h1>
        </div>
        <div className={HomeStyle.titles}>
          <p>Frontend</p>
          <p>Game Dev </p>
          <p>3D Artist</p>
        </div>
        <div className={HomeStyle.bottom}>
          <div className={HomeStyle.latest}>
            <p>Not Ready yet!</p>
          </div>
          <div className={HomeStyle.pfp}>
            <img src={pfp} alt="Yasir/SKRRRKID"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
