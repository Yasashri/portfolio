import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/scss/contact.scss";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    setSubmitted(true);
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <section className="contact">
        <div className="contact__container">
          <h1 className="contact__title">Contact Me</h1>
          <p className="contact__subtitle">
            Feel free to reach out via email or WhatsApp!
          </p>
          <div className="contact__methods">
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="contact__input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="contact__input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="contact__textarea"
                rows={5}
              />
              <button type="submit" className="contact__button">
                Send Email
              </button>
              {submitted && <div className="contact__success">Thank you! Your message has been sent.</div>}
            </form>
            <div className="contact__whatsapp">
              <a
                href="https://wa.me/yourwhatsappphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__whatsapp-btn"
              >
                <FaWhatsapp /> Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;