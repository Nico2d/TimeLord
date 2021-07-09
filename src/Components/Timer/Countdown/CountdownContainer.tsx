import { useState } from "react";
import styled from "styled-components";
import { TimerModes } from "../../../Types/TimerModes.type";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { Countdown } from "../Countdown";
import { RunningType } from "../RunningType";

type CountdownContainerProps = {
  onFinishHandleUpdateTime: (time: number) => void;
  startTime?: number;
};

export const CountdownContainer = ({
  onFinishHandleUpdateTime,
  startTime = 0,
}: CountdownContainerProps) => {
  const [runningMode, setRunningMode] = useState<TimerModes>(TimerModes.stop);
  const [totalTaskTime, setTotalTaskTime] = useState<number>(startTime);
  const [runningType, setRunningType] = useState<RunningType>(
    RunningType.working
  );

  const playButtonHandler = () => {
    setRunningMode((runningMode) =>
      runningMode === TimerModes.running ? TimerModes.stop : TimerModes.running
    );
  };

  const endButtonHandler = () => {
    setRunningMode(TimerModes.finished);
  };

  const finishButtonHandleUpdateTime = (elapsedTime: number) => {
    console.log("finished handler");
    if (runningType === RunningType.working) {
      let addedTime = totalTaskTime + elapsedTime;

      onFinishHandleUpdateTime(addedTime);
      setTotalTaskTime(addedTime);
    }

    setRunningType(
      runningType === RunningType.working
        ? RunningType.break
        : RunningType.working
    );
    setRunningMode(TimerModes.stop);
  };

  return (
    <>
      <Countdown
        countdown={runningType}
        isRunning={runningMode}
        getElapsedTime={finishButtonHandleUpdateTime}
      />

      <ButtonWrapper
        onClick={playButtonHandler}
        isFocus={runningMode !== TimerModes.running}
      >
        {runningMode === TimerModes.running ? "Pause" : "Start"}
      </ButtonWrapper>
      <ButtonWrapper onClick={endButtonHandler}>Zakończ</ButtonWrapper>
    </>
  );
};

const ButtonWrapper = styled(StyledButton)`
  margin-top: 1rem;
  width: 300px;
`;
