import { useState } from "react";
import { useTaskList } from "../../../../API/Hooks/useTaskList";
import { TaskType } from "../../../../Types/Task.type";
import { Task } from "../../Task/Task";
import { getCategoryColor } from "../TaskList.functions";
import * as Styled from "../TaskList.styles";

type UncompletedTaskListProps = {
  taskList: TaskType[];
  projectID: string;
};

export const UncompletedTaskList = ({
  taskList,
  projectID,
}: UncompletedTaskListProps) => {
  const [isHiddenCompletedTasks, setiIHiddenCompletedTasks] = useState(true);
  const { categoriesList } = useTaskList(projectID);

  if (taskList.length === 0) return null;

  return (
    <>
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

      <Styled.CompletedTasks isHidden={isHiddenCompletedTasks}>
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            categoryColor={getCategoryColor(categoriesList, task.category)}
          />
        ))}
      </Styled.CompletedTasks>
    </>
  );
};
