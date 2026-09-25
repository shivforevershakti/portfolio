import { Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <span className="eyebrow">CONTACT</span>
      <h2>Let&apos;s Build Something Together</h2>
      <p className="intro">
        Open to senior frontend roles, freelance projects, and consulting.
        I&apos;ll respond within a day.
      </p>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:contactshivshaktisingh@gmail.com">
          <span className="contact-icon" aria-hidden="true">✉</span>
          <span>
            <small>EMAIL</small>
            <strong>contactshivshaktisingh@gmail.com</strong>
          </span>
        </a>
        <a
          className="contact-card"
          href="https://api.whatsapp.com/send/?phone=%2B919026814199&text=Hello+Shiv"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon" aria-hidden="true">⌕</span>
          <span>
            <small>PHONE</small>
            <strong>+91 9026814199</strong>
          </span>
        </a>
        <div className="contact-card">
          <span className="contact-icon" aria-hidden="true">⌖</span>
          <span>
            <small>LOCATION</small>
            <strong>Lucknow, Uttar Pradesh, India</strong>
          </span>
        </div>
      </div>
    </Container>
  );
}
