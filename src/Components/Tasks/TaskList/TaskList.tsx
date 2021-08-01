import { useMemo } from "react";
import { useTaskList } from "../../../API/Hooks/useTaskList";
import { FetchError } from "../../Shared/FetchError";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import { Task } from "../Task/Task";
import { TaskListProps } from "./TaskList.types";
import * as Styled from "./TaskList.styles";
import { UncompletedTaskList } from "./UncompletedTaskList/UncompletedTaskList";
import {
  filterTaskListByCategoriesList,
  filterCompletedTaskList,
  filterUncompletedTaskList,
  getCategoryColor,
} from "./TaskList.functions";

export const TaskList = ({ projectID, flirtedCategoryList }: TaskListProps) => {
  const { status, taskList, categoriesList } = useTaskList(projectID);

  const flirtedTaskListByCheckedCategories = useMemo(
    () => filterTaskListByCategoriesList(taskList, flirtedCategoryList),
    [taskList, flirtedCategoryList]
  );

  const filteredCompletedTaskList = useMemo(
    () => filterCompletedTaskList(flirtedTaskListByCheckedCategories),
    [flirtedTaskListByCheckedCategories]
  );

  const filteredUncompletedTaskList = useMemo(
    () => filterUncompletedTaskList(flirtedTaskListByCheckedCategories),
    [flirtedTaskListByCheckedCategories]
  );

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  return (
    <Styled.Container>
      {flirtedTaskListByCheckedCategories.length === 0 && (
        <p>Lista jest pusta. Dodaj nowe zadanie lub wyłącz filtry</p>
      )}

      {filteredCompletedTaskList.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            categoryColor={getCategoryColor(categoriesList, task.category)}
          />
        );
      })}

      <UncompletedTaskList
        taskList={filteredUncompletedTaskList}
        projectID={projectID}
      />
    </Styled.Container>
  );
};
