import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/scss/contact.scss";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send("service_9cpvuzr", "template_pyehzfk", form, "qZ8QL_f-skd20Ak-i")
      .then(
        () => {
          toast.success("🦄 Email sent to Yasashri!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        },
        (error) => alert("Failed to send: " + error.text)
      );
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <section className='contact'>
        <ToastContainer />
        <div className='contact__container'>
          <h1 className='contact__title'>Contact Me</h1>
          <p className='contact__subtitle'>
            Feel free to reach out via email or WhatsApp!
          </p>
          <div className='contact__methods'>
            <form className='contact__form' onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={form.name}
                onChange={handleChange}
                required
                className='contact__input'
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={form.email}
                onChange={handleChange}
                required
                className='contact__input'
              />
              <textarea
                name='message'
                placeholder='Your Message'
                value={form.message}
                onChange={handleChange}
                required
                className='contact__textarea'
                rows={5}
              />
              <button type='submit' className='contact__button'>
                Send Email
              </button>
            </form>
            <div className='contact__whatsapp'>
              <a
                href='https://wa.me/94766521099'
                target='_blank'
                rel='noopener noreferrer'
                className='contact__whatsapp-btn'
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
