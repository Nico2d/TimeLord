import { NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

type RowItemProps = {
  icon?: JSX.Element;
  text: string;
  link?: string;
};

export const RowItem: React.FC<RowItemProps> = ({ icon, text, link = "" }) => {
  return (
    <Container as={NavLink} to={link}>
      {icon && <IconWrapper>{icon}</IconWrapper>}

      <RowItemText>{text}</RowItemText>
    </Container>
  );
};

const IconWrapper = styled.div`
  width: 24px;
  margin-right: 10px;
`;

const RowItemText = styled.span`
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Container = styled.li`
  display: flex;
  line-height: 24px;
  margin-bottom: 7px;
  font-size: 14px;
  opacity: 0.6;
  cursor: pointer;
  color: white;
  text-decoration: none;

  svg {
    font-size: 24px;
  }

  &.active {
    font-weight: bold;
    opacity: 1;
  }
`;
