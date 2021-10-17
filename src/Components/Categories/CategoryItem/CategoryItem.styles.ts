import styled from "styled-components";

export const Category = styled.div<{ color?: string; isActive: boolean }>`
  background: ${({ isActive, color, theme }) =>
    isActive ? color : theme.colors.panelColor};
  margin-right: 5px;
  vertical-align: middle;
  line-height: 50px;
  padding: 0 1.5rem;
  transform: skew(-15deg);
  flex: 1;
  cursor: pointer;
  pointer-events: stroke;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;

  :first-child {
    margin-left: -6px;
  }

  :last-child {
    margin-right: 75px;
  }

  > * {
    transform: skew(15deg);
    color: black;
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
  }
`;
