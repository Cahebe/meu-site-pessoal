import "./styles.css";
import LinkedinIcon from "./../../assets/socialmedia/LinkedIn_icon 1.svg";
import InstagramIcon from "./../../assets/socialmedia/icons8-instagram.svg";
import GitHubIcon from "./../../assets/socialmedia/GitHubVector.svg";
import GmailIcon from "./../../assets/socialmedia/Gmail_icon_(2020) 1.svg";

export default function Header() {
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Sobre Mim</a>
            </li>
          </ul>
        </div>
        <div className="msp-social-media-container">
          <a href="#">
            <img src={LinkedinIcon} alt="" />
          </a>
          <a href="http://instagram.com/cahebee" target="_blank">
            <img src={InstagramIcon} alt="" />
          </a>
          <a href="#">
            <img src={GitHubIcon} alt="" />
          </a>
          <a href="#">
            <img src={GmailIcon} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
}
