import { useState, useEffect } from "react";
interface ContactsProps {
  visibility: boolean;
  closeButton: () => void;
}

function Contact({ visibility, closeButton }: ContactsProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(visibility);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (visibility) {
      setIsMounted(true);
      setIsExiting(false);
    } else {
      setIsExiting(true);
      setTimeout(() => {
        setIsMounted(false);
        setIsExiting(false);
      }, 400);
    }
  }, [visibility]);

  if (!isMounted) return null;

  return (
    <div
      className={`ym-contact-container ${
        isExiting ? "exit-right" : "enter-left"
      }`}
    >
      <div
        className="ym-contact-container__title"
        onClick={closeButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Close" : "Contact"}
      </div>
      <div className="ym-contact-container__card">
        <div className="ym-contact-container__card-data"></div>
      </div>
    </div>
  );
}

export default Contact;
