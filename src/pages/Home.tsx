import ParticleBackground from "../Components/ParticleBackground";
import { FaFacebookF, FaMediumM, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiAmazon } from "react-icons/si";
import "../styles/scss/home.scss";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
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
                href='https://www.facebook.com/yasashri/'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaFacebookF />
                <span className='home__social-name'>Facebook</span>
              </a>
              <a
                href='https://medium.com/@ymedagedara'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaMediumM />
                <span className='home__social-name'>Medium</span>
              </a>
              <a
                href='https://github.com/Yasashri'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaGithub />
                <span className='home__social-name'>GitHub</span>
              </a>
              <a
                href='https://www.linkedin.com/in/yasashri/'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <FaLinkedinIn />
                <span className='home__social-name'>LinkedIn</span>
              </a>
              <a
                href='https://www.amazon.com/dp/B0FJR93HJ4'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <SiAmazon />
                <span className='home__social-name'>Amazon</span>
              </a>
              <a
                href='https://www.fiverr.com/yasasmedagedara'
                target='_blank'
                rel='noopener noreferrer'
                className='home__social-link'
              >
                <TbBrandFiverr />
                <span className='home__social-name'>Fiverr</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
