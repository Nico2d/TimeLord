import { MdAdd } from "react-icons/md";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import * as Styled from "./Categories.styles";
import { CategoriesProps, CategoryType } from "./Categories.types";
import { AddNewCategoryForm } from "../AddNewCategoryForm/AddNewCategoryForm";
import { useSidebarComplementary } from "../../../Context/SidebarContext";
import { Sidebar } from "../../Sidebar/Sidebar/Sidebar";
import { useState } from "react";

export const Categories = ({
  categories,
  filterList,
  setFilterList,
  projectID,
}: CategoriesProps) => {
  const { setSidebar, restartSidebar } = useSidebarComplementary();
  const [openForm, setOpenForm] = useState(false);

  const isEmpty = categories == null || categories.length === 0;

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

  const closeForm = () => {
    restartSidebar();
    setOpenForm(false);
  };

  const addNewCategoryHandler = () => {
    if (openForm) {
      closeForm();
    } else {
      setSidebar(
        <Sidebar width="300px" position="right" onClickAway={closeForm}>
          <AddNewCategoryForm
            categories={categories}
            projectID={String(projectID)}
          />
        </Sidebar>
      );
      setOpenForm(true);
    }
  };

  return (
    <Styled.Container>
      {!isEmpty && (
        <Styled.Scroll>
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
        </Styled.Scroll>
      )}

      <Styled.AddCategory isFill={isEmpty} onClick={addNewCategoryHandler}>
        <MdAdd size={24} />
        {isEmpty && <p>Dodaj nową kategorię</p>}
      </Styled.AddCategory>
    </Styled.Container>
  );
};
