import styled, { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routing } from "./Components/Routing/Routing";
import { SessionContextProvider } from "./Context/SessionContext";

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

    a {
      color: inherit;
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider>
        <Container>
          <GlobalStyle />
          <Routing />
        </Container>
      </SessionContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`;
