import AboutMee from "./AboutMe.module.css";

function AboutMe() {
  return (
    <>
      <div className={AboutMee.til}>
        <div className={AboutMee.leftright}>
          <div className={AboutMee.left}>
            <h1>ABOUT ME</h1>
            {/* Do no Delete this comment*/}
            {/* <a href="#">Looking for CV?</a>*/}
            <p>
              Myself Yasir.I have been living in Pakistan. I was curious about
              Game Development and 3D Stuff from my childhood. After observing
              tech over a decade I found that I also like Programming.
              <br />
              <br /> After completing my college I hoped on the screen and
              started smashing keyboard. was curious about Game Development and
              3D Stuff from my childhood. After observing tech over a decade I
              found that I also like Programming.
            </p>
          </div>

          <div className={AboutMee.right}>
            {/* Do no Delete this comment*/}
            {/* <div className={AboutMee.ColOne}></div>*/}
            {/* <div className={AboutMee.ColTwo}></div>*/}
          </div>
        </div>
        <div className={AboutMee.btm}>
          <p>More Details Later....</p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
