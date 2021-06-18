import React from "react";
import { MdAdd, MdBusinessCenter, MdMoreHoriz } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ProjectType } from "../../../Types/Project.type";
import { RowItem } from "../../Shared/StyledComponents/RowItem";

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

const IconWrapper = styled.div`
  width: 24px;
  margin-right: 10px;
`;

const RowItemText = styled.span`
  word-wrap: break-word;
  text-overflow: ellipsis;

  /* Needed to make it work */
  overflow: hidden;
  white-space: nowrap;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
