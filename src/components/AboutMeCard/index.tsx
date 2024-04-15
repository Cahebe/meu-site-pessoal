import "./styles.css";
import MeImg from "../../assets/me/Sem título1 (1).png";

export default function AboutMeCard() {
  return (
    <>
      <section id="about-me" className="msp-about-me-container">
        <img src={MeImg} alt="" />
        <div className="msp-about-me-content-container">
          <h1>Sobre mim</h1>
          <p>
            Lorem ipsum dolor sit amet. In numquam debitis hic Quis ipsum nam
            modi natus et reiciendis optio non alias fugit ex quia assumenda sit
            ipsam eaque. Et corrupti veniam qui perferendis laudantium est vero
            vero?Lorem ipsum dolor sit amet. In numquam debitis hic Quis ipsum
            nam modi natus et reiciendis optio non alias fugit ex quia assumenda
            sit ipsam eaque. Et corrupti veniam qui perferendis laudantium est
            vero vero?
          </p>
        </div>
      </section>
    </>
  );
}
