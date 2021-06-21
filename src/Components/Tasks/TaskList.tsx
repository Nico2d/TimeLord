import { useEffect, useState } from "react";
import styled from "styled-components";
import { TaskType } from "../../Types/Task.type";
import { Task } from "./Task";

type TaskListProps = {
  taskList: Array<TaskType>;
};

export const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const [taskArray, setTaskArray] = useState<Array<TaskType>>(taskList);
  const [isHiddenCompletedTasks, setiIHiddenCompletedTasks] = useState(true);

  useEffect(() => {
    setTaskArray(taskList);
  }, [taskList]);

  const updateCompletedList = (updatedTask: TaskType) => {
    setTaskArray((prev) =>
      prev.filter((task) => {
        if (task.id === updatedTask.id) return updatedTask;

        return task;
      })
    );
  };

  return (
    <Container>
      {taskArray
        .filter((task) => !task.isCompleted)
        .map((task, idx) => {
          return (
            <Task key={idx} task={task} handleComplete={updateCompletedList} />
          );
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
        {taskArray
          .filter((task) => task.isCompleted)
          .map((task, idx) => {
            return (
              <Task
                key={idx}
                task={task}
                handleComplete={updateCompletedList}
              />
            );
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
