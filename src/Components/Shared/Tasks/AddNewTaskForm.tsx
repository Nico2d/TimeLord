import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledInput } from "../StyledComponents/StyledInput";

export const AddNewTaskForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Wprowadź nazwę zadania,  naciśnij [Enter] aby użyć szybkiego dodania"
        {...register("name", { required: true })}
      />
    </Container>
  );
};

const Container = styled.div``;
