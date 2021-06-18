import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_URL } from "../../../constants";
import { TaskType } from "../../../Types/Task.type";
import { Task } from "./Task";

type TaskListProps = {
  projectID: number;
};

export const TaskList: React.FC<TaskListProps> = ({ projectID }) => {
  const [taskList, setTaskList] = useState<Array<TaskType>>([]);

  console.log(projectID);

  useEffect(() => {
    fetch(`${API_URL}/time-lord-projects/${projectID}`)
      .then((response) => response.json())
      .then((data) => {
        setTaskList(data.time_lord_tasks);
      });
  }, [projectID]);

  if (taskList.length === 0) {
    return <Container>Lista zadań jest pusta</Container>;
  }

  return (
    <Container>
      {taskList.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
