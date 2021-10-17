import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const HiddenLabel = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;

export const CompletedTasks = styled.div<{ isHidden: boolean }>`
  max-height: ${({ isHidden }) => (isHidden ? "0px" : "99999px")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  :last-child {
    margin-bottom: 1rem;
  }
`;
