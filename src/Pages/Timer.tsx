import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Countdown } from "../Components/Timer/Countdown";
import { TimerModes } from "../Types/TimerModes.type";
import { API_URL } from "../constants";
import { Task } from "../Components/Tasks/Task";
import { TaskType } from "../Types/Task.type";
import { RunningType } from "../Components/Timer/RunningType";
import { StyledButton } from "../Components/Shared/StyledComponents/StyledButton";
import { useTime } from "../Hooks/useTime";
import { slugify } from "../Utils/slugify";

export const Timer: React.FC = () => {
  const params: {
    taskId: string;
  } = useParams();
  const [runningMode, setRunningMode] = useState<TimerModes>(TimerModes.stop);
  const [totalTaskTime, setTotalTaskTime] = useState<number>(0);
  const [runningType, setRunningType] = useState<RunningType>(
    RunningType.working
  );
  const [task, setTask] = useState<TaskType>({} as TaskType);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const [countToSeconds, secondsToString] = useTime("");
  let projectName = "project";

  useEffect(() => {
    console.log("useEffect in timer");

    const fetchTask = async () => {
      const data = await fetch(`${API_URL}/time-lord-tasks/${params.taskId}`);
      const items = await data.json();

      setTask(items);
      setTotalTaskTime(countToSeconds(items.time));
    };

    fetchTask();
  }, [params.taskId]);

  const playButton = () => {
    setRunningMode((runningMode) =>
      runningMode === TimerModes.running ? TimerModes.stop : TimerModes.running
    );
  };

  const endButtonHandler = () => {
    setRunningMode(TimerModes.finished);
  };

  const finishedHandler = (elapsedTime: number) => {
    console.log("finished handler");
    if (runningType === RunningType.working) {
      let addedTime = totalTaskTime + elapsedTime;

      let body = task;
      body.time = secondsToString(addedTime);
      updateTimeFetch(body);

      setTotalTaskTime(addedTime);
    }

    setRunningType(
      runningType === RunningType.working
        ? RunningType.break
        : RunningType.working
    );
    setRunningMode(TimerModes.stop);
  };

  const updateTimeFetch = async (body: TaskType) => {
    const data = await fetch(`${API_URL}/time-lord-tasks/${params.taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const response = await data.json();
    console.log(response);
  };

  // const onCompleteHandle = (completedTask: TaskType) => {
  //   console.log("Task completed");
  //   setIsTaskCompleted(true);
  // };

  if (typeof task.time_lord_project === "object") {
    projectName = task.time_lord_project.name;
  }

  return (
    <Container>
      <BackwardWrapper as={Link} to={`/projects/${slugify(projectName)}`}>
        <MdKeyboardArrowLeft size="24px" />
        {projectName}
      </BackwardWrapper>

      {!isTaskCompleted ? (
        <TaskWrapper>
          <Task
            task={task}
            // handleComplete={onCompleteHandle}
            totalTaskTime={totalTaskTime}
          />
        </TaskWrapper>
      ) : (
        <p>Wróć do projektu aby wybrać nowe zadanie</p>
      )}

      <Countdown
        countdown={runningType}
        isRunning={runningMode}
        getElapsedTime={finishedHandler}
      />
      <ButtonWrapper
        onClick={playButton}
        isFocus={runningMode !== TimerModes.running}
      >
        {runningMode === TimerModes.running ? "Pause" : "Start"}
      </ButtonWrapper>
      <ButtonWrapper onClick={endButtonHandler}>Zakończ</ButtonWrapper>
    </Container>
  );
};

const TaskWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const BackwardWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  display: flex;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 5rem;
`;

const ButtonWrapper = styled(StyledButton)`
  margin-top: 1rem;
  width: 300px;
`;
