import { CategoryType } from "../Categories/Categories.types";

export type CategoryItemProps = {
  category: CategoryType;
  onClickHandler: () => void;
  isActive?: boolean;
};
