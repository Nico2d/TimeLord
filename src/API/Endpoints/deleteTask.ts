import axiosInstance from "../../axiosConfig";

export const deleteTask = async (id: string) => {
  const res = axiosInstance.delete<{ id: string }>(`/time-lord-tasks/${id}`);

  return res;
};
