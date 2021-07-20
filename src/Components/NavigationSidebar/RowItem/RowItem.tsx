import { NavLink } from "react-router-dom";
import { Tooltip } from "../../Sidebar/Tooltip/Tooltip";
import * as Styled from "./RowItem.styles";
import { RowItemProps } from "./RowItem.types";

export const RowItem = ({
  icon,
  text,
  link = "#",
  isHidden = false,
}: RowItemProps) => {
  if (isHidden) {
    return (
      <Tooltip text={text}>
        <Styled.Container as={NavLink} to={link} exact>
          {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
        </Styled.Container>
      </Tooltip>
    );
  }

  return (
    <Styled.Container as={NavLink} to={link} exact>
      {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}

      <Styled.RowItemText>{text}</Styled.RowItemText>
    </Styled.Container>
  );
};
