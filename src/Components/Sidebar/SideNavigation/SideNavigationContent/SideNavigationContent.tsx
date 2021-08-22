import { useState, useEffect, useContext } from "react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdStats,
  IoMdSettings,
  IoIosPower,
} from "react-icons/io";
import { useMedia } from "react-use";
import { useSignOutUser } from "../../../../Hooks/useSignOutUser/useSignOutUser";
import { ProjectsList } from "../../../Projects/NavigationProjectsList";
import { Sidebar } from "../../Sidebar/Sidebar";
import { RowItem } from "../RowItem/RowItem";
import * as Styled from "./SideNavigationContent.styles";
import { Avatar } from "../Avatar/Avatar";
import { UserContext } from "../../../../Context/UserContext";

export const SideNavigationContent = () => {
  const user = useContext(UserContext);
  const [SignOutUser] = useSignOutUser();
  const isMobile = useMedia("(max-width: 460px)");
  const isTablet = useMedia("(min-width: 461px) and (max-width:1060px)");
  const [isShorted, setIsShorted] = useState(false);

  useEffect(() => {
    setIsShorted(isTablet);
  }, [isTablet]);

  return (
    <Sidebar
      position="left"
      width={isShorted ? "55px" : "250px"}
      isMobile={isMobile}
    >
      <Avatar
        src={user.avatar?.url}
        username={user.username}
        isHidden={isShorted}
      />

      {!isShorted && <RowItem text="Projekty" link="/projects" />}

      <ProjectsList
        projectsList={user.time_lord_projects}
        isHidden={isShorted}
      />

      <Styled.NavWrapper>
        <div onClick={() => setIsShorted((isHidden) => !isHidden)}>
          <RowItem
            icon={isShorted ? <IoIosArrowForward /> : <IoIosArrowBack />}
            text={isShorted ? "Zwiń menu" : "Rozwiń menu"}
            link="#"
            isHidden={isShorted}
          />
        </div>

        <RowItem
          icon={<IoMdStats />}
          text="Statystyki"
          link="/statistics"
          isHidden={isShorted}
        />

        <RowItem
          icon={<IoMdSettings />}
          text="Ustawienia"
          link="/settings"
          isHidden={isShorted}
        />

        <div onClick={SignOutUser}>
          <RowItem
            icon={<IoIosPower />}
            text="Wyloguj"
            link="/"
            isHidden={isShorted}
          />
        </div>
      </Styled.NavWrapper>
    </Sidebar>
  );
};
