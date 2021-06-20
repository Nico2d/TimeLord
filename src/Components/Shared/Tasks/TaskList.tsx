import { useEffect, useState } from "react";
import styled from "styled-components";
import { TaskType } from "../../../Types/Task.type";
import { Task } from "./Task";

type TaskListProps = {
  taskList: Array<TaskType>;
};

export const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const [taskArray, setTaskArray] = useState<Array<TaskType>>(taskList);

  useEffect(() => {
    setTaskArray(taskList);
  }, [taskList]);

  const updateCompletedList = (updatedTask: TaskType) => {
    console.log("Updating task / refreshing component");

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
          console.log(task);
          return (
            <Task key={idx} task={task} handleComplete={updateCompletedList} />
          );
        })}

      <p>Pokaż zakończone zadania</p>
      {taskArray
        .filter((task) => task.isCompleted)
        .map((task, idx) => {
          return (
            <Task key={idx} task={task} handleComplete={updateCompletedList} />
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
