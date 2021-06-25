import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { TaskType } from "../../Types/Task.type";
import { ErrorMessage } from "../Shared/ErrorMessage";
import { StyledInput } from "../Shared/StyledComponents/StyledInput";

type AddNewTaskFormProps = {
  projectID: number;
  handleAddNewProject: (taskArray: TaskType) => void;
};

export const AddNewTaskForm: React.FC<AddNewTaskFormProps> = ({
  projectID,
  handleAddNewProject,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<TaskType> = async (task) => {
    task.time_lord_project = projectID;
    task.isCompleted = false;

    handleAddNewProject(task);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="Wprowadź nazwę zadania, naciśnij [Enter] aby użyć szybkiego dodania"
        {...register("name", { required: true })}
      />
      <StyledSubmit type="submit" value="Dodaj" />
      {errors.name && <ErrorMessage message="This field is required" />}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-top: 3rem;
  margin-bottom: 5rem;
  position: relative;
`;

const StyledSubmit = styled.input`
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
