import styled from "styled-components";
import { Main } from "../Components/Main/Main";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserType } from "../Types/User.type";
import { API_URL } from "../constants";
import { useProjectList } from "../Hooks/useProjectList";

export const Dashboard = () => {
  const userID = 1;
  const [user, setUser] = useState<UserType>({} as UserType);
  const [list, addToList] = useProjectList(userID);

  useEffect(() => {
    fetch(`${API_URL}/time-lord-users/${userID}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [userID]);

  if (user.username === undefined) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <NavigationSidebar user={user} projectList={list} />
      <Main projectsList={list} addToList={addToList} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
