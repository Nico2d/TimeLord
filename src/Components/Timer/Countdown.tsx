import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTime } from "../../Hooks/useTime";
import { TimerModes } from "../../Types/TimerModes.type";
import { ProgressCircle } from "../Shared/ProgressCircle/ProgressCircle";
import { RunningType } from "./RunningType";

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
  const { secondsToString } = useTime();

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

  return (
    <CountdownWrapper>
      <ProgressCircle radius={150} procent={(time / countdown) * 100} />
      <Display>
        {secondsToString(time)}
        <p> Time to {RunningType[countdown]} </p>
      </Display>
    </CountdownWrapper>
  );
};

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
