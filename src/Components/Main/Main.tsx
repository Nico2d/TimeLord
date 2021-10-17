import { Route, Switch } from "react-router-dom";
import { slugify } from "../../Utils/slugify";
import { Project } from "../Projects/Project";
import { ProjectManagementForm } from "../Projects/ProjectManagment/ProjectManagementForm";
import styled from "styled-components";
import { AddNewProjectForm } from "../Projects/AddNewProjectForm/AddNewProjectForm";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export const Main = () => {
  const user = useContext(UserContext);

  console.log("MAIN: ", user);
  return (
    <StyledWrapper>
      <Switch>
        <Route path={`/projects/add-new`}>
          <AddNewProjectForm userID={user.id} />
        </Route>
        <Route path={`/projects/manage`}>
          <ProjectManagementForm projectList={user.time_lord_projects} />
        </Route>
        {user.time_lord_projects.map((project) => (
          <Route key={project.id} path={`/projects/${slugify(project.name)}`}>
            <Project projectID={String(project.id)} />
          </Route>
        ))}

        <Route path={`/statistics`}>Tutaj są Statystyki</Route>
        <Route path={`/settings`}>Tutaj są ustawienia</Route>
        <Route path={`/logout`}> Pa pa pa...</Route>
      </Switch>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 0 1rem;
  overflow-x: hidden;
  width: 100%;

  @media (max-width: 460px) {
    padding-top: 50px;
  }
`;
