import { useEffect, useState } from "react";
import { Sidebar } from "../../../Shared/StyledComponents/Sidebar";
import { ProjectsList } from "../../../Projects/NavigationProjectsList";
import {
  IoMdStats,
  IoMdSettings,
  IoIosPower,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { RowItem } from "../RowItem/RowItem";
import { useSignOutUser } from "../../../../Hooks/useSignOutUser/useSignOutUser";
import { useUser } from "../../../../API/Hooks/useUser";
import { LoadingSpinner } from "../../../Shared/LoadingSpinner";
import { FetchError } from "../../../Shared/FetchError";
import { useMedia } from "react-use";
import { Avatar } from "../Avatar/Avatar";
import * as Styled from "./SideNavigation.styles";
type SidebarProps = {
  userID: string;
};

export const SideNavigation = ({ userID }: SidebarProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const [SignOutUser] = useSignOutUser();
  const [status, user] = useUser(userID);
  const isMobile = useMedia("(max-width: 1200px)");
  const isSmartphone = useMedia("(max-width: 760px)");

  useEffect(() => {
    setIsHidden(isMobile);
  }, [isMobile]);

  if (status === "loading") return <LoadingSpinner />;
  else if (status === "error") return <FetchError />;

  return (
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

      <Styled.NavWrapper>
        <div onClick={() => setIsHidden((isHidden) => !isHidden)}>
          <RowItem
            icon={isHidden ? <IoIosArrowForward /> : <IoIosArrowBack />}
            text={isHidden ? "Zwiń menu" : "Rozwiń menu"}
            link="#"
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
          <RowItem
            icon={<IoIosPower />}
            text="Wyloguj"
            link="/"
            isHidden={isHidden}
          />
        </div>
      </Styled.NavWrapper>
    </Sidebar>
  );
};
