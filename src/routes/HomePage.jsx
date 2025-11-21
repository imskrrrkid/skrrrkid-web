import Homepage from "./Hompage.module.css";
import Scrambler from "scrambling-text";
import headerlogo from "../assets/eagle-kid copy white.png";
import githubLogo from "../assets/github-mark-white.png";
import patreonLogo from "../assets/patreon-white.png";
import xlogo from "../assets/xlogo.png";
import instalogo from "../assets/instalogo.png";
import artlogo from "../assets/artlogo.png";
function HomePage() {
  const scrambler = new Scrambler();
  const scrambler2 = new Scrambler();
  const scramblerMainName = new Scrambler();

  const handleScramble = (text) => {
    document.getElementById("contactt").textContent = text;
  };
  const handleScrambleC = (text) => {
    document.getElementById("copyKid").textContent = text;
  };
  const handleScrambleMainName = (text) => {
    document.getElementById("mainName").textContent = text;
  };
  scrambler.scramble("CONTACT", handleScramble);
  scrambler2.scramble("(C) SKRRRKID 2025", handleScrambleC);
  scramblerMainName.scramble("Muhammad Yasir", handleScrambleMainName);
  // scrambler.scramble("(C) SKRRRKID 2025", handleScramble);

  return (
    <>
      <div className={Homepage.mainCon}>
        <div className={Homepage.news}>
          <div className={Homepage.ticker}>
            <span>🚨Website under construction</span>
            <span>🔥 But you can navigate :D</span>
            <span>📢 You can see my social media accounts till then.</span>

            {/* Duplicate for smooth loop */}
            <span>🚨 Website under construction</span>
            <span>🔥 But you can navigate :D</span>
            <span>📢 You can see my social media accounts till then.</span>
          </div>
        </div>

        <header>
          <a href="https://www.skrrrkid.xyz/">
            <img src={headerlogo} className={Homepage.headerlogo} />{" "}
          </a>
          <ul className={Homepage.headerlinks}>
            <li>
              <a href="https://github.com/imskrrrkid">
                <img src={githubLogo} />
              </a>
            </li>
            <li>
              <a href="https://patreon.com/imskrrrkid">
                <img src={patreonLogo} />
              </a>
            </li>
            <li>
              <a href="https://x.com/imskrrrkid">
                <img src={xlogo} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/imskrrrkid">
                {" "}
                <img src={instalogo} />
              </a>
            </li>
            <li>
              <a href="https://artstation.com/imskrrrkid">
                <img src={artlogo} />
              </a>
            </li>
          </ul>
          <a href="#" className={Homepage.contact} id="contactt">
            CONTACT
          </a>
        </header>

        <div className={Homepage.container}>
          <div className={Homepage.left}>
            <img src={headerlogo} />
            <div className={Homepage.mainTitle}>
              <h1 id="mainName">Muhammad Yasir</h1>
              <h6>SKRRRKID</h6>
              <div className={Homepage.major}>
                <h2>Software Eng.</h2>
                <h2>Game Dev.</h2>
                <h2>3D Artist</h2>
              </div>
            </div>
          </div>
          <div className={Homepage.right}>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Extra</a>
              </li>
            </ul>
          </div>
        </div>

        <footer>
          <p id="copyKid"></p>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
