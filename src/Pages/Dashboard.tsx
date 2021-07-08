import styled from "styled-components";
import { Main } from "../Components/Main/Main";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";
import { FetchError } from "../Components/Shared/FetchError";
import { LoadingSpinner } from "../Components/Shared/LoadingSpinner";
import { useQuery } from "react-query";
import { fetchMe } from "../API/Endpoints/fetchMe";

export const Dashboard = () => {
  const { status, data } = useQuery("me", fetchMe);
  const user = data?.data;

  if (status === "loading" || !user) return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  return (
    <Container>
      <NavigationSidebar userID={user.id} />
      <Main userID={user.id} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
