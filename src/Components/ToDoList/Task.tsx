import React from "react";
import styled from "styled-components";

export const Task = () => {
  return (
    <Container>
      <input type="checkbox" />
      {/* <StyledInput
        type="text"
        placeholder="Wprowadź nazwę zadania, naciśnij [Enter] aby użyć szybkiego dodania"
      /> */}

      <Name>Lista tasków</Name>
    </Container>
  );
};

const Name = styled.p`
  padding: 0 1rem;
`;

const Container = styled.div`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background: #df6d6d;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  color: white;
`;
