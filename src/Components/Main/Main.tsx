import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { AddNewProjectForm } from "./Projects/AddNewProjectForm";
// import { TaskType } from "../../Types/Task.type";
// import { TaskList } from "../ToDoList/TaskList";
// import { Categories } from "./Categories/Categories";

export const Main = () => {
  // const taskList: Array<TaskType> = [
  //   {
  //     name: "wyrzucenie śmieci",
  //     executionTime: 0,
  //     category: "design",
  //     id: "1",
  //     isCompleted: true,
  //   },
  //   {
  //     name: "Lista tasków",
  //     executionTime: 0,
  //     category: "design",
  //     id: "2",
  //     isCompleted: true,
  //   },
  //   {
  //     name: "lista kategorii",
  //     executionTime: 0,
  //     category: "design",
  //     id: "3",
  //     isCompleted: false,
  //   },
  //   {
  //     name: "wyrzucenie śmieci2",
  //     executionTime: 0,
  //     category: "design",
  //     id: "4",
  //     isCompleted: false,
  //   },
  // ];

  return (
    <Container>
      {/* Hello in Dashboard */}
      {/* <Categories />
      <TaskList taskList={taskList} /> */}
      <Switch>
        <Route path="/projects/add-new">
          <AddNewProjectForm />
        </Route>
        <Route path="/projects/manage">Zarządzaj projektami</Route>

        <Route path="/settings">Tutaj są ustawienia</Route>
        <Route path="/statistics">Tutaj są Statystyki</Route>
      </Switch>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;
