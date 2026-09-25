import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

const services = [
  {
    icon: "◧",
    title: "UI Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, TypeScript, and modern frontend technologies — from websites to complex enterprise applications.",
  },
  {
    icon: "◈",
    title: "E-commerce Development",
    description:
      "Shopify and Magento development, marketplace integrations, custom storefronts, and tailored e-commerce experiences.",
  },
  {
    icon: "ϟ",
    title: "Performance Optimization",
    description:
      "Frontend performance improvements focused on Core Web Vitals, code splitting, lazy loading, bundle optimization, and runtime performance.",
  },
  {
    icon: "◫",
    title: "Design Systems",
    description:
      "Reusable and scalable component libraries with consistent UI patterns, documentation, responsive design, and accessibility in mind.",
  },
  {
    icon: "₹",
    title: "Payment Gateway Integration",
    description:
      "Payment gateway integrations with secure checkout flows, transaction handling, API integration, and reliable payment experiences.",
  },
  {
    icon: "◇",
    title: "Microfrontend Development",
    description:
      "Modular frontend architectures designed for scalable applications, independent development, reusable modules, and flexible deployments.",
  },
  {
    icon: "◎",
    title: "Accessibility & WCAG",
    description:
      "Accessible web interfaces following WCAG principles, with keyboard navigation, semantic HTML, screen-reader support, and inclusive user experiences.",
  },
  {
    icon: "◉",
    title: "Data Visualization",
    description:
      "Interactive charts, dashboards, and data-driven interfaces using Highcharts and modern frontend technologies.",
  },
  {
    icon: "⌘",
    title: "Backend & API Development",
    description:
      "API development and integration using Node.js, Java, Spring Boot, REST, and GraphQL to support scalable web applications.",
  },
];

export function Services() {
  return (
    <Container id="services">
      <ScrollAnimation animateIn="fadeInUp">
        <span className="eyebrow">SERVICES</span>
        <h2>How I Can Help</h2>
        <p className="intro">
          Focused engagements where a senior frontend engineer moves the needle
          — end-to-end builds, platform work, and performance wins.
        </p>
      </ScrollAnimation>

      <div className="service-grid">
        {services.map((service, index) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={index * 100}
            key={service.title}
          >
            <article className="service-card">
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
