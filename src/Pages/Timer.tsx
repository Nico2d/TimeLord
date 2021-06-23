import React, { useState } from "react";
import styled from "styled-components";
import { Countdown } from "../Components/Timer/Countdown";
import { TimerModes } from "../Types/TimerModes.type";

enum RunningType {
  working = 3,
  break = 5,
  longBreak = 15,
}

export const Timer: React.FC = () => {
  const [runningMode, setRunningMode] = useState<TimerModes>(TimerModes.stop);
  const [totalTaskTime, setTotalTaskTime] = useState<number>(0);
  const [runningType, setRunningType] = useState<RunningType>(
    RunningType.working
  );

  const playButton = () => {
    setRunningMode((runningMode) =>
      runningMode === TimerModes.running ? TimerModes.stop : TimerModes.running
    );
  };

  const endButtonHandler = () => {
    setRunningMode(TimerModes.finished);
  };

  const finishedHandler = (elapsedTime: number) => {
    if (runningType === RunningType.working)
      setTotalTaskTime(totalTaskTime + elapsedTime);

    setRunningType(
      runningType === RunningType.working
        ? RunningType.break
        : RunningType.working
    );
    setRunningMode(TimerModes.stop);
  };

  return (
    <Container>
      <h1>TASK HERE</h1>
      <div>Czas poświęcony na zadanie: {totalTaskTime}</div>
      <div> Time to {RunningType[runningType]} </div>

      <Countdown
        countdown={runningType}
        isRunning={runningMode}
        getElapsedTime={finishedHandler}
      />
      <StyledButton onClick={playButton}>
        {runningMode === TimerModes.running ? "Pause" : "Start"}
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
  color: white;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  width: 300px;
  font-size: 18px;
`;
