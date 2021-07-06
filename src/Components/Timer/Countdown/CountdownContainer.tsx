import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { updateTask } from "../../../API/updateTask";
import { useTime } from "../../../Hooks/useTime";
import { TaskType } from "../../../Types/Task.type";
import { TimerModes } from "../../../Types/TimerModes.type";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { Countdown } from "../Countdown";
import { RunningType } from "../RunningType";

type CountdownContainerProps = {
  task: TaskType;
};

export const CountdownContainer = ({ task }: CountdownContainerProps) => {
  const [runningMode, setRunningMode] = useState<TimerModes>(TimerModes.stop);
  const [totalTaskTime, setTotalTaskTime] = useState<number>(0);
  const [runningType, setRunningType] = useState<RunningType>(
    RunningType.working
  );

  //czy nie mógłbym po prostu zwracać z countdowna gotowego czasu??
  const [, secondsToString] = useTime("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateTask, {
    onSuccess: (data) => {
      console.log("Update task [Success]:", data);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      const taskID = task.id;
      queryClient.invalidateQueries(["task", taskID]);
      queryClient.refetchQueries(["task", taskID]);
    },
  });

  const playButton = () => {
    setRunningMode((runningMode) =>
      runningMode === TimerModes.running ? TimerModes.stop : TimerModes.running
    );
  };

  const endButtonHandler = () => {
    setRunningMode(TimerModes.finished);
  };

  const onFinishHandleUpdateTime = (elapsedTime: number) => {
    console.log("finished handler");
    if (runningType === RunningType.working) {
      let addedTime = totalTaskTime + elapsedTime;

      let body = task;
      body.time = secondsToString(addedTime);

      mutate(body);

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
        getElapsedTime={onFinishHandleUpdateTime}
      />

      <ButtonWrapper
        onClick={playButton}
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
