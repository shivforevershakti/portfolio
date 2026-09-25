import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

const roles = [
  {
    title: "Software Engineer",
    company: "TEKsystems — Client: HP",
    period: "April 2025 — Present",
    points: [
      "Developing enterprise frontend applications using React, JavaScript, TypeScript, and modern UI technologies.",
      "Working on WEX UI and building reusable, scalable, and maintainable frontend components.",
      "Developing and integrating Microfrontend-based applications for modular and independently deployable UI experiences.",
      "Working with GraphQL and REST APIs to build data-driven application workflows.",
      "Implementing WCAG-compliant and accessible user interfaces across enterprise applications.",
      "Working with Highcharts to build interactive data visualizations and chart-based user experiences.",
      "Building and integrating Node.js services and working with Java and Spring Boot backend APIs.",
      "Optimizing application performance, responsiveness, cross-browser compatibility, and overall user experience.",
      "Collaborating with backend, QA, DevOps, and product teams throughout the development and delivery lifecycle.",
      "Working with Git, CI/CD pipelines, AWS, and enterprise development workflows.",
      "Contributing to code reviews, debugging, technical improvements, and production issue resolution.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "CEDCOSS Technologies",
    period: "April 2022 — February 2025",
    points: [
      "Developed responsive web applications using React, JavaScript, TypeScript, HTML, and CSS.",
      "Built reusable components and managed application state using React Hooks, Context API, and Redux.",
      "Integrated REST APIs and third-party services into frontend applications.",
      "Developed mobile-first and accessible UI with a focus on performance and user experience.",
      "Worked on HubSpot and its applications and marketplace integrations.",
      "Implemented frontend features based on business requirements and UI/UX designs.",
      "Collaborated with cross-functional teams throughout the development, testing, and deployment lifecycle.",
      "Participated in code reviews, debugging, optimization, and maintenance of production applications.",
    ],
  },
];

export function Experience() {
  return (
    <Container id="experience">
      <ScrollAnimation animateIn="fadeInUp">
        <span className="eyebrow">EXPERIENCE</span>

        <h2>Career Timeline</h2>

        <p className="intro">
          4+ years of experience building scalable, responsive, and
          performance-focused web applications with React and modern
          frontend technologies.
        </p>
      </ScrollAnimation>

      <div className="timeline">
        {roles.map((role, index) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={index * 100}
            key={`${role.company}-${role.title}`}
          >
            <article className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />

              <div className="timeline-heading">
                <h3>{role.title}</h3>

                <span className="company">
                  @ {role.company}
                </span>

                <span className="period">
                  {role.period}
                </span>
              </div>

              <ul>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}