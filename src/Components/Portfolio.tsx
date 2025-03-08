import { useState } from "react";

interface contacts {
  visibility: boolean;
  closeButton: () => void;
}

function Portfolio({ visibility, closeButton }: contacts) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={
        visibility ? "ym-contact-container--visible" : "ym-contact-container"
      }
    >
      <div
        className='ym-contact-container__title'
        onClick={closeButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Close" : "Contact"}
      </div>
      <div className='ym-contact-container__card'>
        <div className='ym-contact-container__card-data'></div>
      </div>
    </div>
  );
}

export default Portfolio;
