import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserType } from "../../Types/User.type";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import { IoMdStats, IoMdSettings, IoIosPower } from "react-icons/io";
import { RowItem } from "../Shared/StyledComponents/RowItem";

type SidebarProps = {
  userID: number;
};

export const NavigationSidebar: React.FC<SidebarProps> = ({ userID }) => {
  const [user, setUser] = useState<UserType | null>(null);

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
      <Avatar
        src={user?.avatar.url}
        width="100px"
        height="100px"
        alt="User avatar"
      />
      <Title>Witaj {user?.username}!</Title>
      <RowItem as={NavLink} to="/projects">
        Projekty
      </RowItem>
      <ProjectsList projectsList={user?.time_lord_projects} />

      <NavWrapper>
        <RowItem as={NavLink} to="/statistics">
          <IoMdStats />
          Statystyki
        </RowItem>
        <RowItem as={NavLink} to="/settings">
          <IoMdSettings />
          Ustawienia
        </RowItem>
        <RowItem>
          <IoIosPower />
          Wyloguj
        </RowItem>
      </NavWrapper>
    </Sidebar>
  );
};

const NavWrapper = styled.nav`
  margin-top: auto;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 1rem auto 0;
`;
