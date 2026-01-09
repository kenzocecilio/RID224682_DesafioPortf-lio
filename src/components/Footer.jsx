import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Footer({ contact, social }) {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerCol">
          <span className="footerLabel">{contact.phoneLabel}</span>
          <span className="footerValue">{contact.phone}</span>
        </div>

        <div className="footerCol">
          <span className="footerLabel">{contact.emailLabel}</span>
          <span className="footerValue">{contact.email}</span>
        </div>

        <div className="footerCol footerIcons">
          <a className="iconBtn" href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="iconBtn" href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a className="iconBtn" href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
