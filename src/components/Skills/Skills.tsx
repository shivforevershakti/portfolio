import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import githubIcon from "../../assets/github.svg";

const skills = [
  ["React", reactIcon],
  ["JavaScript", jsIcon],
  ["TypeScript", typescriptIcon],
  ["HTML5", htmlIcon],
  ["CSS", cssIcon],
  ["Sass", sassIcon],
  ["Vue.js", vueIcon],
  ["Bootstrap", bootstrapIcon],
  ["Node.js", nodeIcon],
  ["GitHub", githubIcon],
  ["WebPack", "https://cdn.simpleicons.org/webpack/00000"],
  ["Vite", "https://cdn.simpleicons.org/vite/000000"],
];

export function Skills() {
  return (
    <Container id="skills">
      <ScrollAnimation animateIn="fadeInUp">
        <span className="eyebrow">TECH STACK</span>
        <h2>Technologies &amp; Skills Behind My Workflow</h2>
        <p className="intro">
          A comprehensive toolkit built through hands-on development experience.
        </p>
      </ScrollAnimation>

      <div className="skills-grid">
        {skills.map(([name, icon], index) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={index * 50}
            key={name}
          >
            <div className="skill-card">
              <img src={icon} alt="" aria-hidden="true" />
              <span>{name}</span>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
