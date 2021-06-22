import React from "react";
import { MdAdd, MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import { slugify } from "../../Utils/slugify";
import { ProjectType } from "../../Types/Project.type";
import { RowItem } from "../Shared/RowItem";
import { IconsArray } from "./ProjectIconsArray";

type ProjectProps = {
  projectsList: Array<ProjectType>;
};

export const ProjectsList: React.FC<ProjectProps> = ({ projectsList }) => {
  return (
    <Container>
      <RowItem
        icon={<MdAdd />}
        text="Dodaj projekt"
        link={`/projects/add-new`}
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
            />
          );
        })}
      <RowItem
        text="Zarządzaj projektami"
        icon={<MdMoreHoriz />}
        link={`/projects/manage`}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 3rem;
`;
