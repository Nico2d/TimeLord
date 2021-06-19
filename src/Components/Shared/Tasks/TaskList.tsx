import styled from "styled-components";
import { TaskType } from "../../../Types/Task.type";
import { Task } from "./Task";

type TaskListProps = {
  taskList: Array<TaskType>;
};

export const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  if (taskList.length === 0) {
    return <Container>Lista zadań jest pusta</Container>;
  }

  return (
    <Container>
      {taskList.map((task, idx) => {
        console.log(task.id ?? "new");
        return <Task key={task.id ?? "new"} task={task} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
