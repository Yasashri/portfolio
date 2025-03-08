import { useState, useEffect } from "react";
import ParticleBackground from "../Components/ParticleBackground";
import Contact from "../Components/Contact";

const titles = [
  "I am Yasashri Medagedara",
  "A Software Developer",
  "A Gamer",
  "A Traveller",
];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);

  const openContacts = () => {
    setContactVisible((prev) => !prev);
  };

  const closeContact = () => {
    setContactVisible(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ParticleBackground />
      <div className="ym-container">
        <Contact visibility={contactVisible} closeButton={closeContact} />
        <div className={`ym-container__name ${fade ? "fade-in" : "fade-out"}`}>
          {titles[currentTitle]}
        </div>
        <div className="ym-container__menu">
          <div
            className="ym-container__menu-item ym-container__menu-item--portfolio"
            onClick={openContacts}
          >
            Portfolio
          </div>
          <div
            className="ym-container__menu-item ym-container__menu-item--resume"
            onClick={openContacts}
          >
            Resume
          </div>
          <div
            className="ym-container__menu-item ym-container__menu-item--contact"
            onClick={openContacts}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
