import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { API_URL } from "../../../constants";
import { IconsArray } from "./ProjectIconsArray";

type Inputs = {
  name: string;
  icon_name: string;
  status: string;
  time_lord_users: number;
};

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
}

export const AddNewProjectForm = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const { register, handleSubmit } = useForm();

  const selectIconHandler = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.time_lord_users = 1; //user_ID
    console.log(data);

    postData(`${API_URL}/time-lord-projects`, data).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <h1>Chcesz stworzyć coś wspaniałego?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nazwij projekt"
          {...register("name", { required: true })}
        />

        <h2>Wybierz ikonkę</h2>
        <IconWrapper>
          {Object.entries(IconsArray).map((iconItem) => {
            const [iconName, Icon] = iconItem;

            return (
              <Icon
                key={iconName}
                onClick={() => selectIconHandler(iconName)}
                className={selectedIcon === iconName ? "isActive" : ""}
              />
            );
          })}
        </IconWrapper>
        <input
          type="text"
          value={selectedIcon}
          readOnly
          {...register("icon_name", { required: true })}
        />

        <h2>Wybierz status</h2>
        <select {...register("status")}>
          <option value="development">W pracy</option>
          <option value="dropped">Porzucone</option>
          <option value="finished">Zakończone</option>
          <option value="planned">Zaplanowane</option>
        </select>

        <input type="submit" value="Dodaj projekt" />
      </form>
    </div>
  );
};

const IconWrapper = styled.div`
  display: grid;
  font-size: 24px;
  grid-template-columns: repeat(5, 1fr);

  > svg {
    margin: auto;
    padding: 1rem;
    cursor: pointer;
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid transparent;
  }

  > svg:hover {
    background: #202020;
  }

  > svg.isActive {
    border-color: #ddd;
    /* background: red; */
  }
`;
