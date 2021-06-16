import styled from "styled-components";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";

export const Dashboard = () => {
  return (
    <Container>
      <NavigationSidebar userID={1} />
      Hello in Dashboard
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
