import styled from "styled-components";
import { Main } from "../Components/Main/Main";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";

export const Dashboard = () => {
  return (
    <Container>
      <NavigationSidebar userID={1} />
      <Main />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
