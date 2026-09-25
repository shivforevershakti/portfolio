import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 8rem 0 4rem;
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

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }

  .contact-card {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 1.5rem;
    padding: 2.2rem;
    border: 1px solid var(--border-subtle);
    border-radius: 1.2rem;
    background: var(--surface-raised);
    color: var(--text-primary);
    text-decoration: none;

    &:hover {
      border-color: var(--green);
    }

    small,
    strong {
      display: block;
    }

    small {
      margin-bottom: 0.8rem;
      color: var(--text-secondary);
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
    }

    strong {
      overflow: hidden;
      font-size: 1.5rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .contact-icon {
    display: grid;
    flex: 0 0 4.5rem;
    width: 4.5rem;
    height: 4.5rem;
    place-items: center;
    border-radius: 1.1rem;
    background: rgba(35, 206, 107, 0.14);
    color: var(--green);
    font-size: 2.2rem;
  }

  .social-media {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 4rem;

    a {
      display: grid;
      width: 4.8rem;
      height: 4.8rem;
      place-items: center;
      border: 1px solid var(--border-subtle);
      border-radius: 50%;
      background: var(--surface-raised);

      &:hover {
        border-color: var(--green);
      }
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 760px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
`;
