import ParticleBackground from "../Components/ParticleBackground";
import { FaFacebookF, FaMediumM, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGumroad, SiAmazon } from "react-icons/si";
const Home = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ParticleBackground />
       <section className="home">
      <div className="home__profile">
        <div className="home__avatar-container">
          <img
            src="my.jpg"
            alt="My Profile"
            className="home__avatar"
          />
          <span className="home__status-dot" />
        </div>

        <div className="home__details">
          <h1 className="home__name">Yasashri Medagedara</h1>
          <p className="home__description">
            Software Engineer | React & Laravel Developer | Passionate about creating elegant, accessible interfaces.
          </p>
          <div className="home__socials">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://medium.com/@yourprofile" target="_blank" rel="noopener noreferrer">
              <FaMediumM />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://amazon.com/yourstore" target="_blank" rel="noopener noreferrer">
              <SiAmazon />
            </a>
            <a href="https://gumroad.com/yourstore" target="_blank" rel="noopener noreferrer">
              <SiGumroad />
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
