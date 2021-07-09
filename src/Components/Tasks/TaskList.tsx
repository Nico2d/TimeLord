import { useState } from "react";
import styled from "styled-components";
import { useTaskList } from "../../API/Hooks/useTaskList";
import { FetchError } from "../Shared/FetchError";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { Task } from "./Task";

type TaskListProps = {
  projectID: string;
};

export const TaskList = ({ projectID }: TaskListProps) => {
  const [isHiddenCompletedTasks, setiIHiddenCompletedTasks] = useState(true);
  const [status, taskList] = useTaskList(projectID);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  return (
    <Container>
      {taskList
        .filter((task) => !task.isCompleted)
        .map((task, idx) => {
          return <Task key={idx} task={task} />;
        })}

      <HiddenLabel
        onClick={() =>
          setiIHiddenCompletedTasks(
            (isHiddenCompletedTasks) => !isHiddenCompletedTasks
          )
        }
      >
        {`${
          isHiddenCompletedTasks ? "Wyświetl" : "Schowaj"
        } zakończone zadania`}
      </HiddenLabel>
      <CompletedTasks isHidden={isHiddenCompletedTasks}>
        {taskList
          .filter((task) => task.isCompleted)
          .map((task, idx) => {
            return <Task key={idx} task={task} />;
          })}
      </CompletedTasks>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const HiddenLabel = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;

const CompletedTasks = styled.div<{ isHidden: boolean }>`
  max-height: ${({ isHidden }) => (isHidden ? "0px" : "99999px")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  :last-child {
    margin-bottom: 1rem;
  }
`;
