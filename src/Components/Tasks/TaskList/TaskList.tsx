import { useState } from "react";
import { useTaskList } from "../../../API/Hooks/useTaskList";
import { TaskType } from "../../../Types/Task.type";
import { EmptyCategory } from "../../Categories/EmptyCategory";
import { FetchError } from "../../Shared/FetchError";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import { Task } from "../Task/Task";
import { TaskListProps } from "./TaskList.types";
import * as Styled from "./TaskList.styles";

export const TaskList = ({ projectID, flirtedCategoryList }: TaskListProps) => {
  const [isHiddenCompletedTasks, setiIHiddenCompletedTasks] = useState(true);
  const [status, taskList, categoriesList] = useTaskList(projectID);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  const getCategoryColor = (category: string | null) => {
    const categoryTask = categoriesList.find((categoryItem) => {
      return categoryItem.name.toUpperCase() === category?.toUpperCase();
    });

    return categoryTask?.color;
  };

  const flirtedTaskList: TaskType[] = taskList.filter(({ category }) => {
    const taskCategory = (category = category ?? EmptyCategory.name);

    const isOnFilteredList = flirtedCategoryList.some(
      ({ name }) => taskCategory.toLowerCase() === name.toLowerCase()
    );

    return isOnFilteredList;
  });

  return (
    <Styled.Container>
      {flirtedTaskList.length === 0 && (
        <p>Lista jest pusta. Dodaj nowe zadanie</p>
      )}

      {flirtedTaskList
        .filter((task) => !task.isCompleted)
        .map((task, idx) => {
          return (
            <Task
              key={idx}
              task={task}
              categoryColor={getCategoryColor(task.category)}
            />
          );
        })}

      {flirtedTaskList.length !== 0 && (
        <Styled.HiddenLabel
          onClick={() =>
            setiIHiddenCompletedTasks(
              (isHiddenCompletedTasks) => !isHiddenCompletedTasks
            )
          }
        >
          {`${
            isHiddenCompletedTasks ? "Wyświetl" : "Schowaj"
          } zakończone zadania`}
        </Styled.HiddenLabel>
      )}

      <Styled.CompletedTasks isHidden={isHiddenCompletedTasks}>
        {flirtedTaskList
          .filter((task) => task.isCompleted)
          .map((task, idx) => {
            return (
              <Task
                key={idx}
                task={task}
                categoryColor={getCategoryColor(task.category)}
              />
            );
          })}
      </Styled.CompletedTasks>
    </Styled.Container>
  );
};
