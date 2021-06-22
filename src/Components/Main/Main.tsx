import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { slugify } from "../../Hooks/slugfy";
import { ProjectType } from "../../Types/Project.type";
import { AddNewProjectForm } from "../Projects/AddNewProjectForm";
import { Project } from "../Projects/Project";

type MainProps = {
  projectsList: Array<ProjectType>;
  addToList: (newProject: ProjectType) => void;
};

export const Main: React.FC<MainProps> = ({ projectsList, addToList }) => {
  return (
    <Container>
      <Switch>
        <Route path="/projects/add-new">
          <AddNewProjectForm addToList={addToList} />
        </Route>
        <Route path="/projects/manage">Zarządzaj projektami</Route>

        {projectsList.map((project) => (
          <Route key={project.id} path={`/projects/${slugify(project.name)}`}>
            <Project projectID={project.id} />
          </Route>
        ))}

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
  width: 100%;
`;
