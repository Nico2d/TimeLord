import { TaskType } from "../../../Types/Task.type";
import { CategoryType } from "../../Categories/Categories/Categories.types";
import { EmptyCategory } from "../../Categories/EmptyCategory";

export const filterTaskListByCategoriesList = (
  taskList: TaskType[],
  markedCategories: CategoryType[]
): TaskType[] => {
  return taskList.filter(({ category }) => {
    const taskCategory = category ?? EmptyCategory.name;

    return markedCategories.some(
      ({ name }) => taskCategory.toLowerCase() === name.toLowerCase()
    );
  });
};

export const filterCompletedTaskList = (taskList: TaskType[]): TaskType[] => {
  return taskList.filter((task) => !task.isCompleted);
};

export const filterUncompletedTaskList = (taskList: TaskType[]): TaskType[] => {
  return taskList.filter((task) => task.isCompleted);
};

export const getCategoryColor = (
  categoriesList: CategoryType[],
  category: string | null
) => {
  const categoryTask = categoriesList.find((categoryItem) => {
    return categoryItem.name.toUpperCase() === category?.toUpperCase();
  });

  return categoryTask?.color;
};
