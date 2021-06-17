import styled from "styled-components";

export const RowItem = styled.li<{ isActive?: boolean }>`
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
    padding-right: 1rem;
  }

  &.active {
    font-weight: bold;
    opacity: 1;
  }
`;
