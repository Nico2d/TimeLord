import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { updateCategories } from "../../../API/updateCategories";
import { ErrorMessage } from "../../Shared/ErrorMessage";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { StyledInput } from "../../Shared/StyledComponents/StyledInput";
import { v4 as uuidv4 } from "uuid";
import { colorList } from "../ColorList";
import { CategoryType } from "../Categories/Categories.types";
import { AddNewCategoryFormProps } from "./AddNewCategoryForm.types";
import * as Styled from "./AddNewCategoryForm.styles";
import { EmptyCategory } from "../EmptyCategory";

const removedEmptyCategory = (categoryList: CategoryType[]): CategoryType[] => {
  return categoryList.filter((item) => item.id !== EmptyCategory.id);
};

export const AddNewCategoryForm = ({
  projectID,
  categories,
}: AddNewCategoryFormProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CategoryType>();

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateCategories, {
    onSuccess: (data) => {
      console.log("Adding new category [Success]:", data);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("project");
    },
  });

  const onSubmit: SubmitHandler<CategoryType> = async (submitData) => {
    const categoriesList = removedEmptyCategory(categories);
    submitData.id = uuidv4();
    submitData.name = submitData.name.toUpperCase();

    mutate({
      id: projectID,
      categories: [...categoriesList, submitData],
    });

    setSelectedColor("");
    reset();
  };

  let isEmpty = watch("name") === "" || selectedColor === "";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Dodaj kategorie</h3>
      <StyledInput
        type="text"
        placeholder="Podaj nazwę kategorii"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <ErrorMessage message="Twoja kategoria musi mieć nazwę" />
      )}

      <p>Wybierz kolor</p>
      <Styled.ColorContainer>
        {colorList.map((color, idx) => (
          <Styled.ColorSampleWrapper
            key={idx}
            onClick={() => setSelectedColor(color)}
            className={selectedColor === color ? "isActive" : ""}
          >
            <Styled.StyleRadioInput
              type="radio"
              {...register("color", { required: true })}
              value={color}
            />
            <Styled.ColorSample background={color} />
          </Styled.ColorSampleWrapper>
        ))}
      </Styled.ColorContainer>
      {errors.color && <ErrorMessage message="Wybierz kolor" />}

      <Styled.ButtonWrapper>
        <StyledButton isFocus={!isEmpty}>Dodaj</StyledButton>
      </Styled.ButtonWrapper>
    </form>
  );
};
