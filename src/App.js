import styled from "styled-components";
import { MainSection } from "./Components/Main/MainSection";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Complementary } from "./Components/Complementary/Complementary";
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
      <Complementary />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #121212;
`;
