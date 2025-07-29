import "../styles/scss/resume.scss";
import { FaWhatsapp } from "react-icons/fa";

const Resume = () => {
  return (
    <section className='resume-section'>
      <div className='container'>
        <div className='header'>
          <h1>Yasashri Medagedara</h1>
          <p style={{ marginTop: 0 }}>Software Engineer</p>
          <p className='location'>📍 Kaohsiung City, Taiwan</p>
          <p className='location'>🏠 Kandy, Sri Lanka</p>
          <p className='contact'>
            <a href='tel:+886967372006'>📞 +886 967372006</a> &nbsp;| &nbsp;
            <a href='mailto:ymedagedara@gmail.com'>✉️ ymedagedara@gmail.com</a>
            &nbsp;|&nbsp;
            <FaWhatsapp />
            &nbsp;
            <a href='https://wa.me/94766521099' target='_blank'>
              +94 766521099
            </a>
          </p>
          <div className='links'>
            <a
              href='/Yasashri_Medagedara_cv.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download Professional Resume (PDF)
            </a>
            <span> | </span>
            <a
              href='/Yasashri_Medagedara_academic_cv.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download Academic Resume (PDF)
            </a>
          </div>
        </div>

        <div className='section'>
          <h2>SUMMARY</h2>
          <p>
            Full-stack Software Engineer with 5+ years of experience, focusing
            on frontend development with JavaScript, React.js, TypeScript, and
            backend with Laravel, NodeJS and MySQL. Passionate about
            performance, user experience, and clean code. Looking to make
            long-term impact in a growth-focused role.
          </p>
        </div>

        <div className='section'>
          <h2>EXPERIENCE</h2>
          <div className='job'>
            <h3>Software Engineer – Creative Tribe, NZ (Remote)</h3>
            <span>Aug 2022 – May 2025</span>
            <ul>
              <li>Developed an online marketplace for Sri Lankans in NZ</li>
              <li>Built UI/UX mockups using Figma & Adobe XD</li>
              <li>Led SEO optimization & UX improvements</li>
              <li>Handled deployment, web hosting</li>
              <li>Built food ordering system, migrated JS to React+TS</li>
            </ul>
          </div>
          <div className='job'>
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

          <div className='job'>
            <h3>Freelance Developer</h3>
            <span>Since 2015</span>
            <ul>
              <li>Developed WordPress sites, responsive UIs</li>
              <li>Created interactive browser games in JS</li>
              <li>Back-end services with Node.js, Python</li>
            </ul>
          </div>

          <div className='job'>
            <h3>IT Intern – Board of Investments, Sri Lanka</h3>
            <span>2017</span>
            <ul>
              <li>Maintained IT systems, handled tech support</li>
              <li>Performed system maintenance and diagnostics</li>
            </ul>
          </div>
        </div>

        <div className='section'>
          <h2>SKILLS</h2>
          <ul className='skills'>
            <li>
              <strong>Frontend:</strong> React.js, HTML, CSS, Sass, Bootstrap,
              Tailwind
            </li>
            <li>
              <strong>Backend:</strong> Laravel, Node.js, PHP
            </li>
            <li>
              <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL
            </li>
            <li>
              <strong>Tools:</strong> Git, Bitbucket, Figma, Adobe XD
            </li>
            <li>
              <strong>Testing:</strong> Jest, Postman, Insomnia
            </li>
            <li>
              <strong>Deployment:</strong> Vercel, GoDaddy, Freeparking
            </li>
          </ul>
        </div>

        <div className='section'>
          <h2>EDUCATION</h2>
          <p>
            <strong>BSc (Hons) in Software Engineering</strong>, Cardiff
            Metropolitan University (UK via ICBT) – 2019
          </p>
          <p>
            Final Year Project: “How Video Games Can Help Improve English
            Teaching” – Built a Unity-based game.
          </p>
        </div>

        <div className='section'>
          <h2>CERTIFICATIONS & LANGUAGES</h2>
          <ul>
            <li>IELTS Academic – 6.5 (2024)</li>
            <li>Postman API Fundamentals – Certified</li>
            <li>Languages: English, Sinhalese</li>
          </ul>
        </div>

        <div className='section'>
          <h2>AWARDS & ACTIVITIES</h2>
          <ul>
            <li>
              1st Rank in all island chess champpionship in 2009 (1st board)
            </li>
            <li>
              Captain – School Chess Team – Led the team in national and
              inter-school tournaments
            </li>
            <li>Participated in multiple university-level hackathons</li>
            <li>
              Actively participated in sprint planning, pair programming, and
              technical discussions using Git workflows and pull request
              reviews.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
