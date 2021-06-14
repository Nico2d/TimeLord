import React, { useState } from "react";
import { MdAdd, MdBusinessCenter, MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<string>();
  const projectsList = [
    { id: "1", name: "kanapkozercy.pl" },
    { id: "2", name: "Time Lord" },
    { id: "3", name: "Studia" },
    { id: "4", name: "X-info" },
  ];

  return (
    <Container>
      <Row isActive={false}>
        <MdAdd /> Dodaj projekt
      </Row>
      {projectsList.map((projectItem) => (
        <Row
          key={projectItem.id}
          onClick={() => setActiveProject(projectItem.id)}
          isActive={projectItem.id === activeProject}
        >
          <MdBusinessCenter /> {projectItem.name}
        </Row>
      ))}
      <Row isActive={false}>
        <MdMoreHoriz /> Zarządzaj projektami
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const Row = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  line-height: 24px;
  margin-bottom: 5px;
  font-size: 14px;
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};

  svg {
    font-size: 24px;
    padding-right: 1rem;
  }
`;
