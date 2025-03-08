import { useState, useEffect } from "react";
import Contact from "../Components/Contact";

const titles = [
  "I am Yasashri Medagedara",
  "A Software Developer",
  "A Gamer",
  "A Traveller",
];

function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);
  const [bgColor, setBgColor] = useState(
    "linear-gradient(135deg, #1e1e2f, #3a3a5f)"
  );
  const [contactVisible, setContactVisible] = useState(false);

  const openContacts = () => {
    setContactVisible((prev) => !prev);
  };

  const closeContact = () => {
    setContactVisible(false);
  };

  useEffect(() => {
    function getRandomColor(baseColor: string) {
      const base = parseInt(baseColor.slice(1), 16);
      const randomOffset = Math.floor(Math.random() * 100);
      const randomColor = base + randomOffset;
      return `#${randomColor.toString(16).padStart(6, "0")}`;
    }

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setFade(true);

        setBgColor(() => {
          const newColor1 = getRandomColor("#1e1e2f");
          const newColor2 = getRandomColor("#3a3a5f");
          return `linear-gradient(135deg, ${newColor1}, ${newColor2})`;
        });
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Only runs once on mount

  return (
    <div className='ym-container' style={{ background: bgColor }}>
      <Contact visibility={contactVisible} closeButton={closeContact} />
      <div className={`ym-container__name ${fade ? "fade-in" : "fade-out"}`}>
        {titles[currentTitle]}
      </div>
      <div className='ym-container__menu'>
        <div
          className='ym-container__menu-item ym-container__menu-item--portfolio'
          onClick={openContacts}
        >
          Portfolio
        </div>
        <div
          className='ym-container__menu-item ym-container__menu-item--resume'
          onClick={openContacts}
        >
          Resume
        </div>
        <div
          className='ym-container__menu-item ym-container__menu-item--contact'
          onClick={openContacts}
        >
          Contact
        </div>
      </div>
    </div>
  );
}

export default Home;
