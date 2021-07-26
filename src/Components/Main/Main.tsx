import { Route, Switch } from "react-router-dom";
import { slugify } from "../../Utils/slugify";
import { AddNewProjectForm } from "../Projects/AddNewProjectForm";
import { Project } from "../Projects/Project";
import { ProjectManagementForm } from "../Projects/ProjectManagment/ProjectManagementForm";
import { useUser } from "../../API/Hooks/useUser";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { FetchError } from "../Shared/FetchError";
import styled from "styled-components";

type MainProps = {
  userID: string;
};

export const Main = ({ userID }: MainProps) => {
  const [status, user] = useUser(userID);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  return (
    <StyledWrapper>
      <Switch>
        <Route path={`/projects/add-new`}>
          <AddNewProjectForm userID={userID} />
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

  @media (max-width: 460px) {
    padding-top: 50px;
  }
`;
