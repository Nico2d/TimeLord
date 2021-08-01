import axiosInst from "../axiosConfig";

export type updateTaskProps = {
  id: string | number;
  isCompleted: boolean;
};

export const updateTask = async (task: updateTaskProps) => {
  const res = await axiosInst.put(`/time-lord-tasks/${task.id}`, task);

  return res;
};
