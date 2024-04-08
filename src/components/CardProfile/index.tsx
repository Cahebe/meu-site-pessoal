import SkillCard from "../SkillCard";
import "./styles.css";

export default function CardProfile() {
  return (
    <>
      <section id="main-card" className="msp-card-container">
        <div className="skills-container">
          <div>
            <h2>Skills</h2>
          </div>
          <div>
            <SkillCard />
          </div>
        </div>
      </section>
    </>
  );
}
