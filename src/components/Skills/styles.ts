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

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.2rem;
  }

  .skill-card {
    display: flex;
    min-height: 13rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    border: 1px solid var(--border-subtle);
    border-radius: 1.2rem;
    background: var(--surface-raised);
    color: var(--text-secondary);
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      border-color: var(--green);
      color: var(--text-primary);
      transform: translateY(-3px);
    }

    img {
      width: 4rem;
      height: 4rem;
      object-fit: contain;
      filter: grayscale(1) brightness(1.8);
    }

    span {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  @media (max-width: 960px) {
    .skills-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 600px) {
    margin-top: 4rem;
    padding: 5rem 0;

    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
