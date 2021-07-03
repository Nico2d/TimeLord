import styled from "styled-components";

export const StyledButton = styled.button<{ isFocus?: boolean }>`
  letter-spacing: 0.05em;
  font-weight: 500;
  padding: 1em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #202020;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  width: 100%;

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: ${({ isFocus }) => (isFocus ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #191919;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
