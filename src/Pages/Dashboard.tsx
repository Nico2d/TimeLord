import styled from "styled-components";
import { Main } from "../Components/Main/Main";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";
import { useProjectList } from "../Hooks/useProjectList";
import { useUser } from "../API/Hooks/useUser";

export const Dashboard = () => {
  const [status, user] = useUser();

  const [list, addToList] = useProjectList(user.id);

  if (status === "loading") return <Container>Loading...</Container>;
  if (status === "error") return <Container>Error...</Container>;

  console.log(user);

  //REFACTOR HERE - wyjebać te projectsList i zmienić to na synchroniczne useQuery

  console.log(list);

  return (
    <Container>
      <NavigationSidebar userID={user.id} />
      <Main projectsList={list} addToList={addToList} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
