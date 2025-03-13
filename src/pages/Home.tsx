import { useState, useEffect, useCallback } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";

const titles = [
  "I am Yasashri Medagedara",
  "A Software Developer",
  "A Gamer",
  "A Traveller",
];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);
  const [visibleComponent, setVisibleComponent] = useState<"contact" | "resume" | "portfolio" | null>(null);

  const toggleComponent = useCallback((component: "contact" | "resume" | "portfolio") => {
    setVisibleComponent((prev) => (prev === component ? null : component));
  }, []);

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
        <Contact visibility={visibleComponent === "contact"} closeButton={() => setVisibleComponent(null)} />
        <Resume visibility={visibleComponent === "resume"} closeButton={() => setVisibleComponent(null)} />
        <Portfolio visibility={visibleComponent === "portfolio"} closeButton={() => setVisibleComponent(null)} />
        <div className={`ym-container__name ${fade ? "fade-in" : "fade-out"}`}>
          {titles[currentTitle]}
        </div>

        <div className="ym-container__menu">
          <div
            className="ym-container__menu-item ym-container__menu-item--portfolio"
            onClick={() => toggleComponent("portfolio")}
          >
            Portfolio
          </div>
          <div
            className="ym-container__menu-item ym-container__menu-item--resume"
            onClick={() => toggleComponent("resume")}
          >
            Resume
          </div>
          <div
            className="ym-container__menu-item ym-container__menu-item--contact"
            onClick={() => toggleComponent("contact")}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
