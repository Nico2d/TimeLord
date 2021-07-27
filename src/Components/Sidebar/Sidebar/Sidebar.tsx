import { SidebarProps } from "./Sidebar.types";
import * as Styled from "./Sidebar.styles";

export const Sidebar = ({
  position,
  width,
  children,
  isMobile,
  ref,
}: SidebarProps) => {
  return (
    <Styled.StyledSidebar ref={ref} position={position} isMobile={isMobile}>
      <Styled.ContentWrapper width={width}>{children}</Styled.ContentWrapper>
    </Styled.StyledSidebar>
  );
};
