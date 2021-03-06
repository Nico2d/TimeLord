import { SubmitHandler, useForm } from "react-hook-form";
import { StyledLabel } from "../../Projects/AddNewProjectForm/AddNewProjectForm.style";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { EditTaskFormInputs, EditTaskFormProps } from "./EditTaskForm.types";
import * as Styled from "./EditTaskForm.styles";
import { IoMdTrash } from "react-icons/io";
import { InputField } from "../../FormAssets/InputField/InputField";
import { Select } from "../../FormAssets/Select/Select";
import { useTaskList } from "../../../API/Hooks/useTaskList";
import { useEffect } from "react";
import { EmptyCategory } from "../../Categories/EmptyCategory";
import { useDeleteTask } from "../../../API/Hooks/useDeleteTask";

export const EditTaskForm = ({ task, updateTask }: EditTaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<EditTaskFormInputs>({ mode: "onChange" });
  const mutate = useDeleteTask();
  const { categoriesList } = useTaskList(String(task.time_lord_project));
  const watchSelect = watch("category", task.category ?? EmptyCategory.name);

  const onSubmit: SubmitHandler<EditTaskFormInputs> = async (submitData) => {
    updateTask({
      ...task,
      ...submitData,
    });
  };

  const deleteHandler = () => {
    mutate.mutate(String(task.id));
  };

  useEffect(() => {
    setValue("name", task.name, { shouldValidate: false });
    setValue("category", task.category ?? EmptyCategory.name, {
      shouldValidate: false,
    });
    setValue("description", task.description ?? "", { shouldValidate: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task]);

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Detale zadania</h3>

      <InputField
        label="Zadanie:"
        type="text"
        register={{
          ...register("name", {
            required: "Pole jest wymagane",
          }),
        }}
        error={errors.name}
      />

      <Styled.Field>
        <StyledLabel>
          {`Po??wi??cony czas na zadanie: `}
          <b>{task.time?.slice(0, -4) ?? "00:00:00"}</b>
        </StyledLabel>
      </Styled.Field>

      <Styled.Field>
        <StyledLabel>Kategoria</StyledLabel>
        <Select
          optionList={[EmptyCategory, ...categoriesList]}
          register={{
            ...register("category", {
              required: false,
            }),
          }}
          setValue={setValue}
          value={watchSelect}
        />
      </Styled.Field>

      <InputField
        label="Szczeg????owy opis:"
        type="textarea"
        register={{
          ...register("description", {
            required: false,
          }),
        }}
      />

      <StyledButton type="submit">Zapisz zmiany</StyledButton>

      <StyledButton type="button" onClick={deleteHandler}>
        <Styled.ContentWrapper>
          <IoMdTrash size={20} /> Usu?? zadanie
        </Styled.ContentWrapper>
      </StyledButton>
    </Styled.Form>
  );
};
