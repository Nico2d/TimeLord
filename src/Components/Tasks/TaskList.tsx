import { useState } from "react";
import styled from "styled-components";
import { useTaskList } from "../../API/Hooks/useTaskList";
import { CategoryType } from "../../Types/Category.type";
import { TaskType } from "../../Types/Task.type";
import { FetchError } from "../Shared/FetchError";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { Task } from "./Task";

type TaskListProps = {
  projectID: string;
  categoryList: CategoryType[];
};

export const TaskList = ({ projectID, categoryList }: TaskListProps) => {
  const [isHiddenCompletedTasks, setiIHiddenCompletedTasks] = useState(true);
  const [status, taskList, categoriesList] = useTaskList(projectID);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  // useEffect(() => {
  const flirtedTaskList: TaskType[] = taskList.filter((TaskItem) => {
    // let isInCategoryList = categoriesList.find((item) => {
    //   return item.name === TaskItem.category;
    // });

    // return isInCategoryList !== undefined;

    return true;
  });

  // console.log(flirtedTaskList);
  // console.log("categoryList :", categoryList);
  // }, [categoryList]);

  const getCategoryColor = (category: string | null) => {
    const categoryTask = categoriesList.find((categoryItem) => {
      return categoryItem.name === category;
    });

    return categoryTask?.color;
  };

  return (
    <Container>
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

      <HiddenLabel
        onClick={() =>
          setiIHiddenCompletedTasks(
            (isHiddenCompletedTasks) => !isHiddenCompletedTasks
          )
        }
      >
        {`${
          isHiddenCompletedTasks ? "Wyświetl" : "Schowaj"
        } zakończone zadania`}
      </HiddenLabel>
      <CompletedTasks isHidden={isHiddenCompletedTasks}>
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
      </CompletedTasks>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const HiddenLabel = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;

const CompletedTasks = styled.div<{ isHidden: boolean }>`
  max-height: ${({ isHidden }) => (isHidden ? "0px" : "99999px")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  :last-child {
    margin-bottom: 1rem;
  }
`;
