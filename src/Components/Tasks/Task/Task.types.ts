import { TaskType } from "../../../Types/Task.type";

export type TaskProps = {
  task: TaskType;
  totalTaskTime?: number;
  handleComplete?: () => void;
  categoryColor?: string | undefined;
};
