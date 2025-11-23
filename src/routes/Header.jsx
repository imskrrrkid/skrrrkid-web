import headerlogo from "../assets/eagle-kid copy white.png";
import githubLogo from "../assets/github-mark-white.png";
import patreonLogo from "../assets/patreon-white.png";
import xlogo from "../assets/xlogo.png";
import instalogo from "../assets/instalogo.png";
import artlogo from "../assets/artlogo.png";
import Homepage from "./Hompage.module.css";
import { ToastContainer, toast } from "react-toastify";
import Scrambler from "scrambling-text";

function Header() {
  const scrambler = new Scrambler();
  const handleScramble = (text) => {
    document.getElementById("contactt").textContent = text;
  };

  scrambler.scramble("CONTACT", handleScramble);

  const customId = "custom-id-yes";
  const botRight = () => {
    toast.error("Use social media until this section is done", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#fdf4da",
        color: "black",
      },
      toastId: customId,
      closeOnClick: true,
      position: "bottom-center",
      hideProgressBar: true,
    });
  };

  return (
    <>
      <header>
        <a href="https://www.skrrrkid.xyz/">
          <img src={headerlogo} className={Homepage.headerlogo} />{" "}
        </a>
        <ul className={Homepage.headerlinks}>
          <li>
            <a
              href="https://github.com/imskrrrkid"
              data-tooltip-id="tt-github"
              data-tooltip-content="Github Profile"
              data-tooltip-place="bottom"
            >
              <img src={githubLogo} />
            </a>
          </li>
          <li>
            <a
              href="https://patreon.com/imskrrrkid"
              data-tooltip-id="tt-patreon"
              data-tooltip-content="Patreon Page"
              data-tooltip-place="bottom"
            >
              <img src={patreonLogo} />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/imskrrrkid"
              data-tooltip-id="tt-x"
              data-tooltip-content="X (Twitter) Profile"
              data-tooltip-place="bottom"
            >
              <img src={xlogo} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/imskrrrkid"
              data-tooltip-id="tt-insta"
              data-tooltip-content="Instagram Profile"
              data-tooltip-place="bottom"
            >
              {" "}
              <img src={instalogo} />
            </a>
          </li>
          <li>
            <a
              href="https://artstation.com/imskrrrkid"
              data-tooltip-id="tt-art"
              data-tooltip-content="Artstation Profile"
              data-tooltip-place="bottom"
            >
              <img src={artlogo} />
            </a>
          </li>
        </ul>
        <a
          href="#"
          className={Homepage.contact}
          id="contactt"
          onClick={botRight}
        >
          CONTACT
        </a>
        <ToastContainer role="alert" />
      </header>
    </>
  );
}

export default Header;
