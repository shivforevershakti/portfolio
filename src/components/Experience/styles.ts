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
    margin-bottom: 5rem;
    color: var(--text-secondary);
    font-size: 1.7rem;
    line-height: 1.6;
  }

  .timeline {
    position: relative;
    padding-left: 2.8rem;

    &::before {
      position: absolute;
      top: 0.8rem;
      bottom: 0;
      left: 0.7rem;
      width: 1px;
      background: var(--green);
      content: "";
      opacity: 0.7;
    }
  }

  .timeline-item {
    position: relative;
    padding-bottom: 4rem;

    &:last-child {
      padding-bottom: 0;
    }
  }

  .timeline-marker {
    position: absolute;
    top: 0.4rem;
    left: -2.8rem;
    width: 1.8rem;
    height: 1.8rem;
    border: 3px solid var(--green);
    border-radius: 50%;
    background: var(--surface);
    box-shadow: 0 0 0 3px var(--surface);
  }

  .timeline-heading {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
    margin-bottom: 1.2rem;

    h3 {
      font-size: 1.8rem;
    }

    .company {
      color: var(--green);
      font-size: 1.6rem;
      font-weight: 600;
    }

    .period {
      margin-left: auto;
      padding: 0.6rem 1.2rem;
      border-radius: 999px;
      background: var(--surface-raised);
      color: var(--text-secondary);
      font-size: 1.3rem;
    }
  }

  ul {
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.8rem;
    color: var(--text-secondary);
    font-size: 1.5rem;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    margin-top: 4rem;
    padding: 5rem 0;

    .timeline-heading {
      display: block;

      .company,
      .period {
        display: block;
        margin: 0.7rem 0 0;
      }
    }
  }
`;
