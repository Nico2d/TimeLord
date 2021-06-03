import React from "react";
import styled from "styled-components";
import { TaskList } from "../ToDoList/TaskList";
import { TaskType } from "../Types/task.type";
import { Categories } from "./Categories/Categories";

export const MainSection = () => {
  const taskList: Array<TaskType> = [
    {
      name: "wyrzucenie śmieci",
      executionTime: 0,
      category: "design",
      id: "1",
      isCompleted: true,
    },
    {
      name: "Lista tasków",
      executionTime: 0,
      category: "design",
      id: "2",
      isCompleted: true,
    },
    {
      name: "lista kategorii",
      executionTime: 0,
      category: "design",
      id: "3",
      isCompleted: false,
    },
    {
      name: "wyrzucenie śmieci2",
      executionTime: 0,
      category: "design",
      id: "4",
      isCompleted: false,
    },
  ];

  return (
    <Container>
      <Categories />
      <TaskList taskList={taskList} />

      {/* <Timer /> */}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 100vh;
  background: #121212;
`;
