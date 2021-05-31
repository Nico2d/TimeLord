import React, { useState } from "react";
import styled from "styled-components";
import { Countdown } from "./Countdown";
import Background from "../../Assets/background.jpg";
import { RunningModes } from "./RunningModes.types";

type TimerProps = {
  countdown: number;
};

enum RunningType {
  working = 3,
  break = 5,
  longBreak = 15,
}

export const Timer: React.FC<TimerProps> = () => {
  const [runningMode, setRunningMode] = useState<RunningModes>(
    RunningModes.stop
  );
  const [totalTaskTime, setTotalTaskTime] = useState<number>(0);
  const [runningType, setRunningType] = useState<RunningType>(
    RunningType.working
  );

  const playButton = () => {
    setRunningMode((runningMode) =>
      runningMode === RunningModes.running
        ? RunningModes.stop
        : RunningModes.running
    );
  };

  const endButtonHandler = () => {
    setRunningMode(RunningModes.finished);
  };

  const finishedHandler = (elapsedTime: number) => {
    if (runningType === RunningType.working)
      setTotalTaskTime(totalTaskTime + elapsedTime);

    setRunningType(
      runningType === RunningType.working
        ? RunningType.break
        : RunningType.working
    );
    setRunningMode(RunningModes.stop);
  };

  return (
    <Container>
      <div>Czas poświęcony na zadanie: {totalTaskTime}</div>
      <div> Time to {RunningType[runningType]} </div>

      <Countdown
        countdown={runningType}
        isRunning={runningMode}
        getElapsedTime={finishedHandler}
      />
      <StyledButton onClick={playButton}>
        {runningMode === RunningModes.running ? "Pause" : "Start"}
      </StyledButton>
      <StyledButton onClick={endButtonHandler}>Zakończ</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: url(${Background});
  color: white;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  width: 300px;
  font-size: 18px;
`;
