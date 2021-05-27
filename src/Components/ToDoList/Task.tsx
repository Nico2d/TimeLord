import React from "react";
import styled from "styled-components";

export const Task = () => {
  return (
    <Container>
      <input type="checkbox" />
      <StyledInput
        type="text"
        placeholder="Wprowadź nazwę zadania,  naciśnij [Enter] aby użyć szybkiego dodania"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  width: 800px;
  border-radius: 8px;
  background: #df6d6d;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  color: white;
`;
