import { Route, Switch } from "react-router-dom";
import { slugify } from "../../Utils/slugify";
import { AddNewProjectForm } from "../Projects/AddNewProjectForm";
import { Project } from "../Projects/Project";
import { ProjectManagementForm } from "../Projects/ProjectManagment/ProjectManagementForm";
import { useProjectList } from "../../Hooks/useProjectList";
import { useUser } from "../../API/Hooks/useUser";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { FetchError } from "../Shared/FetchError";

type MainProps = {
  userID: string;
};

export const Main = ({ userID }: MainProps) => {
  const [status, user] = useUser(userID);

  //To do wyjebania będzie
  const [list, addToList] = useProjectList(user.id);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  return (
    <Switch>
      <Route path={`/projects/add-new`}>
        <AddNewProjectForm addToList={addToList} />
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
  );
};
