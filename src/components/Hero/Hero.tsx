import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import resume from "../../assets/ShivShaktiSinghResume.pdf";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">

        {/* Role */}
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <span className="role">
            SENIOR FRONTEND DEVELOPER
          </span>
        </ScrollAnimation>

        {/* Main Heading */}
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1>
            Hi, I'm <span>Shiv Shakti</span>.
            <br />
            I build fast,
            <br />
            accessible web
            <br />
            experiences.
          </h1>
        </ScrollAnimation>

        {/* Description */}
        <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <p className="hero-description">
            Senior frontend engineer focused on scalable architecture,
            exceptional user experiences, and measurable impact.
          </p>
        </ScrollAnimation>

        {/* Buttons */}
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <div className="hero-buttons">
            <a
              href="#contact"
              className="hire-button"
            >
              <span>✉</span>
              Hire Me
            </a>

            <a
              href={resume}
              download="Shiv-Shakti-Singh-Resume.pdf"
              className="resume-button"
            >
              <span>↓</span>
              Download Resume
            </a>
          </div>
        </ScrollAnimation>
      </div>

      {/* Right Side Illustration */}
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Frontend developer illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}