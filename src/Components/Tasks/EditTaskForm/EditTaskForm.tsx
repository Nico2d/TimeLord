import { SubmitHandler, useForm } from "react-hook-form";
import { TaskType } from "../../../Types/Task.type";
import { StyledLabel } from "../../Projects/AddNewProjectForm/AddNewProjectForm.style";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { EditTaskFormProps } from "./EditTaskForm.types";
import * as Styled from "./EditTaskForm.styles";
import { IoMdTrash } from "react-icons/io";
import { InputField } from "../../Shared/Forms/InputField/InputField";
import { EmptyCategory } from "../../Categories/EmptyCategory";
import { Select } from "../../Shared/Forms/Select/Select";

export const EditTaskForm = ({ task }: EditTaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  const onSubmit: SubmitHandler<TaskType> = async (submitData) => {
    console.log(submitData);
  };

  setValue("name", task.name, { shouldValidate: false });
  setValue("description", task.description ?? "", { shouldValidate: false });

  const categoryList = [
    { value: EmptyCategory.id, name: EmptyCategory.name },
    { value: "cat1", name: "Cat2" },
    { value: "cat2", name: "Cat3" },
  ];

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
        {/* <Styled.Select {...register("category", { required: true })}>
          <option value={EmptyCategory.id}>{EmptyCategory.name}</option>
          <option value="cat1">cat1</option>
        </Styled.Select> */}

        <Select
          optionList={categoryList}
          method={(value) => {
            console.log("zmiana na:", value);
          }}
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
