import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Dashboard } from "./Components/Dashboard";
import { LandingPage } from "./Components/LandingPage";

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

function App() {
  return (
    <Container>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  text-align: center;
`;
