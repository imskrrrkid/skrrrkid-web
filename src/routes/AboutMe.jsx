import AboutMee from "./AboutMe.module.css";

function AboutMe() {
  return (
    <>
      <div className={AboutMee.til}>
        <div className={AboutMee.first}>
          <div className={AboutMee.firstDiv}>
            <h1>About</h1>
            {/* <p>
              Looking for<button>CV?</button>
            </p>*/}
          </div>
          <div className={AboutMee.secDiv}>
            <h2>3D ARTIST</h2>
            <p>
              My interest in 3D began in 2014 when I first wondered how games
              were created. That curiosity eventually led me to Blender in 2020.
              <br />
              <br />
              The learning curve was tough, and I failed more times than I can
              count, but returning to 3D in 2022 is what shaped my path for
              real. I focus on creating models, textures, props, and environment
              assets with attention to detail and strong visual quality. I enjoy
              building things from the ground up and turning ideas into
              functional, believable assets.
              <br />
              <br /> I’m still learning to this day, improving my workflow and
              exploring new techniques to grow as a 3D artist.
            </p>
          </div>
        </div>
        <div className={AboutMee.first}>
          <h2>GAME DEVELOPMENT</h2>
          <p>
            My interest in game development started back in 2014, when I first
            became curious about how games are actually created. That curiosity
            eventually led me into 3D, and after spending a couple of years
            building models, textures, props, and environments, I decided to
            expand into making games myself.
            <br />
            <br />
            I’m new to game development, but I’m fully committed to learning the
            process from the ground up. I’ll be creating games, experimenting
            with different mechanics, and sharing my progress through dev logs
            on <a href={"https://www.youtube.com/@imskrrrkid"}>YouTube</a> as I
            grow in this field.
            <br />
            <br />I aim to keep improving, explore new tools and techniques, and
            build projects that reflect both creativity and solid development
            skills.
          </p>
        </div>
        <div className={AboutMee.first}></div>
      </div>
    </>
  );
}

export default AboutMe;
