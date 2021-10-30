import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProjectList } from "../../../API/Hooks/useProjectList";
import { IProject } from "../../../Types/Project.type";
import { slugify } from "../../../Utils/slugify";
import { ErrorMessage } from "../../FormAssets/ErrorMessage/ErrorMessage";
import { StyledButton } from "../../Shared/StyledComponents/StyledButton";
import { StyledInput } from "../../Shared/StyledComponents/StyledInput";
import { IconsArray } from "../ProjectIconsArray";
import * as Styled from "./AddNewProjectForm.style";
import {
  AddNewProjectFormInput,
  AddNewProjectFormProps,
} from "./AddNewProjectForm.types";

export const AddNewProjectForm = ({ userID }: AddNewProjectFormProps) => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [redirectToNewProject, setRedirectToNewProject] = useState("");
  const [mutate] = useProjectList();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddNewProjectFormInput>();

  const selectIconHandler = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const onSubmit: SubmitHandler<IProject> = async (data) => {
    data.users_permissions_users = userID;
    data.slug = slugify(data.name);

    mutate.mutate(data);
  };

  useEffect(() => {
    reset();
    setRedirectToNewProject(mutate.data?.data.name ?? "");
  }, [mutate.data?.data.name, mutate.isSuccess, reset]);

  return (
    <Styled.Container>
      <Styled.Section>
        <h1>Chcesz stworzyć coś wspaniałego?</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.Section>
            <StyledInput
              type="text"
              placeholder="Nazwij projekt"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <ErrorMessage message="Twój projekt musi mieć jakąś super nazwę" />
            )}
          </Styled.Section>

          <Styled.Section>
            <Styled.StyledLabel>Wybierz ikonkę</Styled.StyledLabel>
            <Styled.IconsContainer>
              {Object.entries(IconsArray).map((iconItem) => {
                const [iconName, Icon] = iconItem;

                return (
                  <Styled.IconWrapper
                    key={iconName}
                    onClick={() => selectIconHandler(iconName)}
                    className={selectedIcon === iconName ? "isActive" : ""}
                  >
                    <Styled.StyleRadioInput
                      type="radio"
                      {...register("icon_name", { required: true })}
                      value={iconName}
                    />
                    <Icon />
                  </Styled.IconWrapper>
                );
              })}
            </Styled.IconsContainer>
            {errors.icon_name && (
              <ErrorMessage message="Wybierz jakąś ikonę aby łatwiej go odróżnić" />
            )}
          </Styled.Section>

          <Styled.Section>
            <Styled.StyledLabel>Dobierz status</Styled.StyledLabel>
            <select {...register("status")}>
              <option value="development">W pracy</option>
              <option value="planned">Zaplanowane</option>
            </select>
          </Styled.Section>

          <StyledButton type="submit">Dodaj nowy projekt</StyledButton>
        </form>
      </Styled.Section>

      {redirectToNewProject && (
        <Styled.RedirectContainer>
          <p>Czas aby dodać nowe zadania do projektu</p>
          <a href={`/projects/${slugify(redirectToNewProject)}`}>
            Przejdź do listy zadań
          </a>
        </Styled.RedirectContainer>
      )}
    </Styled.Container>
  );
};
