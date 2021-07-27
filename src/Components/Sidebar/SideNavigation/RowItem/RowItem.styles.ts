import styled from "styled-components";

export const IconWrapper = styled.div`
  width: 24px;
  margin-bottom: 2px;
  margin-right: 10px;
  display: flex;
`;

export const RowItemText = styled.span`
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Container = styled.li`
  display: flex;
  line-height: 24px;
  margin-bottom: 7px;
  font-size: 14px;
  opacity: 0.6;
  cursor: pointer;
  color: white;
  text-decoration: none;
  position: relative;

  svg {
    font-size: 24px;
  }

  &.active {
    font-weight: bold;
    opacity: 1;
  }
`;
