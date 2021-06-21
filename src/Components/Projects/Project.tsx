import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_URL } from "../../constants";
import { TaskType } from "../../Types/Task.type";
import { Categories } from "../Categories/Categories";
import { AddNewTaskForm } from "../Tasks/AddNewTaskForm";
import { TaskList } from "../Tasks/TaskList";

type ProjectProps = {
  projectID: number;
};

export const Project: React.FC<ProjectProps> = ({ projectID }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [taskList, setTaskList] = useState<Array<TaskType>>([]);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    fetch(`${API_URL}/time-lord-projects/${projectID}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setTaskList(data.time_lord_tasks);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsError(true);
      });
  }, [projectID]);

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>Spróbuj ponownie za chwile</Container>;
  }

  return (
    <Container>
      <AddNewTaskForm
        projectID={projectID}
        handleAddNewProject={(newTask) =>
          setTaskList((prev) => [...prev, newTask])
        }
      />
      <Categories />
      <TaskList taskList={taskList} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
