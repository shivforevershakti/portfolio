
import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;

  gap: 4rem;

  padding: 7rem 7%;
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(255, 166, 0, 0.06),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(255, 166, 0, 0.04),
      transparent 30%
    ),
  color: #fff;

  /* subtle background dots */
  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background-image: radial-gradient(
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px
    );

    background-size: 32px 32px;

    opacity: 0.12;
    pointer-events: none;
  }

  .hero-text {
    position: relative;
    z-index: 2;
    max-width: 760px;
  }

  /* -------------------------
     Availability
  ------------------------- */

  .availability {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 10px 16px;

    margin-bottom: 2rem;

    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.04);

    color: #d5d5d5;

    font-size: 14px;
    font-weight: 500;

    backdrop-filter: blur(10px);
  }

  .status-dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #20d98b;

    box-shadow: 0 0 12px rgba(32, 217, 139, 0.7);
  }

  /* -------------------------
     Role
  ------------------------- */

  .role {
    display: block;

    margin-bottom: 1.4rem;

    color: var(--green);

    font-size: 14px;
    font-weight: 700;

    letter-spacing: 3px;
  }

  /* -------------------------
     Main heading
  ------------------------- */

  h1 {
    margin: 0;

    font-size: clamp(3.5rem, 6vw, 5.7rem);

    line-height: 0.98;

    letter-spacing: -4px;

    font-weight: 800;

    color: #f7f7f7;
  }

  h1 span {
    color: var(--green);
  }

  /* -------------------------
     Description
  ------------------------- */

  .hero-description {
    max-width: 650px;

    margin-top: 2.5rem;
    margin-bottom: 1.8rem;

    color: #85868d;

    font-size: 17px;
    line-height: 1.7;
  }

  /* -------------------------
     Buttons
  ------------------------- */

  .hero-buttons {
    display: flex;
    align-items: center;
    gap: 14px;

    margin-top: 1.5rem;
  }

  .hire-button,
  .resume-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 9px;

    height: 46px;

    padding: 0 22px;

    border-radius: 999px;

    text-decoration: none;

    font-size: 15px;
    font-weight: 600;

    transition:
      transform 0.2s ease,
      background 0.2s ease,
      border 0.2s ease;
  }

  .hire-button {
    background: var(--green);
    color: #111217;

    box-shadow: 0 8px 30px rgba(35, 206, 107, 0.25);
  }

  .hire-button:hover {
    transform: translateY(-2px);

    background: #35df7c;
  }

  .resume-button {
    color: #eeeeee;

    border: 1px solid rgba(255, 255, 255, 0.2);

    background: rgba(255, 255, 255, 0.03);
  }

  .resume-button:hover {
    transform: translateY(-2px);

    border-color: rgba(255, 255, 255, 0.4);

    background: rgba(255, 255, 255, 0.07);
  }

  /* -------------------------
     Social icons
  ------------------------- */

  .social-media {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-top: 2rem;
  }

  .social-media a {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;

    background: rgba(255, 255, 255, 0.03);

    transition:
      transform 0.2s ease,
      background 0.2s ease;
  }

  .social-media a:hover {
    transform: translateY(-3px);

    background: rgba(255, 255, 255, 0.08);
  }

  .social-media img {
    width: 18px;
    height: 18px;
  }

  /* -------------------------
     Right Code Window
  ------------------------- */

  .hero-image {
    position: relative;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .code-window {
    width: min(100%, 540px);

    overflow: hidden;

    border: 1px solid rgba(255, 255, 255, 0.1);

    border-radius: 18px;

    background: #0c0d10;

    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.5),
      0 0 80px rgba(35, 206, 107, 0.04);

    transform: rotate(-2deg);

    transition: transform 0.3s ease;
  }

  .code-window:hover {
    transform: rotate(0deg) translateY(-5px);
  }

  /* Window top bar */

  .window-header {
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 18px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    background: #101115;
  }

  .window-dots {
    display: flex;
    gap: 8px;
  }

  .window-dots span {
    width: 12px;
    height: 12px;

    border-radius: 50%;
  }

  .window-dots .red {
    background: #ff5f57;
  }

  .window-dots .yellow {
    background: #ffbd2e;
  }

  .window-dots .green {
    background: #28c840;
  }

  .file-name {
    color: #777982;

    font-family: monospace;
    font-size: 13px;
  }

  /* Code */

  .code-content {
    padding: 28px 30px 34px;
  }

  .code-content pre {
    margin: 0;

    color: #a8aab2;

    font-family: "Fira Code", "Cascadia Code", monospace;

    font-size: 14px;

    line-height: 1.8;

    white-space: pre-wrap;
  }

  /* -------------------------
     Tablet
  ------------------------- */

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    padding: 6rem 6%;

    .hero-text {
      max-width: 800px;
    }

    .hero-image {
      justify-content: flex-start;
    }

    .code-window {
      max-width: 650px;
    }
  }

  /* -------------------------
     Mobile
  ------------------------- */

  @media (max-width: 600px) {
    padding: 5rem 1.5rem 4rem;

    gap: 3rem;

    .availability {
      margin-bottom: 1.5rem;

      font-size: 13px;
    }

    .role {
      font-size: 11px;

      letter-spacing: 2px;
    }

    h1 {
      font-size: clamp(3rem, 15vw, 4.2rem);

      letter-spacing: -2.5px;

      line-height: 1;
    }

    .hero-description {
      margin-top: 2rem;

      font-size: 15px;

      line-height: 1.7;
    }

    .hero-buttons {
      flex-wrap: wrap;
    }

    .hire-button,
    .resume-button {
      height: 44px;

      padding: 0 18px;

      font-size: 14px;
    }

    .code-window {
      width: 100%;

      transform: rotate(0deg);
    }

    .code-content {
      padding: 20px;
    }

    .code-content pre {
      font-size: 11px;

      line-height: 1.7;
    }
  }
`;
