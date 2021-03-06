import styled from "styled-components";
import { ProjectType } from "../../../Types/Project.type";
import { ProjectListItem } from "./ProjectListItem/ProjectListItem";

type ProjectManagementFormProps = {
  projectList: ProjectType[];
};
export const ProjectManagementForm: React.FC<ProjectManagementFormProps> = ({
  projectList,
}) => {
  return (
    <Container>
      Zarządzaj projektami (usuwanie, modyfikacja (zmiana nazwy, icony))
      <StyleListContainer>
        {projectList.map((projectItem) => (
          <ProjectListItem key={projectItem.id} projectItem={projectItem} />
        ))}
      </StyleListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
`;

const StyleListContainer = styled.ul`
  display: flex;
  flex-flow: column;
  width: 100%;
`;
