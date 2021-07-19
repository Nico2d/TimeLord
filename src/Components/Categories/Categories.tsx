import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { CategoryItem } from "./CategoryItem";
import { CategoryType } from "../../Types/Category.type";
import { useState } from "react";
import { SidebarComplementary } from "../SidebarComplementary/SidebarComplementary";
import { AddNewCategoryForm } from "./AddNewCategoryForm";
import { SidebarSwapper } from "../SidebarComplementary/SidebarSwapper";

type CategoriesProps = {
  categories: CategoryType[];
  onNewCategoryAdd?: () => void;
  filterList: CategoryType[];
  setFilterList: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  projectID: string;
};

export const Categories = ({
  categories,
  onNewCategoryAdd,
  filterList,
  setFilterList,
  projectID,
}: CategoriesProps) => {
  const isEmpty = categories == null || categories.length === 0;
  const [showForm, setShowForm] = useState(false);

  const categoryFiltersHandler = (clickedCategory: CategoryType) => {
    const isOnFilterList = filterList.some(
      (filterItem) => filterItem.id === clickedCategory.id
    );

    if (isOnFilterList) {
      setFilterList((prev) =>
        prev.filter((item) => item.id !== clickedCategory.id)
      );
    } else {
      setFilterList((prev) => [...prev, clickedCategory]);
    }
  };

  return (
    <Container>
      {!isEmpty && (
        <Scroll>
          {categories.map((category, idx) => {
            return (
              <CategoryItem
                key={idx}
                category={category}
                onClickHandler={() => categoryFiltersHandler(category)}
                isActive={filterList.some(
                  (filterItem) => filterItem.id === category.id
                )}
              />
            );
          })}
        </Scroll>
      )}

      <AddCategory
        isFill={isEmpty}
        onClick={() => setShowForm((showForm) => !showForm)}
      >
        <MdAdd size={24} />
        {isEmpty && <p>Dodaj nową kategorię</p>}
      </AddCategory>

      <SidebarSwapper isSwappedModal={showForm} key="addNewCategoryForm">
        <AddNewCategoryForm
          categories={categories}
          projectID={String(projectID)}
        />
      </SidebarSwapper>
    </Container>
  );
};

const Scroll = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #424242;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  flex-flow: row;
  margin-bottom: 1rem;
  width: fill-available;
  overflow: hidden;
`;

const AddCategory = styled.div<{ isFill: boolean }>`
  position: absolute;
  right: -6px;
  height: 100%;
  width: ${({ isFill }) => (isFill ? "calc(100% + 15px)" : "80px")};
  display: flex;
  background: #424242;
  transform: skew(-15deg);
  border-left: 5px #121212 solid;
  margin-bottom: 4px;
  cursor: pointer;
  text-align: center;
  justify-content: center;

  > * {
    fill: #d2d2d2;
    margin: auto 0;
    transform: skew(15deg);
  }

  > P {
    margin-left: 5px;
  }
`;
