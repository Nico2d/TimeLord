import React from "react";
import { MdAdd, MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import { slugify } from "../../Utils/slugify";
import { ProjectType } from "../../Types/Project.type";
import { RowItem } from "../NavigationSidebar/RowItem/RowItem";
import { IconsArray } from "./ProjectIconsArray";

type ProjectProps = {
  projectsList: Array<ProjectType>;
  isHidden: boolean;
};

export const ProjectsList: React.FC<ProjectProps> = ({
  projectsList,
  isHidden,
}) => {
  return (
    <Container>
      <RowItem
        icon={<MdAdd />}
        text="Dodaj projekt"
        link={`/projects/add-new`}
        isHidden={isHidden}
      />

      {projectsList &&
        projectsList.map((projectItem) => {
          const Icon = IconsArray[projectItem.icon_name];

          return (
            <RowItem
              key={projectItem.id}
              icon={<Icon />}
              text={projectItem.name}
              link={`/projects/${slugify(projectItem.name)}`}
              isHidden={isHidden}
            />
          );
        })}
      <RowItem
        text="Zarządzaj projektami"
        icon={<MdMoreHoriz />}
        link={`/projects/manage`}
        isHidden={isHidden}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 3rem;
`;
