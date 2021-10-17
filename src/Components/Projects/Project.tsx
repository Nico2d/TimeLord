import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchProject } from "../../API/fetchProject";
import { useSidebarComplementary } from "../../Hooks/useSidebarComplementary/useSidebarComplementary";
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
  const { changeProject } = useSidebarComplementary();

  useEffect(() => {
    changeProject(projectID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectID]);

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
  width: 100%;
  overflow-x: hidden;
`;
