import { SidebarProps } from "./Sidebar.types";
import * as Styled from "./Sidebar.styles";
import { useRef } from "react";
import { useClickAway, useMedia } from "react-use";

export const Sidebar = ({
  position,
  width,
  children,
  isMobile,
  onClickAway = () => {},
}: SidebarProps) => {
  const defaultIsMobile = useMedia("(max-width: 460px)");
  const ref = useRef(null);
  useClickAway(ref, onClickAway, ["mouseup", "touchstart"]);

  return (
    <Styled.StyledSidebar
      ref={ref}
      position={position}
      isMobile={isMobile ?? defaultIsMobile}
    >
      <Styled.ContentWrapper width={width}>{children}</Styled.ContentWrapper>
    </Styled.StyledSidebar>
  );
};
