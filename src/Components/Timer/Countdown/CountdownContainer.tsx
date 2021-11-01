import { useState } from "react";
import styled from "styled-components";
import { TimerState } from "../../../Types/TimerState.type";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { Countdown } from "../Countdown";
import { PomodoroTimers } from "../RunningType";

type CountdownContainerProps = {
  onFinishHandleUpdateTime: (time: number) => void;
  startTime?: number;
};

export const CountdownContainer = ({
  onFinishHandleUpdateTime,
  startTime = 0,
}: CountdownContainerProps) => {
  const [countdownState, setCountdownState] = useState<TimerState>(
    TimerState.stop
  );
  const [totalTaskTime, setTotalTaskTime] = useState<number>(startTime);
  const [pomodoroTimers, setPomodoroTimers] = useState<PomodoroTimers>(
    PomodoroTimers.working
  );

  const playButtonHandler = () => {
    setCountdownState((runningMode) =>
      runningMode === TimerState.running ? TimerState.stop : TimerState.running
    );
  };

  const finishButtonHandleUpdateTime = (elapsedTime: number) => {
    console.log("finished handler");
    if (pomodoroTimers === PomodoroTimers.working) {
      let addedTime = totalTaskTime + elapsedTime;

      onFinishHandleUpdateTime(addedTime);
      setTotalTaskTime(addedTime);
    }

    setPomodoroTimers(
      pomodoroTimers === PomodoroTimers.working
        ? PomodoroTimers.break
        : PomodoroTimers.working
    );
    setCountdownState(TimerState.stop);
  };

  return (
    <>
      <Countdown
        countdown={pomodoroTimers}
        isRunning={countdownState}
        getElapsedTime={finishButtonHandleUpdateTime}
      />

      <ButtonWrapper
        onClick={playButtonHandler}
        isFocus={countdownState !== TimerState.running}
      >
        {countdownState === TimerState.running ? "Pause" : "Start"}
      </ButtonWrapper>
      <ButtonWrapper onClick={() => setCountdownState(TimerState.finished)}>
        Zakończ
      </ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled(StyledButton)`
  margin-top: 1rem;
  width: 300px;
`;
