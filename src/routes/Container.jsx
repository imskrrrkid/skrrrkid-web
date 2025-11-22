import Homepage from "./Hompage.module.css";
import headerlogo from "../assets/eagle-kid copy white.png";
import Scrambler from "scrambling-text";

function Container() {
  const scramblerMainName = new Scrambler();
  const scramblerSecName = new Scrambler();
  const scramberTitleOne = new Scrambler();
  const scramberTitleTwo = new Scrambler();
  const scramberTitleThree = new Scrambler();

  const handleScrambleMainName = (text) => {
    document.getElementById("mainName").textContent = text;
  };
  const handleScrambleSecName = (text) => {
    document.getElementById("secName").textContent = text;
  };
  const handleScrambleTitleOne = (text) => {
    document.getElementById("titleOne").textContent = text;
  };
  const handleScrambleTitleTwo = (text) => {
    document.getElementById("titleTwo").textContent = text;
  };
  const handleScrambleTitleThree = (text) => {
    document.getElementById("titleThree").textContent = text;
  };
  scramblerMainName.scramble("Muhammad Yasir", handleScrambleMainName);
  scramblerSecName.scramble("SKRRRKID", handleScrambleSecName);
  scramberTitleOne.scramble("Software Eng.", handleScrambleTitleOne);
  scramberTitleTwo.scramble("Game Dev.", handleScrambleTitleTwo);
  scramberTitleThree.scramble("3D Artist", handleScrambleTitleThree);

  return (
    <>
      <div className={Homepage.container}>
        <div className={Homepage.left}>
          <img
            src={headerlogo}
            data-tooltip-id="tt-ppc"
            data-tooltip-content="Thats me 😼"
            data-tooltip-place="bottom"
          />
          <div className={Homepage.mainTitle}>
            <h1 id="mainName" />
            <h6 id="secName" />
            <div className={Homepage.major}>
              <h2 id="titleOne" />
              <h2 id="titleTwo" />
              <h2 id="titleThree" />
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
    </>
  );
}

export default Container;
