import styled from "styled-components";

export const CountdownWrapper = styled.div`
  position: relative;
`;

export const Display = styled.div`
  font-size: 4rem;
  position: absolute;
  top: 50%;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

  > p {
    font-size: 1rem;
    margin-top: 0;
  }
`;
