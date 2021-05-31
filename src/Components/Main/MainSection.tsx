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
      isCompleted: false,
    },
    {
      name: "Lista tasków",
      executionTime: 0,
      category: "design",
      id: "2",
      isCompleted: false,
    },
    {
      name: "lista kategori",
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
