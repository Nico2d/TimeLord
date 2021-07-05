import { useEffect, useState } from "react";
import styled from "styled-components";
import { TimerModes } from "../../Types/TimerModes.type";
import { getDualDigital } from "../../Utils/getDualDigital";
import { RunningType } from "./RunningType";
import { useDrawProgressCircle } from "./useDrawProgressCircle";

type TimerProps = {
  countdown: number;
  isRunning: TimerModes;
  getElapsedTime: (v: number) => void;
  restart?: () => void;
};

export const Countdown: React.FC<TimerProps> = ({
  countdown,
  isRunning,
  getElapsedTime,
}) => {
  const [time, setTime] = useState(countdown);
  const [radius, radiusOffset, circumference, circumferenceOffset] =
    useDrawProgressCircle((time / countdown) * 100);

  let minutes = getDualDigital(Math.floor(time / 60));
  let seconds = getDualDigital(time % 60);

  useEffect(() => {
    const CountdownTimeHandler = () => {
      setTime((time) => {
        if (time === 0) {
          getElapsedTime(countdown - time);
        }

        if (time > 0) return --time;
        return countdown;
      });
    };

    const interval = setInterval(CountdownTimeHandler, 1000);

    if (isRunning !== TimerModes.running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countdown, getElapsedTime, isRunning]);

  useEffect(() => {
    setTime(countdown);
  }, [countdown]);

  if (isRunning === TimerModes.finished) {
    getElapsedTime(countdown - time);
  }

  console.log("Countdown render");

  return (
    <CountdownWrapper>
      <svg width={radiusOffset * 2} height={radiusOffset * 2}>
        <StyledCircle
          fill="transparent"
          r={radius}
          cx={radiusOffset}
          cy={radiusOffset}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumferenceOffset}
        />
      </svg>
      <Display>
        {`${minutes} : ${seconds}`}
        <p> Time to {RunningType[countdown]} </p>
      </Display>
    </CountdownWrapper>
  );
};

const StyledCircle = styled.circle`
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: 6;
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

  > p {
    font-size: 1rem;
    margin-top: 0;
  }
`;
