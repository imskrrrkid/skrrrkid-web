import Homepage from "./Hompage.module.css";
import ppc from "../assets/white-eagle-kid.jpg";
import { useState, useEffect } from "react";
import About from "./About";
// import Toelement from "./Toelement.jsx";

function HomePage() {
  const smallTex = "Software Engineer | Game Developer | 3D Artist";
  const longText =
    "I am Muhammad Yasir, a passionate software engineer, game developer, and 3D artist. Welcome to my portfolio website where I showcase my projects and skills. Feel free to explore and reach out if you'd like to collaborate or learn more about my work. Let's create something amazing together.";

  const [message, setMessage] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // const scrollClick = ()=>{
  //     Toelement();
  // }

  useEffect(() => {
    if (isPaused) return; // Don't toggle if paused

    const interval = setInterval(() => {
      setMessage((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <div className={Homepage.body}>
        <div className={Homepage.navline}>
          <p className={Homepage.navCon}>Contact</p>
        </div>
        <div className={Homepage.container}>
          <div className={Homepage.namentitle}>
            <div className={Homepage.name}>
              <h1 className={Homepage.tran}>Muhammad Yasir</h1>
              <p className={Homepage.tran}>SKRRRKID</p>
              <h2
                className={Homepage.title}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                key={message} // Forces re-animation on toggle
              >
                {message ? smallTex : longText}
              </h2>
            </div>

            <div className={Homepage.image}>
              <img src={ppc} alt="Profile" width={500} />
            </div>
          </div>
        </div>
        {/* <div className={Homepage.arrow}>
            <span onClick={scrollClick} >&#8595;</span>
        </div> */}
      </div>
      <About />
    </>
  );
}

export default HomePage;
