import { useTime } from "../../../Hooks/useTime";
import { ProgressCircle } from "../../Shared/ProgressCircle/ProgressCircle";
import { PomodoroTimers } from "../RunningType";
import * as S from "./Countdown.styles";

type TimerProps = {
  currentTime: number;
  countdown: number;
};

export const Countdown = ({ currentTime, countdown }: TimerProps) => {
  const { secondsToString } = useTime();

  return (
    <S.CountdownWrapper>
      <ProgressCircle radius={150} procent={(currentTime / countdown) * 100} />
      <S.Display>
        {secondsToString(currentTime)}
        <p>Time to {PomodoroTimers[countdown]}</p>
      </S.Display>
    </S.CountdownWrapper>
  );
};
