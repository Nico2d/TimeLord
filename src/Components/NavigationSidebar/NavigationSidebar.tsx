import { useEffect, useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";
import { ProjectsList } from "../Projects/NavigationProjectsList";
import {
  IoMdStats,
  IoMdSettings,
  IoIosPower,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { RowItem } from "../Sidebar/RowItem/RowItem";
import { useSignOutUser } from "../../Hooks/useSignOutUser/useSignOutUser";
import { useUser } from "../../API/Hooks/useUser";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { FetchError } from "../Shared/FetchError";
import { useMedia } from "react-use";
import { Avatar } from "../Avatar/Avatar";

type SidebarProps = {
  userID: string;
};

export const NavigationSidebar = ({ userID }: SidebarProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const isMobile = useMedia("(max-width: 760px)");
  const [SignOutUser] = useSignOutUser();
  const [status, user] = useUser(userID);

  useEffect(() => {
    setIsHidden(isMobile);
  }, [isMobile]);

  if (status === "loading") return <LoadingSpinner />;
  else if (status === "error") return <FetchError />;

  return (
    <>
      <Sidebar position="left" width={isHidden ? "55px" : "250px"}>
        <Avatar
          src={user.avatar.url}
          username={user.username}
          isHidden={isHidden}
        />

        {!isHidden && <RowItem text="Projekty" link="/projects" />}

        <ProjectsList
          projectsList={user.time_lord_projects}
          isHidden={isHidden}
        />

        <NavWrapper>
          <div onClick={() => setIsHidden((isHidden) => !isHidden)}>
            <RowItem
              icon={isHidden ? <IoIosArrowForward /> : <IoIosArrowBack />}
              text={isHidden ? "Zwiń menu" : "Rozwiń menu"}
              isHidden={isHidden}
            />
          </div>

          <RowItem
            icon={<IoMdStats />}
            text="Statystyki"
            link="/statistics"
            isHidden={isHidden}
          />

          <RowItem
            icon={<IoMdSettings />}
            text="Ustawienia"
            link="/settings"
            isHidden={isHidden}
          />

          <div onClick={SignOutUser}>
            <RowItem icon={<IoIosPower />} text="Wyloguj" />
          </div>
        </NavWrapper>
      </Sidebar>

      <div id="sidebarTooltipPortal"></div>
    </>
  );
};

const NavWrapper = styled.nav`
  margin-top: auto;
  margin-bottom: 1rem;
`;
