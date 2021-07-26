import styled, { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routing } from "./Components/Routing/Routing";
import { SessionContextProvider } from "./Context/SessionContext";
import { GlobalStyle } from "./Styles/global";
import { theme } from "./Styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider>
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalStyle />
            <Routing />
          </Container>
        </ThemeProvider>
      </SessionContextProvider>
    </QueryClientProvider>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
`;
