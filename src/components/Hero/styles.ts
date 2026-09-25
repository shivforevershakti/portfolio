import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  padding: 15% 0 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
  background: var(--surface);

  .hero-text{
    max-width: 70rem;

    & > p{
      font-size: 1.8rem;
    }

    h1{
      color: var(--text-primary);
      font-size: clamp(4.5rem, 7vw, 7rem);
      line-height: 1;
    }

    h1 span,
    .role {
      color: var(--green);
    }

    .hero-description {
      max-width: 60rem;
      margin-top: 2.5rem;
      color: var(--text-secondary);
      line-height: 1.7;
    }
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    margin-top: 3rem;

    a {
      padding: 1.2rem 2.4rem;
      border-radius: 2rem;
      font-weight: 600;
    }

    .hire-button {
      background: var(--green);
      color: var(--surface);
    }

    .resume-button {
      border: 1px solid var(--border-subtle);
      color: var(--text-primary);
    }
  }

  .hero-image{
    img{
      display: block;
      width: min(100%, 50rem);
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      margin-top: 5rem;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`