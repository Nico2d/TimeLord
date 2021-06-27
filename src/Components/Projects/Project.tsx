import styled from "styled-components";
import { useTaskList } from "../../Hooks/useTaskList";
import { Categories } from "../Categories/Categories";
import { AddNewTaskForm } from "../Tasks/AddNewTaskForm";
import { TaskList } from "../Tasks/TaskList";

type ProjectProps = {
  projectID: number;
};

export const Project: React.FC<ProjectProps> = ({ projectID }) => {
  const [isLoading, taskList, addNewTask, categories] = useTaskList(
    String(projectID)
  );

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <AddNewTaskForm projectID={projectID} handleAddNewProject={addNewTask} />
      <Categories categories={categories} />
      <TaskList taskList={taskList} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: auto;
`;
