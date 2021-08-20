import styled from "styled-components";

export const StyledCircle = styled.circle`
  display: block;
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: 4;
  stroke: white;
  stroke-linecap: round;
`;

export const BackgroundCircle = styled.circle`
  display: block;
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: 4;
  stroke: ${({ theme }) => theme.colors.neutralGray};
  stroke-linecap: round;
`;
