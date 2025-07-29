import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        background: "#00ff8b",
        color: "#252525",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        fontSize: "1.5rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 9999,
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
};

export default ScrollToTopButton;