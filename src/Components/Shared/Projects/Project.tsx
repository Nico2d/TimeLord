import styled from "styled-components";
import { Categories } from "../Categories/Categories";
import { AddNewTaskForm } from "../Tasks/AddNewTaskForm";
import { TaskList } from "../Tasks/TaskList";

type ProjectProps = {
  projectID: number;
};

export const Project: React.FC<ProjectProps> = ({ projectID }) => {
  return (
    <Container>
      <AddNewTaskForm />
      <Categories />
      <TaskList projectID={projectID} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
