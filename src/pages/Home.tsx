import { useState, useEffect } from "react";

const titles = ["I AM YASASHRI MEDAGEDARA", "A SOFTWARE DEVELOPER", "A TRAVELER", "A GAMER"];

function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);

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
    <div className='ym-container'>
      <div className={`ym-container__name ${fade ? "fade-in" : "fade-out"}`}>
        {titles[currentTitle]}
      </div>
      <div className='ym-container__menu'>
        <div className='ym-container__menu-item ym-container__menu-item--portfolio'>
          Portfolio
        </div>
        <div className='ym-container__menu-item ym-container__menu-item--resume'>
          Resume
        </div>
        <div className='ym-container__menu-item ym-container__menu-item--contact'>
          Contact
        </div>
      </div>
    </div>
  );
}

export default Home;
