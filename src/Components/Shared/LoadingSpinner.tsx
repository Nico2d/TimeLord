import styled, { keyframes, css } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

interface LoadingSpinnerProps {
  size?: number;
  absoluteCenter?: boolean;
}

export const LoadingSpinner = ({
  size,
  absoluteCenter = false,
}: LoadingSpinnerProps) => {
  return <Spinner size={size} absoluteCenter={absoluteCenter} />;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const absoluteCenterStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
interface SpinnerProps {
  absoluteCenter: boolean;
}

const Spinner = styled(({ absoluteCenter, ...props }) => (
  <BiLoaderAlt {...props} />
))<SpinnerProps>`
  animation: ${rotate} 1s infinite linear;
  ${({ absoluteCenter }) => absoluteCenter && absoluteCenterStyle};
`;
