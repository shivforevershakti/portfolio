import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  padding: 8rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 7rem;
  color: var(--text-primary);

  .about-text {
    order: 1;
  }

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
    max-width: 62rem;
    margin: 2rem 0 1.5rem;
    font-size: clamp(3.2rem, 4.5vw, 5.2rem);
    line-height: 1.08;
    letter-spacing: -0.2rem;
  }

  .intro {
    margin-bottom: 6rem;
    color: var(--text-secondary);
    font-size: 1.8rem;
  }

  h3 {
    margin-bottom: 1.8rem;
    font-size: 2.2rem;
  }

  p {
    max-width: 62rem;
    margin-bottom: 1.8rem;
    color: var(--text-secondary);
    font-size: 1.65rem;
    line-height: 1.7;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-top: 3rem;
  }

  .feature-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--border-subtle);
    border-radius: 1.2rem;
    background: var(--surface-raised);

    strong,
    span {
      display: block;
    }

    strong {
      margin-bottom: 0.6rem;
      font-size: 1.45rem;
    }

    div span {
      color: var(--text-secondary);
      font-size: 1.25rem;
      line-height: 1.4;
    }
  }

  .feature-icon {
    display: grid;
    flex: 0 0 2.8rem;
    width: 2.8rem;
    height: 2.8rem;
    place-items: center;
    border-radius: 0.8rem;
    background: rgba(35, 206, 107, 0.14);
    color: var(--green);
    font-weight: 700;
  }

  .feature-card > .feature-icon {
    display: grid;
    align-self: center;
    place-items: center;
    line-height: 1;
  }

  .hard-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 2rem;
  }

  .skill {
    padding: 0.7rem 1.2rem;
    border: 1px solid var(--border-subtle);
    border-radius: 999px;
    color: var(--text-secondary);
    font-size: 1.3rem;
  }

  .about-image{
    order: 2;
    img {
      display: block;
      width: 100%;
      max-width: 48rem;
      margin: 0 auto;
      border-radius: 1.2rem;
      object-fit: cover;
      aspect-ratio: 1 / 1;
    }
  }

  @media (max-width: 960px){
    grid-template-columns: 1fr;
    gap: 4rem;

    .about-text,
    .about-image {
      order: initial;
    }
  }

  @media (max-width: 600px) {
    margin-top: 8rem;
    padding: 5rem 0;
    gap: 3rem;

    .intro {
      margin-bottom: 3rem;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
`;