import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    body, button {
      margin: 0;
      font-family: -apple-system, Roboto, 'Segoe UI', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${({ theme }) => theme.font.normal};
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.fontColor};
    }

    li {
      list-style: none;
    }

    ul {
      padding: 0;
    }

    a {
      color: inherit;
    }

    textarea {
      font-family: -apple-system, Roboto, 'Segoe UI', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${({ theme }) => theme.font.normal};
    }

    h1 {
      font-size: ${({ theme }) => theme.font.big};
      font-weight: bold;
    }
  `;
