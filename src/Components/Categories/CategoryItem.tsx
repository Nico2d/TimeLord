import React from "react";
import styled from "styled-components";
import { CategoryType } from "../../Types/Category.type";

type CategoryItemProps = {
  category: CategoryType;
  onClickHandler: () => void;
  isActive?: boolean;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  onClickHandler,
  isActive = true,
}) => {
  return (
    <Category
      key={category.id}
      color={category.color}
      onClick={onClickHandler}
      role="button"
      isActive={isActive}
    >
      <div>{category.name}</div>
    </Category>
  );
};

const Category = styled.div<{ color?: string; isActive: boolean }>`
  background: ${(props) => (props.isActive ? props.color : "#202020")};
  margin-right: 5px;
  vertical-align: middle;
  line-height: 50px;
  padding: 0 1.5rem;
  transform: skew(-15deg);
  flex: 1;
  cursor: pointer;
  pointer-events: stroke;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;

  :first-child {
    margin-left: -6px;
  }

  :last-child {
    margin-right: 75px;
  }

  > * {
    transform: skew(15deg);
    color: black;
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
  }
`;
