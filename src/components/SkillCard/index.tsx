import "./styles.css";
import { SkillDTO } from "../../models/skill";

type Props = {
  skill: SkillDTO;
};

export default function SkillCard({ skill }: Props) {
  return (
    <>
        <div className="skill-card-container">
          <div className="icon-container">
            <img src={skill.icon} alt={skill.name} />
          </div>
          <div className="skill-description-container">
            <h2 className="skill-name">{skill.name}</h2>
            <h4 className="skill-description">{skill.description}</h4>
          </div>
        </div>
    </>
  );
}
