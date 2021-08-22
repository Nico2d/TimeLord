import { useState } from "react";
import { useMedia } from "react-use";
import * as Styled from "./SideNavigation.styles";
import { MobileTopNavigation } from "../MobileTopNavigation/MobileTopNavigation";
import { SideNavigationContent } from "../SideNavigationContent/SideNavigationContent";

export const SideNavigation = () => {
  const isMobile = useMedia("(max-width: 460px)");
  const [isShowMobileSideNavigation, setIsShowMobileSideNavigation] =
    useState(false);

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
            <SideNavigationContent />
            <Styled.Backdrop
              onClick={() => setIsShowMobileSideNavigation(false)}
            />
          </>
        )}
      </>
    );
  }

  return <SideNavigationContent />;
};
