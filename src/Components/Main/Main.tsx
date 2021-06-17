import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { ProjectType } from "../../Types/Project.type";
import { TaskType } from "../../Types/Task.type";
import { AddNewProjectForm } from "./Projects/AddNewProjectForm";
import { TaskList } from "./Tasks/TaskList";

type MainProps = {
  projectsList: Array<ProjectType>;
};

export const Main: React.FC<MainProps> = ({ projectsList }) => {
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

  // I NEED THOSE:
  //    - nazwy projektów do zrobienia routingu - czy routing nie bedzie w innym pliku????
  //    - przekazanie listy zadań do komponentu TaskList

  console.log(projectsList);

  return (
    <Container>
      <Switch>
        <Route path="/projects/add-new">
          <AddNewProjectForm />
        </Route>
        <Route path="/projects/manage">Zarządzaj projektami</Route>

        {projectsList.map((project) => {
          console.log(project);
          return (
            <Route key={project.id} path={`/projects/${project.name}`}>
              <TaskList taskList={taskList} />
            </Route>
          );
        })}

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
