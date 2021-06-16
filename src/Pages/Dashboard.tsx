import styled from "styled-components";
import { Complementary } from "../Components/Complementary/Complementary";
import { Main } from "../Components/Main/Main";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";

export const Dashboard = () => {
  return (
    <Container>
      <NavigationSidebar userID={1} />
      <Main />
      <Complementary />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
