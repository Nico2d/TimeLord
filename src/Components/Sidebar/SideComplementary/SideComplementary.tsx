import { createPortal } from "react-dom";
import { SideComplementaryProps } from "./SideComplementary.types";
import * as Styles from "./SideComplementary.styles";

export const SideComplementary = ({
  width = "250px",
  children,
}: SideComplementaryProps) => {
  return createPortal(
    <Styles.Wrapper>
      <Styles.ContentWrapper width={width}>{children}</Styles.ContentWrapper>
    </Styles.Wrapper>,
    document.querySelector("#sidebarComplementaryPortal") as HTMLElement
  );
};
