import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledInput } from "../StyledComponents/StyledInput";

export const AddNewTaskForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Wprowadź nazwę zadania, naciśnij [Enter] aby użyć szybkiego dodania"
        {...register("name", { required: true })}
      />
      <StyledSumbit type="submit" value="Dodaj" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  position: relative;
`;

const StyledSumbit = styled.input`
  position: absolute;
  right: 8px;
  top: 8px;
  height: 34px;
  background: #202020;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px 1rem;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
