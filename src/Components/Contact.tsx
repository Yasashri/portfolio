import { useState, useEffect } from "react";
import { Mail, Phone, Facebook, Github, Linkedin, Globe } from "lucide-react";

interface ContactsProps {
  visibility: boolean;
  closeButton: () => void;
}

function Contact({ visibility, closeButton }: ContactsProps) {
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
      <div
        className='ym-contact-container__title'
        onClick={closeButton}
      >
        {"Close"}
      </div>
      <div className='ym-contact-container__card'>
        <div className='ym-contact-container__card-data'>
          <div className='ym-contact-data'>
            <h3>Contact and links</h3>
            <ul className='ym-contact-list'>
              <li>
                <a href='tel:+0967372006'>
                  <Phone size={20} /> Taiwan: <strong>(+886) 967372006</strong>
                </a>
              </li>
              <li>
                <a href='tel:+94766521099'>
                  <Phone size={20} /> Sri Lanka: <strong>(+94) 766521099</strong>
                </a>
              </li>
              <li>
                <Mail size={20} /> {"  "}
                <a href='mailto:ymedagedara@gmail.com'>
                  {" "}
                  ymedagedara@gmail.com
                </a>
              </li>
              <li>
                <Facebook size={20} />{" "}
                <a href='https://www.facebook.com/yasashri/' target='_blank'>
                  Facebook
                </a>
              </li>
              <li>
                <Globe size={20} />{" "}
                <a href='https://medium.com/@ymedagedara' target='_blank'>
                  Medium
                </a>
              </li>
              <li>
                <Github size={20} />{" "}
                <a href='https://github.com/Yasashri' target='_blank'>
                  GitHub
                </a>
              </li>
              <li>
                <Linkedin size={20} />{" "}
                <a href='https://www.linkedin.com/in/yasashri/' target='_blank'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
