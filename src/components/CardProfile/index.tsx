
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
        <div className="skills-container">
          <div>
            <h2>Skills</h2>
          </div>
          <div>
          {skill.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
