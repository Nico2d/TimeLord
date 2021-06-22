import React from "react";
import styled from "styled-components";
import { UserType } from "../../Types/User.type";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";
import { ProjectsList } from "../Projects/NavigationProjectsList";
import { IoMdStats, IoMdSettings, IoIosPower } from "react-icons/io";
import { RowItem } from "../Shared/RowItem";
import { ProjectType } from "../../Types/Project.type";

type SidebarProps = {
  user: UserType;
  projectList: ProjectType[];
};

export const NavigationSidebar: React.FC<SidebarProps> = ({
  user,
  projectList,
}) => {
  return (
    <Sidebar location="left" width="250px">
      <Avatar
        src={user.avatar.url}
        width="100px"
        height="100px"
        alt="User avatar"
      />
      <Title>Witaj {user.username}!</Title>

      <RowItem text="Projekty" link="/projects"></RowItem>
      <ProjectsList projectsList={projectList} />

      <NavWrapper>
        <RowItem
          icon={<IoMdStats />}
          text="Statystyki"
          link="/statistics"
        ></RowItem>
        <RowItem
          icon={<IoMdSettings />}
          text="Ustawienia"
          link="/settings"
        ></RowItem>
        <RowItem
          icon={<IoIosPower />}
          text="Wyloguj"
          link="/settings"
        ></RowItem>
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
