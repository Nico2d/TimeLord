import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { API_URL } from "../../../constants";
import { postData } from "../../../Hooks/postData";
import { StyledInput } from "../StyledComponents/StyledInput";
import { IconsArray } from "./ProjectIconsArray";

type Inputs = {
  name: string;
  icon_name: string;
  status: string;
  time_lord_users: number;
};

export const AddNewProjectForm = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const { register, handleSubmit } = useForm();

  const selectIconHandler = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const onSubmit: SubmitHandler<Inputs> = async (body) => {
    body.time_lord_users = 1; //user_ID

    postData(`${API_URL}/time-lord-projects`, body)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Chcesz stworzyć coś wspaniałego?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <StyledInput
            type="text"
            placeholder="Nazwij projekt"
            {...register("name", { required: true })}
          />
        </Section>

        <Section>
          <StyledLabel>Wybierz ikonkę</StyledLabel>
          <IconsContainer>
            {Object.entries(IconsArray).map((iconItem) => {
              const [iconName, Icon] = iconItem;

              return (
                <IconWrapper
                  key={iconName}
                  onClick={() => selectIconHandler(iconName)}
                  className={selectedIcon === iconName ? "isActive" : ""}
                >
                  <Icon />
                </IconWrapper>
              );
            })}
          </IconsContainer>
          <input
            type="hidden"
            value={selectedIcon}
            {...register("icon_name", { required: true })}
          />
        </Section>

        <Section>
          <StyledLabel>Wybierz status</StyledLabel>
          <select {...register("status")}>
            <option value="development">W pracy</option>
            {/* <option value="dropped">Porzucone</option> */}
            {/* <option value="finished">Zakończone</option> */}
            <option value="planned">Zaplanowane</option>
          </select>
        </Section>

        {/* <Button type="submit" value="Dodaj projekt">
          Dodaj projekt
        </Button> */}
        <input type="submit" />
      </form>
    </div>
  );
};

const StyledLabel = styled.label`
  font-size: 18px;
  display: block;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const IconWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin: auto;
  cursor: pointer;
  border: 1px solid transparent;

  :hover {
    background: #202020;
  }

  &.isActive {
    border-color: #ddd;
  }
`;

const IconsContainer = styled.ul`
  display: grid;
  font-size: 24px;
  grid-template-columns: repeat(5, 1fr);
`;
