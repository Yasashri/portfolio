import { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (hash: string): void => {
    setActiveLink(hash);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Yasashri</div>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <li className="navbar__item">
            <a
              href="#home"
              onClick={() => handleLinkClick("#home")}
              className={`navbar__link ${activeLink === "#home" ? "navbar__link--active" : ""}`}
            >
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#projects"
              onClick={() => handleLinkClick("#projects")}
              className={`navbar__link ${activeLink === "#projects" ? "navbar__link--active" : ""}`}
            >
              Projects
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/resume"
              onClick={() => handleLinkClick("#resume")}
              className={`navbar__link ${activeLink === "#resume" ? "navbar__link--active" : ""}`}
            >
              Resume
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#stories"
              onClick={() => handleLinkClick("#stories")}
              className={`navbar__link ${activeLink === "#stories" ? "navbar__link--active" : ""}`}
            >
              Stories
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className={`navbar__link ${activeLink === "#contact" ? "navbar__link--active" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="navbar__toggle" onClick={toggleMenu}>
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
