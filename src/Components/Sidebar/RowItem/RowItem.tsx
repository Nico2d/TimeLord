import { NavLink } from "react-router-dom";
import { Tooltip } from "../Tooltip/Tooltip";
import * as Styled from "./RowItem.styles";
import { RowItemProps } from "./RowItem.types";

export const RowItem = ({ icon, text, link = "" }: RowItemProps) => {
  const isMobile = true;

  return (
    <Styled.Container as={NavLink} to={link} exact>
      <Tooltip text={text}>
        {<Styled.IconWrapper>{icon}</Styled.IconWrapper>}
      </Tooltip>

      {!isMobile && <Styled.RowItemText>{text}</Styled.RowItemText>}
    </Styled.Container>
  );
};
