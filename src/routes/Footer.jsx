import logo from "../assets/blacklogo.png";
import FooterStyle from "./FooterStyle.module.css";
import githubLogo from "../assets/github-mark-white.png";
import patreonLogo from "../assets/patreon-white.png";
import xlogo from "../assets/xlogo.png";
import instalogo from "../assets/instalogo.png";
import artlogo from "../assets/artlogo.png";
function Footer() {
  return (
    <>
      <footer>
        <div className={FooterStyle.footCont}>
          <div className={FooterStyle.leftDiv}>
            <img src={logo} alt="SKRRRKID" />
          </div>
          <div className={FooterStyle.contDiv}>
            <button>About</button>
            <button>Projects</button>
          </div>
          <div className={FooterStyle.secondLast}>
            <ul className={FooterStyle.headerlinks}>
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
          </div>
          <div className={FooterStyle.stack}>
            <p>Extra</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
