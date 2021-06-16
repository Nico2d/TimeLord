import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, Roboto, 'Segoe UI', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #121212;
      color: white;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  `;

  return (
    <Container>
      <GlobalStyle />
      <Header>Tutaj jest landing page</Header>

      <button>Przejdź do panelu</button>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  text-align: center;
`;

const Header = styled.h1`
  margin-top: 0;
`;
