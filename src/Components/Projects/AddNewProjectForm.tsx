import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { API_URL } from "../../constants";
import { ProjectType } from "../../Types/Project.type";
import { slugify } from "../../Utils/slugify";
import { ErrorMessage } from "../Shared/ErrorMessage";
import { StyledButton } from "../Shared/StyledComponents/StyledButton";
import { StyledInput } from "../Shared/StyledComponents/StyledInput";
import { IconsArray } from "./ProjectIconsArray";

type AddNewProjectFormProps = {
  addToList: (newProject: ProjectType) => void;
};

type Input = {
  id: number;
  name: string;
  icon_name: string;
  time_lord_users: number;
  status: string;
};

export const AddNewProjectForm: React.FC<AddNewProjectFormProps> = ({
  addToList,
}) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [redirectToNewProject, setRedirectToNewProject] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const selectIconHandler = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const onSubmit: SubmitHandler<ProjectType> = async (data) => {
    data.time_lord_users = 1; //user_ID

    axios
      .post(`${API_URL}/time-lord-projects`, data)
      .then((response) => {
        console.log(response.data);

        addToList(response.data);
        setRedirectToNewProject(data.name);
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Section>
        <h1>Chcesz stworzyć coś wspaniałego?</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section>
            <StyledInput
              type="text"
              placeholder="Nazwij projekt"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <ErrorMessage message="Twój projekt musi mieć jakąś super nazwę" />
            )}
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
                    <StyleRadioInput
                      type="radio"
                      {...register("icon_name", { required: true })}
                      value={iconName}
                    />
                    <Icon />
                  </IconWrapper>
                );
              })}
            </IconsContainer>
            {errors.icon_name && (
              <ErrorMessage message="Wybierz jakąś ikonę aby łatwiej go odróżnić" />
            )}
          </Section>

          <Section>
            <StyledLabel>Wybierz status</StyledLabel>
            <select {...register("status")}>
              <option value="development">W pracy</option>
              <option value="planned">Zaplanowane</option>
            </select>
          </Section>

          <StyledButton type="submit">Dodaj nowy projekt</StyledButton>
        </form>
      </Section>

      {redirectToNewProject && (
        <RedirectContainer>
          <p>Czas aby dodać nowe zadania do projektu</p>
          <a href={`/projects/${slugify(redirectToNewProject)}`}>
            Przejdź do listy zadań
          </a>
        </RedirectContainer>
      )}
    </div>
  );
};

const RedirectContainer = styled.div`
  p {
    margin-bottom: 5px;
  }

  a {
    color: #ff0000;
  }
`;

const StyleRadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  display: block;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const IconWrapper = styled.label`
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
