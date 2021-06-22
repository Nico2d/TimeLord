import { ProjectType } from "../../../Types/Project.type";
import { ProjectItem } from "./ProjectItem";

type ProjectManagementFormProps = {
  projectList: ProjectType[];
};
export const ProjectManagementForm: React.FC<ProjectManagementFormProps> = ({
  projectList,
}) => {
  return (
    <div>
      Zarządzaj projektami
      <ul>
        {projectList.map((projectItem) => (
          <ProjectItem key={projectItem.id} projectItem={projectItem} />
        ))}
      </ul>
    </div>
  );
};
