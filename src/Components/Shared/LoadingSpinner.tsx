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
  if (!absoluteCenter) return <Spinner size={size} />;

  return (
    <SpinnerWrapper>
      <Spinner size={size} />
    </SpinnerWrapper>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled(BiLoaderAlt)`
  animation: ${rotate} 1s infinite linear;
`;
