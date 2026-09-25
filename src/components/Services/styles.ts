import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 8rem 0;
  color: var(--text-primary);

  .eyebrow {
    display: inline-block;
    padding: 0.7rem 1.3rem;
    border-radius: 999px;
    background: rgba(35, 206, 107, 0.14);
    color: var(--green);
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.15rem;
  }

  h2 {
    margin: 2rem 0 1.5rem;
    font-size: clamp(3.2rem, 4.5vw, 5.2rem);
    line-height: 1.08;
  }

  .intro {
    margin-bottom: 4.5rem;
    color: var(--text-secondary);
    font-size: 1.7rem;
    line-height: 1.6;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.8rem;
  }

  .service-card {
    min-height: 26rem;
    padding: 2.2rem;
    border: 1px solid var(--border-subtle);
    border-radius: 1.2rem;
    background: var(--surface-raised);
    transition: transform 0.2s ease, border-color 0.2s ease;

    &:hover {
      border-color: var(--green);
      transform: translateY(-4px);
    }

    h3 {
      margin: 2rem 0 1rem;
      font-size: 1.7rem;
      line-height: 1.45;
    }

    p {
      color: var(--text-secondary);
      font-size: 1.45rem;
      line-height: 1.65;
    }
  }

  .service-icon {
    display: grid;
    width: 4.4rem;
    height: 4.4rem;
    place-items: center;
    border-radius: 1.1rem;
    background: rgba(35, 206, 107, 0.14);
    color: var(--green);
    font-size: 2rem;
  }

  @media (max-width: 960px) {
    .service-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    margin-top: 4rem;
    padding: 5rem 0;

    .service-grid {
      grid-template-columns: 1fr;
    }
  }
`;
