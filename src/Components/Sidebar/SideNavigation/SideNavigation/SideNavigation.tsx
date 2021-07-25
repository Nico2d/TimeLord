import { useState } from "react";
import { useUser } from "../../../../API/Hooks/useUser";
import { LoadingSpinner } from "../../../Shared/LoadingSpinner";
import { FetchError } from "../../../Shared/FetchError";
import { useMedia } from "react-use";
import * as Styled from "./SideNavigation.styles";
import { MobileTopNavigation } from "../MobileTopNavigation/MobileTopNavigation";
import { SideNavigationContent } from "../SideNavigationContent/SideNavigationContent";

type SidebarProps = {
  userID: string;
};

export const SideNavigation = ({ userID }: SidebarProps) => {
  const [status, user] = useUser(userID);
  const isMobile = useMedia("(max-width: 460px)");
  const [isShowMobileSideNavigation, setIsShowMobileSideNavigation] =
    useState(false);

  if (status === "loading") return <LoadingSpinner />;
  else if (status === "error") return <FetchError />;

  if (isMobile) {
    return (
      <>
        <MobileTopNavigation
          onMenuClicked={() =>
            setIsShowMobileSideNavigation(
              (isShowMobileSideNavigation) => !isShowMobileSideNavigation
            )
          }
        />

        {isShowMobileSideNavigation && (
          <>
            <SideNavigationContent user={user} />
            <Styled.Backdrop
              onClick={() => setIsShowMobileSideNavigation(false)}
            />
          </>
        )}
      </>
    );
  }

  return <SideNavigationContent user={user} />;
};
