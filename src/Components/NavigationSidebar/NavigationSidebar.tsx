import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserType } from "../../Types/User.type";

type SidebarProps = {
  userID: number;
};

export const NavigationSidebar: React.FC<SidebarProps> = ({ userID }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const projectsList = [
    { id: 1, name: "kanapkozercy.pl", status: "dev" },
    { id: 2, name: "Time Lord", status: "dev" },
    { id: 3, name: "Studia", status: "dev" },
    { id: 4, name: "X-info", status: "dev" },
  ];

  useEffect(() => {
    const API_URL = "https://general-strapi.herokuapp.com";
    // process.env.NODE_ENV === "development"
    //   ? "http://localhost:1337"
    //   : "https://general-strapi.herokuapp.com";

    fetch(`${API_URL}/time-lord-users/${userID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, [userID]);

  if (user === null) {
    <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Title>Witaj {user?.username}!</Title>
      <Heading>Projekty</Heading>

      <NavWrapper>
        <Heading>Statystyki</Heading>
        <Heading>Ustawienia</Heading>
        <Heading>Wyloguj</Heading>
      </NavWrapper>
    </Container>
  );
};

const NavWrapper = styled.nav`
  margin-top: auto;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 400;
`;

const Title = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  background: #202020;
  color: white;
  width: 200px;
  height: 100vh;
  padding: 0 1.5rem;

  ::before {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    right: 0;
    content: "";

    background: linear-gradient(
      to bottom,
      #df6d6d,
      #f9c182,
      #fafa9a,
      #85e099,
      #80c8ff,
      #bf80ff
    );

    background: linear-gradient(
      to bottom,
      red,
      orange,
      yellow,
      green,
      blue,
      purple
    );
  }
`;
