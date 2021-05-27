import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDualDigital } from "../../Hooks/getDualDigital";

type TimerProps = {
  countdown: number;
  isRunning?: boolean;
  setIsRunning: (isRunning: boolean) => void;
};

export const Countdown: React.FC<TimerProps> = ({
  countdown,
  isRunning = false,
  setIsRunning,
}) => {
  const [time, setTime] = useState(countdown);
  //   const [isRunning, setIsRunning] = useState(false);

  const RADIUS = 150;
  const PERCENT = (time / countdown) * 100;
  const radiusOffset = RADIUS + 10;
  const circumference = RADIUS * 2 * Math.PI;
  const offset = circumference - (PERCENT / 100) * circumference;

  const minutes = getDualDigital(Math.floor(time / 60));
  const seconds = getDualDigital(time % 60);

  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        setTime((time) => --time);
      }, 1000);

      if (time === 0) setIsRunning(false);
    }
  });

  return (
    <CountdownWrapper>
      <svg width={radiusOffset * 2} height={radiusOffset * 2}>
        <StyledCircle
          fill="transparent"
          r={RADIUS}
          cx={radiusOffset}
          cy={radiusOffset}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
      <Display>{`${minutes} : ${seconds}`}</Display>
    </CountdownWrapper>
  );
};
const StyledCircle = styled.circle`
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: 10;
  stroke: white;
  stroke-linecap: round;
`;

const CountdownWrapper = styled.div`
  position: relative;
`;

const Display = styled.div`
  font-size: 4rem;
  position: absolute;
  top: 50%;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
