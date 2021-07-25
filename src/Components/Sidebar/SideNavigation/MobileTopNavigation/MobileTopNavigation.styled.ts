import styled from "styled-components";

export const TopNavigation = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background: #202020;
  height: 50px;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  > svg {
    margin: auto 0;
  }
`;
