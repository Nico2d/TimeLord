import styled from "styled-components";
import { ProjectType } from "../../../Types/Project.type";
import { ProjectItem } from "./ProjectItem";

type ProjectManagementFormProps = {
  projectList: ProjectType[];
};
export const ProjectManagementForm: React.FC<ProjectManagementFormProps> = ({
  projectList,
}) => {
  return (
    <>
      Zarządzaj projektami (usuwanie, modyfikacja (zmiana nazwy, icony))
      <StyleListContainer>
        {projectList.map((projectItem) => (
          <ProjectItem key={projectItem.id} projectItem={projectItem} />
        ))}
      </StyleListContainer>
    </>
  );
};

const StyleListContainer = styled.ul`
  display: flex;
  flex-flow: column;
  width: 100%;
`;
