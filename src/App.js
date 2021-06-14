import styled from "styled-components";
import { MainSection } from "./Components/Main/MainSection";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { createGlobalStyle, ThemeProvider } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  body, html {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

  return (
    <Container>
      <GlobalStyle whiteColor />
      <Sidebar />
      <MainSection />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  background: #121212;
`;
