import React from "react";
import styled from "styled-components";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";
import { ProjectsList } from "../Projects/NavigationProjectsList";
import { IoMdStats, IoMdSettings, IoIosPower } from "react-icons/io";
import { RowItem } from "../Shared/RowItem";
import { useSignOutUser } from "../../Hooks/useSignOutUser/useSignOutUser";
import { useUser } from "../../API/Hooks/useUser";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { FetchError } from "../Shared/FetchError";

type SidebarProps = {
  userID: string;
};

export const NavigationSidebar: React.FC<SidebarProps> = ({ userID }) => {
  const [SignOutUser] = useSignOutUser();
  const [status, user] = useUser(userID);

  if (status === "loading") return <LoadingSpinner />;
  else if (status === "error") return <FetchError />;

  return (
    <Sidebar position="left" width="250px">
      {/* <Avatar
        src={user.avatar.url}
        width="100px"
        height="100px"
        alt="User avatar"
      /> */}
      <Title>Witaj {user.username}!</Title>

      <RowItem text="Projekty" link="/projects"></RowItem>
      <ProjectsList projectsList={user.time_lord_projects} />

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

        <div onClick={SignOutUser}>
          <RowItem icon={<IoIosPower />} text="Wyloguj"></RowItem>
        </div>
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

// const Avatar = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin: 1rem auto 0;
// `;
