import { useState, useEffect } from "react";
interface ResumeProps {
  visibility: boolean;
  closeButton: () => void;
}

function Resume({ visibility, closeButton }: ResumeProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(visibility);

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
      <div className='ym-contact-container__title'>
        <div className='ym-upper-section'>
          <div className='ym-upper-section__title'>
            <h3>Resume</h3>
          </div>
          <div className='ym-upper-section__buttons'>
            <div className='download'>
              <a
                href='/src/assets/Yasashri.pdf'
                download='Yasashri_Resume.pdf'
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Download Resume (pdf)
              </a>
            </div>
            <div className='close'>
              <p onClick={closeButton}>Close</p>
            </div>
          </div>
        </div>
      </div>
      <div className='ym-contact-container__card'>
        <div className='ym-contact-container__card-data'>
          <div className='resume'>
            <img src='/src/assets/cvimg.jpg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
