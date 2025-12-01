/*Note: Re-write by Claude due to lack of time to fix form submission error, its working after using useEffect and the problem was script (that was not loading).*/

import ContactCss from "./Contact.module.css";
import { useState, useEffect } from "react";

function Contact({ closeCont }) {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load Web3Forms script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://web3forms.com/client/script.js";
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const apiKey = import.meta.env.VITE_CONTACTER;

    console.log("🔑 API Key:", apiKey ? "EXISTS" : "MISSING");
    console.log("📜 Script loaded:", scriptLoaded);

    if (!apiKey) {
      setResult("❌ API key missing!");
      setIsLoading(false);
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    // Log what we're sending
    console.log("📤 Form data:");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      console.log("📥 Response status:", response.status);

      const data = await response.json();
      console.log("📥 Response data:", data);

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult(`❌ ${data.message || "Error submitting form"}`);
      }
    } catch (error) {
      console.error("💥 Error:", error);
      setResult("❌ Network error");
    } finally {
      setIsLoading(false);
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

              <button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit"}
              </button>

              <div className="h-captcha" data-captcha="true"></div>
              <p id={ContactCss["result"]}>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
