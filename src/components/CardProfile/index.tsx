
import { SkillDTO } from "../../models/skill";
import SkillCard from "../SkillCard";
import "./styles.css";

type Props = {
  skill: SkillDTO[]
}



export default function CardProfile({ skill }: Props) {
  
  return (
    <>
      <section id="main-card" className="msp-card-container">
        <div className="msp-skills-container">
          <div>
            <h2 className="msp-tiltle-skills-container">Skills</h2>
          </div>
          <div className="msp-skills-card-container">
          {skill.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
