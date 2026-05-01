import { useState, useRef, useEffect } from "react";

const links = [
  { href: "mailto:skrrrextra@gmail.com", label: "Email" },
  { href: "https://www.instagram.com/imskrrrkid/", label: "Instagram" },
  { href: "https://x.com/imskrrrkid", label: "X" },
  { href: "https://github.com/imskrrrkid", label: "Github" },
  { href: "https://artstation.com/imskrrrkid", label: "Artstation" },
  { href: "https://www.youtube.com/@imskrrrkid/videos", label: "YouTube" },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setShowModal(false);
  };

  return (
    <main className="posterLanding">
      {/* Main Title Section */}
      <section className="titleSection">
        <h1>SKRRRKID</h1>
        <div className="accentBar"></div>
      </section>

      {/* Info Grid */}
      <section className="infoGrid">
        <div className="gridCell discipline">
          <p className="label">Disciplines</p>
          <p className="content">Frontend • Game Dev • 3D Art</p>
        </div>
        <div className="gridCell location">
          <p className="label">Status</p>
          <p className="content">Available for projects</p>
        </div>
        <div className="gridCell contact">
          <p className="label">Contact</p>
          <a href="mailto:skrrrextra@gmail.com" className="contactLink">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Social Grid */}
      <section className="socialGrid">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="socialCell"
          >
            <span>{link.label}</span>
          </a>
        ))}
      </section>

      {/* Footer Section */}
      <section className="footerSection">
        <button onClick={() => setShowModal(true)} className="cta">
          MESSAGE
        </button>
      </section>

      {showModal && (
        <div className="modalBackdrop" onClick={() => setShowModal(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <h2>Let's talk</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleFormChange}
                required
              />
              <button type="submit" className="submitBtn">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
