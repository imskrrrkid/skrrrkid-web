import Homepage from "./Hompage.module.css";

function About() {
  return (
    <>
      <div className={Homepage.aboutContainer}>
        <div className={Homepage.left}>
          <div className={Homepage.leftTop}>
            <h2>About Me</h2>
          </div>

          <div className={Homepage.abCont}>
            <h3>Contact</h3>
            <p>
              <a href="mailto:skrrrextra@gmail.com">skrrrextra@gmail.com</a> |{" "}
              <a href="tel:+923163127090">0316-3127090</a> | Punjab, Pakistan
            </p>
          </div>

          <div className={Homepage.abSkills}>
            <h3>Hard Skills</h3>
            <p>
              MERN Stack | Unreal Engine | Blender | Substance Painter | Adobe
              PS/AI/PR
            </p>
          </div>
          <div className={Homepage.abSkills}>
            <h3>Soft Skills</h3>
            <p>
              Fast learner | Adaptable to new tools | Communication | Deadlines
              Match
            </p>
          </div>

          <div className={Homepage.abLang}>
            <h3>Languages</h3>
            <p>Urdu (Native) | English (Above Intermediate)</p>
          </div>
        </div>

        <div className={Homepage.right}>
          <div className={Homepage.rightTop}>
            <h2>Vision</h2>
          </div>
          <div className={Homepage.vision}>
            <p>
              Multidisciplinary{" "}
              <b>Web Developer (MERN), Game Developer, and 3D Artist</b>.
              Skilled in modern web technologies, real-time 3D workflows, and
              gameplay prototyping. Experienced with Blender, Unreal Engine,
              Unity, and interactive design.
            </p>
          </div>
          <div className={Homepage.exp}>
            <h3>Experience</h3>

            <div className={Homepage.expCard}>
              <h3>Onsite - Graphics Designer at DPT</h3>
              <p>Feburary/2025 - August/2025 </p>
            </div>
            <div className={Homepage.expCard}>
              <h3>Contract - 3D Enviornment Artist - Pakistan Based</h3>
              <p>
                September/2025 - October/2025 |{" "}
                <a href="/project-url" className={Homepage.cardLink}>
                  See Project
                </a>
              </p>
            </div>
            <div className={Homepage.expCard}>
              <h3>Contract - 3D Enviornment Artist - Oman Based</h3>
              <p>
                September/2025 - October/2025 |{" "}
                <a href="/project-url" className={Homepage.cardLink}>
                  See Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
