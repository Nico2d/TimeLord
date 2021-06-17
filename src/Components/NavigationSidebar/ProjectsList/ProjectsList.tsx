import React from "react";
import { MdAdd, MdBusinessCenter, MdMoreHoriz } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ProjectType } from "../../../Types/Project.type";
import { RowItem } from "../../Shared/StyledComponents/RowItem";

type ProjectProps = {
  projectsList: Array<ProjectType> | undefined;
};

export const ProjectsList: React.FC<ProjectProps> = ({ projectsList }) => {
  return (
    <Container>
      <RowItem as={NavLink} to={`/projects/add-new`}>
        <MdAdd /> Dodaj projekt
      </RowItem>
      {projectsList?.map((projectItem) => (
        <RowItem
          key={projectItem.id}
          as={NavLink}
          to={`/projects/${projectItem.name}`}
        >
          <MdBusinessCenter /> {projectItem.name}
        </RowItem>
      ))}
      <RowItem as={NavLink} to={`/projects/manage`}>
        <MdMoreHoriz /> Zarządzaj projektami
      </RowItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
