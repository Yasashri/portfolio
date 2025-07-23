import React from "react";
import "../styles/scss/resume.scss";

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="container">
        <div className="header">
          <h1>Yasashri Medagedara</h1>
          <p>Software Engineer</p>
          <p className="location">📍 Kaohsiung City, Taiwan</p>
          <p className="contact">
            📞 +886 967372006 | ✉️ ymedagedara@gmail.com
          </p>
          <div className="links">
            <a href="https://tinyurl.com/yasashri" target="_blank">Website</a>
            <a href="https://linkedin.com/in/yasashri" target="_blank">LinkedIn</a>
            <a href="https://medium.com/@ymedagedara" target="_blank">Medium</a>
            <a href="https://github.com/Yasashri" target="_blank">GitHub</a>
            <a href="https://www.amazon.com/s?i=stripbooks&rh=p_27:Yasashri+Medagedara" target="_blank">Amazon</a>
            <a href="https://yasashri.gumroad.com" target="_blank">Gumroad</a>
          </div>
        </div>

        <div className="section">
          <h2>SUMMARY</h2>
          <p>
            Full-stack Software Engineer with 5+ years of experience, focusing on frontend development with React.js, TypeScript, and backend with Laravel and MySQL. Passionate about performance, user experience, and clean code. Looking to make long-term impact in a growth-focused role.
          </p>
        </div>

        <div className="section">
          <h2>EXPERIENCE</h2>
          <div className="job">
            <h3>Associate Software Engineer – Creative Tribe (Pvt) Ltd, LK</h3>
            <span>Aug 2019 – Aug 2022</span>
            <ul>
              <li>Developed content platform using Laravel, React.js, MySQL</li>
              <li>API testing with Postman & Insomnia</li>
              <li>Stripe integration, Vimeo content access</li>
              <li>UI development based on mockups</li>
              <li>Wrote tests using Jest</li>
            </ul>
          </div>

          <div className="job">
            <h3>Software Engineer – Creative Tribe, NZ (Remote)</h3>
            <span>Aug 2022 – Present</span>
            <ul>
              <li>Developed an online marketplace for Sri Lankans in NZ</li>
              <li>Built UI/UX mockups using Figma & Adobe XD</li>
              <li>Led SEO optimization & UX improvements</li>
              <li>Handled deployment, web hosting</li>
              <li>Built food ordering system, migrated JS to React+TS</li>
            </ul>
          </div>

          <div className="job">
            <h3>Freelance Developer</h3>
            <span>Since 2015</span>
            <ul>
              <li>Developed WordPress sites, responsive UIs</li>
              <li>Created interactive browser games in JS</li>
              <li>Back-end services with Node.js, Python</li>
            </ul>
          </div>

          <div className="job">
            <h3>IT Intern – Board of Investments, Sri Lanka</h3>
            <span>2017</span>
            <ul>
              <li>Maintained IT systems, handled tech support</li>
              <li>Performed system maintenance and diagnostics</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>SKILLS</h2>
          <ul className="skills">
            <li><strong>Frontend:</strong> React.js, HTML, CSS, Sass, Bootstrap, Tailwind</li>
            <li><strong>Backend:</strong> Laravel, Node.js, PHP</li>
            <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
            <li><strong>Tools:</strong> Git, Bitbucket, Figma, Adobe XD</li>
            <li><strong>Testing:</strong> Jest, Postman, Insomnia</li>
            <li><strong>Deployment:</strong> Vercel, GoDaddy, Freeparking</li>
          </ul>
        </div>

        <div className="section">
          <h2>EDUCATION</h2>
          <p><strong>BSc (Hons) in Software Engineering</strong>, Cardiff Metropolitan University (UK via ICBT) – 2019</p>
          <p>Final Year Project: “How Video Games Can Help Improve English Teaching” – Built a Unity-based game.</p>
        </div>

        <div className="section">
          <h2>CERTIFICATIONS & LANGUAGES</h2>
          <ul>
            <li>IELTS Academic – 6.5 (2014)</li>
            <li>Postman API Fundamentals – Certified</li>
            <li>Languages: English, Sinhalese</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
