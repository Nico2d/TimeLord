import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { API_URL } from "../../constants";
import { CategoryType } from "../../Types/Category.type";
import { ErrorMessage } from "../Shared/ErrorMessage";
import { StyledButton } from "../Shared/StyledComponents/StyledButton";
import { StyledInput } from "../Shared/StyledComponents/StyledInput";

type AddNewCategoryFormProps = {
  categories: CategoryType[];
  projectID: string;
};

export const AddNewCategoryForm = ({
  projectID,
  categories,
}: AddNewCategoryFormProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const colorList = [
    "#DF6D6D",
    "#F9C182",
    "#FAFA9A",
    "#85E099",
    "#80C8FF",
    "#BF80FF",
  ];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CategoryType>();

  const onSubmit: SubmitHandler<CategoryType> = async (submitData) => {
    categories.push(submitData);

    fetch(`${API_URL}/time-lord-projects/${projectID}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ categories: categories }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
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
        <ErrorMessage message="Twója kategoria musi mieć nazwę" />
      )}

      <p>Wybierz kolor</p>
      <ColorContainer>
        {colorList.map((color, idx) => (
          <ColorSampleWrapper
            key={idx}
            onClick={() => setSelectedColor(color)}
            className={selectedColor === color ? "isActive" : ""}
          >
            <StyleRadioInput
              type="radio"
              {...register("color", { required: true })}
              value={color}
            />
            <ColorSample background={color} />
          </ColorSampleWrapper>
        ))}
      </ColorContainer>
      {errors.color && <ErrorMessage message="Wybierz kolor" />}

      <ButtonWrapper>
        <StyledButton isFocus={!isEmpty}>Dodaj</StyledButton>
      </ButtonWrapper>
    </form>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const ColorContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
`;

const ColorSampleWrapper = styled.label`
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;

  :hover {
    background: #191919;
  }

  &.isActive {
    border-color: #ddd;
  }
`;

const ColorSample = styled.div<{
  background: string;
}>`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: ${({ background }) => background};
`;

const StyleRadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;
