import { SidebarProps } from "./Sidebar.types";
import * as Styled from "./Sidebar.styles";
import { useRef } from "react";
import { useClickAway } from "react-use";

export const Sidebar = ({
  position,
  width,
  children,
  isMobile,
  onClickAway = () => {},
}: SidebarProps) => {
  const ref = useRef(null);

  useClickAway(ref, onClickAway);

  return (
    <Styled.StyledSidebar ref={ref} position={position} isMobile={isMobile}>
      <Styled.ContentWrapper width={width}>{children}</Styled.ContentWrapper>
    </Styled.StyledSidebar>
  );
};
