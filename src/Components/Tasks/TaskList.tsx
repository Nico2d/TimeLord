import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchTaskList } from "../../API/fetchTaskList";
import { TaskType } from "../../Types/Task.type";
import { Task } from "./Task";

type TaskListProps = {
  projectID: string;
};

export const TaskList: React.FC<TaskListProps> = ({ projectID }) => {
  const [isHiddenCompletedTasks, setiIHiddenCompletedTasks] = useState(true);

  const { isLoading, data: taskList } = useQuery<TaskType[], Error>(
    "taskList",
    () => fetchTaskList(projectID)
  );

  if (isLoading || taskList === undefined) {
    return <div>Loading...</div>;
  }

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
  max-height: ${({ isHidden }) => (isHidden ? "0px" : "500px")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;
