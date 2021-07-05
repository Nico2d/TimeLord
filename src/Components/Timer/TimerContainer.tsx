import styled from "styled-components";
import { TaskType } from "../../Types/Task.type";
import { Backward } from "./Backward";
import { CountdownContainer } from "./Countdown/CountdownContainer";
import { TaskDisplay } from "./TaskDisplay";

type TimeControllerProps = {
  task: TaskType;
};

export const TimerController = ({ task }: TimeControllerProps) => {
  let projectName = "/";
  if (typeof task.time_lord_project === "object") {
    projectName = task.time_lord_project.name;
  }

  return (
    <Container>
      <Backward projectName={projectName} />
      <TaskDisplay task={task} />

      <CountdownContainer task={task} />
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
  padding-bottom: 5rem;
`;
