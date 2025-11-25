import ContactCss from "./Contact.module.css";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "XYZ");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <>
      <div className={ContactCss.base}>
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
            <input type="email" name="email" required placeholder="email" />
            <textarea name="message" required></textarea>
            <button type="submit">Submit</button>
            <div class="h-captcha" data-captcha="true"></div>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
