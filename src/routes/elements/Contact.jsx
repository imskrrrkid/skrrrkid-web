import ContactCss from "./Contact.module.css";
import { useState } from "react";

function Contact({ closeCont }) {
  const [result, setResult] = useState("");
  const apiKey = import.meta.env.VITE_CONTACTER;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? "Success!" : "Error submitting form.");
    } catch (error) {
      console.error(error);
      setResult("Error submitting form.");
    }
  };

  return (
    <div className={ContactCss.cont}>
      <div className={ContactCss.base}>
        <div className={ContactCss.clsBtn} onClick={closeCont}>
          X
        </div>
        <div className={ContactCss.mainCont}>
          <div className={ContactCss.haq}>
            <h1>Have A Question?</h1>
            <p>Go on, Don't hesitate. I would love to hear you!</p>
            <div className={ContactCss.contactdetails}>
              <p>
                <a href="mailto:skrrrextra@gmail.com">
                  Mail: skrrrextra@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={ContactCss.form}>
            <form onSubmit={onSubmit}>
              <input type="text" name="name" required placeholder="Name" />
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                id={ContactCss["subject"]}
              />
              <input type="email" name="email" required placeholder="Email" />
              <textarea
                name="message"
                required
                placeholder="Message"
              ></textarea>
              <button type="submit">Submit</button>
              <div className="h-captcha" data-captcha="true"></div>
              <p id={ContactCss["result"]}>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </div> // Cont
  );
}

export default Contact;
