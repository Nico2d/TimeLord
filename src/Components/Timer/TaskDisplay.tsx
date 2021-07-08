import React, { useState } from "react";
import styled from "styled-components";
import { useTime } from "../../Hooks/useTime";
import { TaskType } from "../../Types/Task.type";
import { Task } from "../Tasks/Task";

type TaskDisplayProps = {
  task: TaskType;
};

export const TaskDisplay = ({ task }: TaskDisplayProps) => {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [countToSeconds] = useTime("");

  const onCompleteHandle = () => {
    console.log("Task completed");
    setIsTaskCompleted(true);
  };

  return (
    <React.Fragment>
      {!isTaskCompleted ? (
        <TaskWrapper>
          <Task
            task={task}
            handleComplete={onCompleteHandle}
            totalTaskTime={countToSeconds(task.time)} //{totalTaskTime}
          />
          {/* <TaskContainer taskID={taskId} /> */}
        </TaskWrapper>
      ) : (
        <p>Wróć do projektu aby wybrać nowe zadanie</p>
      )}
    </React.Fragment>
  );
};

const TaskWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
