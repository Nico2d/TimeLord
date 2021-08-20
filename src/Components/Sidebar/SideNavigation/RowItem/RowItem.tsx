import { NavLink } from "react-router-dom";
import { Tooltip } from "../Tooltip/Tooltip";
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
      <Styled.Container as={NavLink} to={link} exact>
        {icon && (
          <Tooltip text={text}>
            <Styled.IconWrapper>{icon}</Styled.IconWrapper>
          </Tooltip>
        )}
      </Styled.Container>
    );
  }

  return (
    <Styled.Container
      as={link === "#" ? Styled.ContainerWithoutLink : NavLink}
      to={link}
      exact
    >
      {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}

      <Styled.RowItemText>{text}</Styled.RowItemText>
    </Styled.Container>
  );
};
