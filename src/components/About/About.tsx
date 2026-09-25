
import { Container } from "./styles";
import ShivShaktiSingh from "../../assets/ShivShaktiSingh.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <span className="eyebrow">ABOUT</span>
          <h2>Building polished digital experiences.</h2>
          <p className="intro">
            Senior frontend engineer focused on craft, collaboration, and
            measurable outcomes.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <h3>Crafting user-focused interfaces since 2022.</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            I'm Shiv Shakti, a senior frontend developer building polished,
            production-grade interfaces. I specialize in React, JavaScript,
            TypeScript, and modern e-commerce platforms, turning complex
            requirements into fast, accessible, and maintainable UIs.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I care deeply about performance, accessibility, and writing code
            that helps the next engineer move faster.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <div>
                <strong>Performance-first</strong>
                <span>Core Web Vitals and fast loading.</span>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <div>
                <strong>Component systems</strong>
                <span>Scalable, reusable UI foundations.</span>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <div>
                <strong>E-commerce</strong>
                <span>Shopify and conversion-focused builds.</span>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <div>
                <strong>Accessibility</strong>
                <span>Keyboard and screen-reader friendly.</span>
              </div>
            </div>
              <div className="feature-card">
              <span className="feature-icon">✓</span>
              <div>
                <strong>Payment Gateway</strong>
                <span>Secure and seamless payment processing.</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="hard-skills" aria-label="Technologies">
          {["React", "TypeScript", "Next.js", "Redux", "HubSpot", "JavaScript"].map(
            (skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.22 * 1000}>
          <img src={ShivShaktiSingh} alt="Shiv Shakti Singh in a suit" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
