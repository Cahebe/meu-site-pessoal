import "./styles.css";
import LinkedinIcon from "./../../assets/socialmedia/LinkedIn_icon 1.svg";
import InstagramIcon from "./../../assets/socialmedia/icons8-instagram.svg";
import GitHubIcon from "./../../assets/socialmedia/GitHubVector.svg";
import GmailIcon from "./../../assets/socialmedia/Gmail_icon_(2020) 1.svg";
import { MouseEvent } from "react";

export default function Header() {
  const handleLinkClick = (event: MouseEvent, sectionId: string) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    const targetSection = document.getElementById(sectionId);
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="msp-header">
      <nav className="msp-header-container">
        <div className="msp-logo-container">
          <h1>Cahebe</h1>
          <h1 className="dot">.</h1>
        </div>
        <div>
          <ul className="msp-header-menu-container">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projetos</a>
            </li>
            <li>
              <a href="#about-me" onClick={(e) => handleLinkClick(e, 'about-me')}>Sobre Mim</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contato</a>
            </li>
          </ul>
        </div>
        <div className="msp-social-media-container">
          <a href="https://www.linkedin.com/in/cahebecorrea" target="_blank">
            <img src={LinkedinIcon} alt="" />
          </a>
          <a href="http://instagram.com/cahebee" target="_blank">
            <img src={InstagramIcon} alt="" />
          </a>
          <a href="https://github.com/cahebe" target="_blank">
            <img src={GitHubIcon} alt="" />
          </a>
          <a href="mailto:cahebe@gmail.com?subject=Contato%20do%20Site">
            <img src={GmailIcon} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
}
