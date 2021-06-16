import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserType } from "../../Types/User.type";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";

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
    <Sidebar location="left">Loading...</Sidebar>;
  }

  return (
    <Sidebar location="left">
      <Title>Witaj {user?.username}!</Title>
      <Heading>Projekty</Heading>

      <NavWrapper>
        <Heading>Statystyki</Heading>
        <Heading>Ustawienia</Heading>
        <Heading>Wyloguj</Heading>
      </NavWrapper>
    </Sidebar>
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
