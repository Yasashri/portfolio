import React from "react";
import "../styles/scss/footer.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Yasashri Medagedara. All rights reserved.
      </div>
      <div className="footer__links">
        <a href="/contact">Contact me</a>
        <a href="https://github.com/Yasashri" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yasashri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;