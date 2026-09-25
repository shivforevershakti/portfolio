import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    --surface: #212121;
    --surface-raised: #2b2b2b;
    --text-primary: #f5f5f5;
    --text-secondary: #b2b2b2;
    --border-subtle: rgba(255, 255, 255, 0.12);
    --header-surface: rgba(33, 33, 33, 0.8);
    scroll-padding-top: 10rem;

    &.light{
      --black: #f5f5f5;
      --surface: #f5f5f5;
      --surface-raised: #ffffff;
      --text-primary: #212121;
      --text-secondary: #6f7280;
      --border-subtle: rgba(33, 33, 33, 0.14);
      --header-surface: rgba(245, 245, 245, 0.86);

      body{
        transition: 0.5s;
        background-color: var(--surface);
        color: var(--text-primary);
      }

      .logo{
        color: var(--text-primary);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: var(--header-surface);
        a{
          transition: 0.5s;
          color: var(--text-primary);
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--text-primary);
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: var(--surface-raised);
        color: var(--text-primary);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--border-subtle);
          color: var(--text-primary);
          &::placeholder{
            transition: 0.5s;
            color: var(--text-secondary);
          }
        }
      }

      #tsparticles {
        opacity: 0.2;
      }
    }
  }



  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--surface);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: var(--surface);
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: var(--text-primary);
    // &::first-letter{
    //   color: var(--green);
    // }
  }
  

`