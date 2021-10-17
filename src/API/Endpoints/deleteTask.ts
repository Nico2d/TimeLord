import axiosInstance from "../../axiosConfig";

export const deleteTask = async (id: string) => {
  return await axiosInstance.delete<{ id: string }>(`/time-lord-tasks/${id}`);
};
