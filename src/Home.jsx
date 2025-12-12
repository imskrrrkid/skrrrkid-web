import HomeCss from "./HomeCss.module.css";
import logo from "./assets/blacklogo.png";
import inst from "./assets/instalogo.png";
import x from "./assets/xlogo.png";
import patreon from "./assets/pat.png";
import art from "./assets/artlogo.png";
import git from "./assets/git.png";

function Home() {
  return (
    <>
      <header>
        <div className={HomeCss.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={HomeCss.navbut}>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Work</button>
            </li>
            <li>
              <button>Blogs</button>
            </li>
          </ul>
        </div>
        <div className={HomeCss.links}>
          <ul>
            {/* <li>
              <img src={"#"} alt="Youtube" />
            </li>*/}
            <li>
              <a href={"https://www.instagram.com/imskrrrkid/"}>
                <img src={inst} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href={"https://x.com/imskrrrkid"}>
                <img src={x} alt="X" />
              </a>
            </li>
            <li>
              <a href={"https://patreon.com/imskrrrkid"}>
                <img src={patreon} alt="Patreon" />
              </a>
            </li>
            <li>
              <a href={"https://artstation.com/imskrrrkid"}>
                <img src={art} alt="Artstation" />
              </a>
            </li>
            <li>
              <a href={"https://github.com/imskrrrkid"}>
                <img src={git} alt="Github" />
              </a>
            </li>
          </ul>
        </div>
        <div className={HomeCss.buttons}>
          <button className={HomeCss.resume}>RESUME</button>
          <button>CONTACT</button>
        </div>
      </header>
    </>
  );
}

export default Home;
