import "./styles.css";
import ProjectCard from "../ProjectCard";

export default function CaroulselProjects() {
  return (
    <>
      <section id="projects" className="msp-carousel-projects-container">
          <h1 className="msp-tiltle-projects-container">Projects</h1>
          <ProjectCard />
      </section>
    </>
  );
}
