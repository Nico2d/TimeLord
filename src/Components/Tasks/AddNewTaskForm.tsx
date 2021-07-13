import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { postTask } from "../../API/postTask";
import { TaskType } from "../../Types/Task.type";
import { ErrorMessage } from "../Shared/ErrorMessage";
import { StyledInput } from "../Shared/StyledComponents/StyledInput";

type AddNewTaskFormProps = {
  projectID: string | number;
};

export const AddNewTaskForm = ({ projectID }: AddNewTaskFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const { mutate } = useMutation(postTask, {
    onSuccess: (data) => {
      console.log("Adding new task [Success]:", data);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("taskList");
    },
  });

  const separateCategory = (taskNameInput: string): [string | null, string] => {
    const [category, ...rest] = taskNameInput.split(": ");

    if (rest.length >= 1) {
      return [category, rest.join(" ")];
    } else {
      return [null, taskNameInput];
    }
  };

  const onSubmit: SubmitHandler<TaskType> = async (task) => {
    const [category, taskContent] = separateCategory(task.name);

    task.category = category;
    task.name = taskContent;
    task.time_lord_project = projectID;
    task.isCompleted = false;

    mutate(task);
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
      <p>{`ProTip: możesz w szybki sposób dodać kategorię do zadania np. {kategoria}: moja nazwa zadania`}</p>
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
