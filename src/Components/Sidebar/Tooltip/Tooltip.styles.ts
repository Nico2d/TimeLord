import styled from "styled-components";

export const Tooltip = styled.div<{
  isVisible?: boolean;
  position: { x: number; y: number };
}>`
  position: absolute;
  left: ${({ position }) => position.x + 50}px;
  top: ${({ position }) => position.y}px;
  width: fit-content;
  padding: 10px 1rem;
  background: black;
  border-radius: 5px;
  z-index: 100;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
