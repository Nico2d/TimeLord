import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchProject } from "../../API/fetchProject";
import { ProjectType } from "../../Types/Project.type";
import { FetchError } from "../Shared/FetchError";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { ProjectMain } from "./ProjectMain/ProjectMain";

type ProjectProps = {
  projectID: string;
};

export const Project = ({ projectID }: ProjectProps) => {
  const {
    isLoading,
    error,
    data: project,
  } = useQuery<ProjectType, Error>(["project", projectID], () =>
    fetchProject(projectID)
  );

  if (isLoading || project === undefined) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <FetchError />;
  }

  return (
    <Container>
      <ProjectMain project={project} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
`;
