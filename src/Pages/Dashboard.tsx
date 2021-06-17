import styled from "styled-components";
import { Complementary } from "../Components/Complementary/Complementary";
import { Main } from "../Components/Main/Main";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";
import { BrowserRouter } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Container>
      <BrowserRouter>
        <NavigationSidebar userID={1} />
        <Main />
      </BrowserRouter>
      <Complementary />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
