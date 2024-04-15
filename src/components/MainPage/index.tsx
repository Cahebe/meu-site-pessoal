import "./styles.css";
import Header from "../Header";
import MeImg from "../../assets/me/Sem título1 (1).png";
import CardProfile from "../CardProfile";
import { skills } from "../../models/skill";
import ContactMeSection from "../ContactMeSection";

export default function MainPage() {
  return (
    <>
      <Header />
      
      <main className="msp-main-container">
      <div className="elipse-blur"></div>
        <section
          id="main-container-section"
          className="msp-main-content-container"
        >
          <img src={MeImg} alt="" />
          <h1 className="msp-main-text-container">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </h1>
          
        </section>
        <CardProfile skill={skills}/>
        <ContactMeSection />
      </main>
    </>
  );
}
