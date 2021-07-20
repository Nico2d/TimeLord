import styled from "styled-components";

export const IconWrapper = styled.div`
  width: 24px;
  margin-right: 10px;
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

// ::before {
//   position: absolute;
//   min-width: 200px;
//   width: 100%;
//   height: 30px;
//   background: black;
//   border-radius: 1rem;
//   left: 55px;
//   top: 0;
//   content: "";
// }
