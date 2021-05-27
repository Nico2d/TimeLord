import React, { useState } from "react";
import styled from "styled-components";
import { Countdown } from "./Countdown";

type TimerProps = {
  countdown: number;
};

export const Timer: React.FC<TimerProps> = () => {
  const [isRunning, setIsRunning] = useState(false);

  const playButton = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  return (
    <Container>
      <Countdown
        countdown={60}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />

      <button onClick={playButton}>{isRunning ? "Pause" : "Start"}</button>
      <button>Zakończ</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
