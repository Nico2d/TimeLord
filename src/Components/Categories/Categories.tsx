import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { CategoryItem } from "./CategoryItem";
import { CategoryType } from "../../Types/Category.type";

type CategoriesProps = {
  categories: CategoryType[];
  onNewCategoryAdd?: () => void;
};

export const Categories = ({
  categories,
  onNewCategoryAdd,
}: CategoriesProps) => {
  const isEmpty = categories == null || categories.length === 0;

  return (
    <Container>
      {!isEmpty && (
        <Scroll>
          {categories.map((category, idx) => (
            <CategoryItem key={idx} category={category} />
          ))}
        </Scroll>
      )}

      <AddCategory isFill={isEmpty} onClick={onNewCategoryAdd}>
        <MdAdd size={24} />
        {isEmpty && <p>Dodaj nową kategorię</p>}
      </AddCategory>
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
