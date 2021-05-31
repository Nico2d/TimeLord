import styled from "styled-components";
import { TaskType } from "../Types/task.type";
import { Task } from "./Task";

type TaskListProps = {
  taskList: Array<TaskType>;
};

export const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  return (
    <Container>
      {taskList.map((task) => {
        console.log(task);
        return <Task key={task.id} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
