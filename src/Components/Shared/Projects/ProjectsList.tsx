import React from "react";
import { MdAdd, MdBusinessCenter, MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import { ProjectType } from "../../../Types/Project.type";
import { RowItem } from "../RowItem";

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

      {projectsList.map((projectItem) => (
        <RowItem
          key={projectItem.id}
          icon={<MdBusinessCenter />}
          text={projectItem.name}
          link={`/projects/${projectItem.name}`}
        />
      ))}
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
`;
