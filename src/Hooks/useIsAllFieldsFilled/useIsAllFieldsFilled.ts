import { UseFormWatch } from "react-hook-form/dist/types";

export const useFormHelper = <T>(watch: UseFormWatch<T>) => {
  const isAllFieldsFilled = () => {
    let isAllFieldsFilled = true;
    const watchAllFields = Object.values(watch());

    if (watchAllFields.length === 0) {
      return false;
    }

    watchAllFields.forEach((item) => {
      if (item === "" || item === undefined) {
        isAllFieldsFilled = false;
      }
    });

    return isAllFieldsFilled;
  };

  return { isAllFieldsFilled };
};
