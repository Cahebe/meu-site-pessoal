import JavaIcon from "../assets/skills/java-svgrepo-com.svg";
import JavaScriptIcon from "../assets/skills/icons8-javascript.svg";
import SpringIcon from "../assets/skills/icons8-logotipo-spring.svg";
import TypeScriptIcon from "../assets/skills/icons8-typescript.svg";
import ReactIcon from "../assets/skills/icons8-react.svg";
import GitHubIcon from "../assets/skills/icons8-github.svg";
import PostmanIcon from "../assets/skills/postman-icon.svg";
import FigmaIcon from "../assets/skills/icons8-figma.svg";

export interface SkillDTO  {
  name: string;
  description: string;
  icon: string;
}

export const skills = [
  {
    name: "Java",
    description: "Experiência em desenvolvimento web e desktop com Java.",
    icon: JavaIcon,
  },
  {
    name: "Spring Boot",
    description:
      "Habilidades em React, Node.js e desenvolvimento web front-end.",
    icon: SpringIcon,
  },
  {
    name: "JavaScript",
    description:
      "Habilidades em React, Node.js e desenvolvimento web front-end.",
    icon: JavaScriptIcon,
  },
  {
    name: "TypeScript",
    description:
      "Habilidades em React, Node.js e desenvolvimento web front-end.",
    icon: TypeScriptIcon,
  },
  {
    name: "React",
    description:
      "Habilidades em React, Node.js e desenvolvimento web front-end.",
    icon: ReactIcon,
  },
  {
    name: "GitHub",
    description:
      "Habilidades em React, Node.js e desenvolvimento web front-end.",
    icon: GitHubIcon,
  },
  {
    name: "Postman",
    description:
      "Habilidades em React, Node.js e desenvolvimento web front-end.",
    icon: PostmanIcon,
  },
  {
    name: "Figma",
    description:
      "Habilidades em React, Node.js e desenvolvimento web front-end.",
    icon: FigmaIcon,
  },
];
