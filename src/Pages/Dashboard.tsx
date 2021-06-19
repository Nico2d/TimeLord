import styled from "styled-components";
import { Complementary } from "../Components/Complementary/Complementary";
import { Main } from "../Components/Main/Main";
import { NavigationSidebar } from "../Components/NavigationSidebar/NavigationSidebar";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserType } from "../Types/User.type";
import { API_URL } from "../constants";

export const Dashboard = () => {
  const userID = 1;
  const [user, setUser] = useState<UserType>({} as UserType);

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
      <BrowserRouter>
        <NavigationSidebar user={user} />
        <Main projectsList={user.time_lord_projects} />
      </BrowserRouter>
      <Complementary />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
