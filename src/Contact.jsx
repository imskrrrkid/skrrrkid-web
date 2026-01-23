import ContCss from "./Contact.module.css";

function Contact({ setPage }) {
  return (
    <>
      <div className={ContCss.main}>
        <div className={ContCss.body}>
          <div className={ContCss.back}>
            <button onClick={() => setPage("home")}>Back</button>
          </div>
          <div className={ContCss.content}>
            <div className={ContCss.left}>
              <h2>Get In Touch</h2>
              <p>Business Inquires or Have a Question? Message Me.</p>

              <p>
                <span>Whatsapp</span> <br />
              </p>
              <p>
                <span>Mail</span> <br />
                skrrrextra@gmail.com
              </p>
            </div>
            <div className={ContCss.right}>
              <input placeholder="Name" type="text" required disabled></input>
              <input placeholder="Email" type="email" required disabled></input>
              <input
                placeholder="Phone Number"
                type="tel"
                required
                disabled
              ></input>
              <textarea placeholder="Write Someting." disabled />
              <button type="submit" disabled>
                Submit
              </button>
              <p>
                *If No response in 24-48 Hours consider Whatsapp or Social Media
                Platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
