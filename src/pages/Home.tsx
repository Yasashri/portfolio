import ParticleBackground from "../Components/ParticleBackground";
import { FaFacebookF, FaMediumM, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGumroad, SiAmazon } from "react-icons/si";
import "../styles/scss/home.scss";
const Home = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ParticleBackground />
      <section className='home'>
        <div className='home__profile'>
          <div className='home__avatar-container'>
            <img src='my.jpg' alt='My Profile' className='home__avatar' />
            <span className='home__status-dot' />
          </div>

          <div className='home__details'>
            <h1 className='home__name'>Yasashri Medagedara</h1>
            <p className='home__description'>
              Software Engineer | React & Laravel Developer | Passionate about
              creating elegant, accessible interfaces.
            </p>
            <div className='home__socials'>
              <a
                href='https://facebook.com/yourprofile'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaFacebookF />
                <span className='home__social-name'>Facebook</span>
              </a>
              <a
                href='https://medium.com/@yourprofile'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaMediumM />
                <span className='home__social-name'>Medium</span>
              </a>
              <a
                href='https://github.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaGithub />
                <span className='home__social-name'>GitHub</span>
              </a>
              <a
                href='https://linkedin.com/in/yourprofile'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaLinkedinIn />
                <span className='home__social-name'>LinkedIn</span>
              </a>
              <a
                href='https://amazon.com/yourstore'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <SiAmazon />
                <span className='home__social-name'>Amazon</span>
              </a>
              <a
                href='https://gumroad.com/yourstore'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <SiGumroad />
                <span className='home__social-name'>Gumroad</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
