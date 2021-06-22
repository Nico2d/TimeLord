import styled from "styled-components";
import { ProjectType } from "../../../Types/Project.type";

type ProjectItemProps = {
  projectItem: ProjectType;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({ projectItem }) => {
  return (
    <Container>
      <p>{projectItem.name}</p>
    </Container>
  );
};

const Container = styled.li`
  position: relative;
  display: inline-flex;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background: #202020;
  color: white;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  /* padding: 0 1rem; */
`;
