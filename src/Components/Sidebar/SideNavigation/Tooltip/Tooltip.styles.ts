import styled from "styled-components";
import { PositionTypes } from "./Tooltip.types";

const HEIGHT = 30;

export const Tooltip = styled.div<{
  isVisible?: boolean;
  position: PositionTypes;
}>`
  position: absolute;
  left: ${({ position }) => position.x + 55}px;
  top: ${({ position }) => position.y - HEIGHT / 2 + position.height / 2}px;
  width: fit-content;
  height: ${HEIGHT}px;
  line-height: ${HEIGHT}px;
  padding: 0 1rem;
  background: #424242;
  border-radius: 5px;
  z-index: 100;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  ::before {
    position: absolute;
    left: -8px;
    top: calc(50% - 6px);
    z-index: 99;
    content: "";
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 8px solid #424242;
    border-bottom: 6px solid transparent;
  }
`;
