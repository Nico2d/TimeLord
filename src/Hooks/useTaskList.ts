import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { TaskType } from "../Types/Task.type";

export const useTaskList = (
  projectID?: string,
  initList?: TaskType[]
): [
  isLoading: boolean,
  taskList: TaskType[],
  addNewTask: (newTask: TaskType) => void
] => {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState<TaskType[]>(initList ?? []);

  useEffect(() => {
    const fetchTask = async () => {
      const data = await fetch(`${API_URL}/time-lord-projects/${projectID}`);
      const items = await data.json();

      setTaskList(items.time_lord_tasks);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchTask();

    return () => {
      setTaskList([]);
    };
  }, [projectID]);

  const addNewTask = (newTask: TaskType) => {
    console.log("Adding new task...", newTask.name);
    setTaskList((taskList) => [...taskList, newTask]);
  };

  // const postTask = () => {};

  return [isLoading, taskList, addNewTask];
};
