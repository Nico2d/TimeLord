import { SubmitHandler, useForm } from "react-hook-form";
import { StyledLabel } from "../../Projects/AddNewProjectForm/AddNewProjectForm.style";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { EditTaskFormInputs, EditTaskFormProps } from "./EditTaskForm.types";
import * as Styled from "./EditTaskForm.styles";
import { IoMdTrash } from "react-icons/io";
import { InputField } from "../../Shared/Forms/InputField/InputField";
import { Select } from "../../Shared/Forms/Select/Select";
import { useTaskList } from "../../../API/Hooks/useTaskList";
import { useEffect } from "react";
import { EmptyCategory } from "../../Categories/EmptyCategory";

export const EditTaskForm = ({ task, updateTask }: EditTaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<EditTaskFormInputs>({ mode: "onChange" });

  const { categoriesList } = useTaskList(String(task.time_lord_project));
  const watchSelect = watch("category", task.category ?? EmptyCategory.name);

  const onSubmit: SubmitHandler<EditTaskFormInputs> = async (submitData) => {
    updateTask({
      ...task,
      ...submitData,
    });
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
          Poświęcony czas na zadanie: <b>{task.time.slice(0, -4)}</b>
        </StyledLabel>
      </Styled.Field>

      <Styled.Field>
        <StyledLabel>Kategoria</StyledLabel>
        <Select
          optionList={categoriesList}
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
        label="Szczegółowy opis:"
        type="textarea"
        register={{
          ...register("description", {
            required: false,
          }),
        }}
      />

      <StyledButton type="submit">Zapisz zmiany</StyledButton>

      <StyledButton type="button">
        <IoMdTrash />
        Usuń zadanie
      </StyledButton>
    </Styled.Form>
  );
};
