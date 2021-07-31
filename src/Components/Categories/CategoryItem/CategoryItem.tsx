import React from "react";
import { CategoryItemProps } from "./CategoryItem.types";
import * as Styled from "./CategoryItem.styles";

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  onClickHandler,
  isActive = true,
}) => {
  return (
    <Styled.Category
      key={category.id}
      color={category.color}
      onClick={onClickHandler}
      role="button"
      isActive={isActive}
    >
      <div>{category.name}</div>
    </Styled.Category>
  );
};
