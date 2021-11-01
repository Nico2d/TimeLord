import { useState } from "react";
import styled from "styled-components";
import { useCountdown } from "../../../Hooks/useCountdown";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { Countdown } from "../Countdown/Countdown";
import { PomodoroTimers } from "../RunningType";

type CountdownContainerProps = {
  onFinishHandleUpdateTime: (time: number) => void;
  startTime?: number;
};

export const CountdownContainer = ({
  onFinishHandleUpdateTime,
  startTime = 0,
}: CountdownContainerProps) => {
  // Do i NEED THIS???
  const [totalTaskTime, setTotalTaskTime] = useState<number>(startTime);
  const [pomodoroTimers, setPomodoroTimers] = useState<PomodoroTimers>(
    PomodoroTimers.working
  );
  const [isActive, setIsActive] = useState(false);
  const { timer, setTimer, handleStart, handlePause, handleFinish } =
    useCountdown({
      initialState: PomodoroTimers.working,
      onFinish: (timeOnFinish) => {
        if (pomodoroTimers === PomodoroTimers.working) {
          const cycleTime = PomodoroTimers.working - timeOnFinish;
          console.log("cycleTime: ", cycleTime);

          if (cycleTime !== 0) {
            const actualTimer = totalTaskTime + cycleTime;
            onFinishHandleUpdateTime(actualTimer);
            setTotalTaskTime(actualTimer);
          }
        }

        swapCountdownStatus();
      },
    });

  const playButtonHandler = () => {
    !isActive ? handleStart() : handlePause();
    setIsActive((prev) => !prev);
  };

  const swapCountdownStatus = () => {
    const pomodoroMode =
      pomodoroTimers === PomodoroTimers.working
        ? PomodoroTimers.break
        : PomodoroTimers.working;

    setPomodoroTimers(pomodoroMode);
    setTimer(pomodoroMode);
    setIsActive(false);
  };

  return (
    <>
      <Countdown currentTime={timer} countdown={pomodoroTimers} />

      <ButtonWrapper onClick={playButtonHandler} isFocus={!isActive}>
        {!isActive ? "Start" : "Pause"}
      </ButtonWrapper>
      <ButtonWrapper onClick={() => handleFinish()}>Zakończ</ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled(StyledButton)`
  margin-top: 1rem;
  width: 300px;
`;
