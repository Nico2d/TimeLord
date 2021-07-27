import { MdDelete } from "react-icons/md";
import * as Styled from "./ProjectListItem.styles";
import { ProjectItemProps } from "./ProjectListItem.types";

export const ProjectListItem: React.FC<ProjectItemProps> = ({
  projectItem,
}) => {
  return (
    <Styled.Container>
      <p>{projectItem.name}</p>

      <Styled.IconWrapper>
        <MdDelete />
      </Styled.IconWrapper>
    </Styled.Container>
  );
};
