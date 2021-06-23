import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Dashboard } from "./Pages/Dashboard";
import { LandingPage } from "./Pages/LandingPage";
import { Timer } from "./Pages/Timer";

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      
    }

    li {
      list-style: none;
    }

    ul{
      padding: 0;
    }

    body, button {
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

    h1 {
      font-size: 24px;
      font-weight: bold;
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
          <Route path="/projects">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Dashboard />
          </Route>

          <Route path="/timer">
            <Timer />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`;
