import styled from "styled-components";

export const DailyProgressCircle = styled.div`
  text-align: left;
`;

export const DailyProgressInfo = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  opacity: 0.8;
`;

export const CountdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Display = styled.div`
  position: absolute;
  font-size: 2rem;
  height: 2rem;
  line-height: 2rem;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-49.5%, -57%);
  color: white;
  text-align: center;
`;
