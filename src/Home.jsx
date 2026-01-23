import HomeCss from "./HomeCss.module.css";
import logo from "./assets/blacklogo.png";
import inst from "./assets/instalogo.png";
import x from "./assets/xlogo.png";
import patreon from "./assets/pat.png";
import art from "./assets/artlogo.png";
import git from "./assets/git.png";
import yt from "./assets/youtubeimg.png";
import blenderlogo from "./assets/blender.png";
import substance from "./assets/substancepainter.png";
import unreal from "./assets/unreal engine.png";
import photoshop from "./assets/photoshop logo.png";
import premiere from "./assets/premiere pro.png";
import after from "./assets/Aftereffects.png";
import fls from "./assets/fl studio.png";
import reactimg from "./assets/reactimg.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import workimg from "./assets/softwareimg.png";
import gameimg from "./assets/gamedevimg.png";
import threedeimg from "./assets/3dimg.png";

function Home({ setPage }) {
  return (
    <>
      {" "}
      <header>
        <div className={HomeCss.headerCont}>
          <div className={HomeCss.logo}>
            {" "}
            <img src={logo} alt="logo" />
          </div>
          {/* <div className={HomeCss.navbut}>
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
          </div>*/}
          <div className={HomeCss.links}>
            <ul>
              {/* <li>
              <img src={"#"} alt="Youtube" />
            </li>*/}
              <li>
                <a
                  href={"https://www.instagram.com/imskrrrkid/"}
                  target="_blank"
                >
                  <img src={inst} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href={"https://x.com/imskrrrkid"} target="_blank">
                  <img src={x} alt="X" />
                </a>
              </li>
              <li>
                <a href={"https://patreon.com/imskrrrkid"} target="_blank">
                  <img src={patreon} alt="Patreon" />
                </a>
              </li>
              <li>
                <a href={"https://artstation.com/imskrrrkid"} target="_blank">
                  <img src={art} alt="Artstation" />
                </a>
              </li>
              <li>
                <a href={"https://github.com/imskrrrkid"} target="_blank">
                  <img src={git} alt="Github" />
                </a>
              </li>
              <li>
                <a
                  href={"https://www.youtube.com/@imskrrrkid/videos"}
                  target="_blank"
                >
                  <img src={yt} alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className={HomeCss.buttons}>
            {/* <button className={HomeCss.resume}>RESUME</button>*/}
            <button onClick={() => setPage("contact")}>CONTACT</button>
          </div>
        </div>
      </header>
      {/* Body-------------------------------------*/}
      <div className={HomeCss.land}>
        <h1>Muhammad Yasir</h1>
        <div className={HomeCss.titles}>
          <p>Frontend</p>
          <p>Game Dev</p>
          <p>3D Artist</p>
        </div>
      </div>
      <div className={HomeCss.About}>
        <div className={HomeCss.abTitle}>
          <h2>About</h2>
        </div>
        <div className={HomeCss.abPara}>
          <div className={HomeCss.paraSoft}>
            <p>
              Software Eng: My interest in software engineering began during the
              COVID period, when I explored web development out of curiosity and
              as a creative outlet. Over time, my focus shifted more heavily
              toward 3D art, and due to limited time, software development was
              put on hold. In 2025, I returned to software engineering with
              renewed interest and clearer goals. I plan to pursue a major in
              Computer Science to build a strong theoretical and practical
              foundation. I enjoy understanding how systems work, writing
              structured and logical code, and solving problems through
              analytical thinking. With a background in 3D art and technical
              workflows, I aim to combine creativity with engineering,
              continuously improving my skills and exploring ways to bridge
              visual and technical disciplines.
            </p>
          </div>
          <div className={HomeCss.paraGame}>
            <p>
              Game Dev: As I began taking 3D art and software engineering more
              seriously, I naturally leaned into game development, driven by a
              curiosity that started in childhood. Games were the reason I first
              questioned how digital worlds are built, and returning to that
              interest felt like a full-circle moment. I’m currently building my
              foundation in both art and programming with the goal of developing
              complete, playable projects. I plan to create game development
              projects that combine 3D assets, real-time engines, and code,
              focusing on practical workflows, performance, and player
              experience. Through hands-on experimentation and project-based
              learning, I aim to grow as a well-rounded game developer who
              understands both the creative and technical sides of production.
            </p>
          </div>
          <div className={HomeCss.para3D}>
            <p>
              3D: My interest in 3D began in 2014 when I first wondered how
              games were created. That curiosity eventually led me to Blender in
              2020. The learning curve was tough, and I failed more times than I
              can count, but returning to 3D in 2022 is what shaped my path for
              real. I focus on creating models, textures, props, and environment
              assets with attention to detail and strong visual quality. I enjoy
              building things from the ground up and turning ideas into
              functional, believable assets. I’m still learning to this day,
              improving my workflow and exploring new techniques to grow as a 3D
              artist.
            </p>
          </div>
        </div>
        {/* <div className={HomeCss.abResumeBtn}>
          <button className={HomeCss.resume}>RESUME</button>
        </div>*/}
      </div>
      <div className={HomeCss.work}>
        <div className={HomeCss.wkTitle}>
          <h2>Work</h2>
        </div>
        <div className={HomeCss.wkMenu}>
          <div className={HomeCss.menuTile}>
            <img
              src={workimg}
              onClick={() => setPage("software")}
              draggable={false}
            />
          </div>
          <div className={HomeCss.menuTile}>
            <img
              src={gameimg}
              onClick={() => setPage("gamedev")}
              draggable={false}
            />
          </div>
          <div className={HomeCss.menuTile}>
            <img
              src={threedeimg}
              onClick={() => setPage("threed")}
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className={HomeCss.fourth}>
        <div class={HomeCss.software}>
          <h2>Tools I Use</h2>
          <div className={HomeCss.imgswrapper}>
            <div className={HomeCss.imgs}>
              <img src={blenderlogo} alt={"xd"} draggable={false} />
              <img src={unreal} alt={"xd"} draggable={false} />
              <img src={substance} alt={"xd"} draggable={false} />
              <img src={photoshop} alt={"xd"} draggable={false} />
              <img src={premiere} alt={"xd"} draggable={false} />
              <img src={after} alt={"xd"} draggable={false} />
              <img src={fls} alt={"xd"} draggable={false} />
            </div>
            <div aria-hidden className={HomeCss.imgs}>
              <img src={blenderlogo} alt={"Blender"} draggable={false} />
              <img src={unreal} alt={"Unreal Engine"} draggable={false} />
              <img
                src={substance}
                alt={"Substance Painter"}
                draggable={false}
              />
              <img src={photoshop} alt={"Photoshop"} draggable={false} />
              <img src={premiere} alt={"Premiere Pro"} draggable={false} />
              <img src={after} alt={"After Effects"} draggable={false} />
              <img src={fls} alt={"Fl Studio"} draggable={false} />
            </div>
          </div>
        </div>
        <div class={HomeCss.stack}>
          <h2>Tech Stack</h2>
          <div className={HomeCss.imgswrapper}>
            <div className={HomeCss.imgs}>
              <img src={html} alt={"xd"} draggable={false} />
              <img src={css} alt={"xd"} draggable={false} />
              <img src={js} alt={"xd"} draggable={false} />
              <img src={reactimg} alt={"xd"} draggable={false} />
            </div>
            <div aria-hidden className={HomeCss.imgs}>
              <img src={html} alt={"xd"} draggable={false} />
              <img src={css} alt={"xd"} draggable={false} />
              <img src={js} alt={"xd"} draggable={false} />
              <img src={reactimg} alt={"xd"} draggable={false} />
            </div>
            <div aria-hidden className={HomeCss.imgs}>
              <img src={html} alt={"xd"} draggable={false} />
              <img src={css} alt={"xd"} draggable={false} />
              <img src={js} alt={"xd"} draggable={false} />
              <img src={reactimg} alt={"xd"} draggable={false} />
            </div>
          </div>
        </div>
        {/* <div class={HomeCss.clients}>
          <h2>Clients</h2>
          <div className={HomeCss.imgs}>
            <img src={blenderlogo} alt={"xd"} />
            <img src={blenderlogo} alt={"xd"} />
            <img src={blenderlogo} alt={"xd"} />
            <img src={blenderlogo} alt={"xd"} />
            <img src={blenderlogo} alt={"xd"} />
            <img src={blenderlogo} alt={"xd"} />
          </div>
        </div>*/}
      </div>
      <div className={HomeCss.footer}></div>
    </>
  );
}

export default Home;
