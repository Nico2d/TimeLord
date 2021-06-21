import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { API_URL } from "../../../constants";
import { postData } from "../../../Hooks/postData";
import { TaskType } from "../../../Types/Task.type";
import { StyledInput } from "../StyledComponents/StyledInput";

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

  const onSubmit: SubmitHandler<TaskType> = async (body) => {
    body.time_lord_project = projectID;
    body.isCompleted = false;

    postData(`${API_URL}/time-lord-tasks`, body)
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Adding task [Success]", data);

        handleAddNewProject(body);
        reset();
      })
      .catch((error) => {
        console.error("Adding task [Error]:", error);
      });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        placeholder="Wprowadź nazwę zadania, naciśnij [Enter] aby użyć szybkiego dodania"
        {...register("name", { required: true })}
      />
      <StyledSubmit type="submit" value="Dodaj" />
      {errors.name && <ErrorInput>This field is required</ErrorInput>}
    </Container>
  );
};

const ErrorInput = styled.div`
  margin-top: 10px;
  color: red;
  text-align: left;
`;

const Container = styled.form`
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
