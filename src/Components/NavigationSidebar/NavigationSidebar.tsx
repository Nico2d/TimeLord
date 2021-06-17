import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserType } from "../../Types/User.type";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import { IoMdStats, IoMdSettings, IoIosPower } from "react-icons/io";
import { RowItem } from "../Shared/StyledComponents/RowItem";

type SidebarProps = {
  user: UserType;
};

export const NavigationSidebar: React.FC<SidebarProps> = ({ user }) => {
  return (
    <Sidebar location="left">
      <Avatar
        src={user.avatar.url}
        width="100px"
        height="100px"
        alt="User avatar"
      />
      <Title>Witaj {user.username}!</Title>
      <RowItem as={NavLink} to="/projects">
        Projekty
      </RowItem>
      <ProjectsList projectsList={user.time_lord_projects} />

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
