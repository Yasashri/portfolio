import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/scss/navbar.scss";
const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
console.log("Location:", location.pathname);
  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (): void => {
    
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo"><a href="/">Yasashri</a></div>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <li className="navbar__item">
            <a
              href="/"
              onClick={() => handleLinkClick()}
              className={`navbar__link ${location.pathname === "/" ? "navbar__link--active" : ""}`}
            >
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/my-work"
              onClick={() => handleLinkClick()}
              className={`navbar__link ${location.pathname === "/my-work" ? "navbar__link--active" : ""}`}
            >
              My Work
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/resume"
              onClick={() => handleLinkClick()}
              className={`navbar__link ${location.pathname === "/resume" ? "navbar__link--active" : ""}`}
            >
              Resume
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/stories"
              onClick={() => handleLinkClick()}
              className={`navbar__link ${location.pathname === "/stories" ? "navbar__link--active" : ""}`}
            >
             Project Stories
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/contact"
              onClick={() => handleLinkClick()}
              className={`navbar__link ${location.pathname === "/contact" ? "navbar__link--active" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="navbar__toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="navbar__close-btn">
              <FaTimes />
            </span>
          ) : (
            <span className="navbar__close-btn">
              <FaBars />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
