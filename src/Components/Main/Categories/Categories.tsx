import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { CategoryItem } from "./CategoryItem";
import { CategoryType } from "./Category.type";

export const Categories = () => {
  const [filterList, setFilterList] = useState([]);
  const categoryList: Array<CategoryType> = [
    { id: "1", name: "Design", color: "#DF6D6D" },
    { id: "2", name: "Bugs", color: "#F9C182" },
    { id: "3", name: "Frontend", color: "#FAFA9A" },
    { id: "4", name: "Backend", color: "#85E099" },
    { id: "5", name: "Testing", color: "#80C8FF" },
    { id: "6", name: "Styles", color: "#BF80FF" },
  ];

  return (
    <Container>
      <Scroll>
        {categoryList.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </Scroll>

      <AddCategory>
        <MdAdd />
      </AddCategory>
    </Container>
  );
};

const Scroll = styled.div`
  overflow-x: scroll;
  width: 100%;
  display: flex;
  height: 50px;
  width: 100%;
  overflow-y: hidden;

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
  padding-right: 50px;
  width: fill-available;
  overflow: hidden;
`;

const AddCategory = styled.div`
  position: absolute;
  right: -6px;
  height: 100%;
  width: 60px;
  display: flex;
  background: #424242;
  transform: skew(-15deg);
  border-left: 5px #121212 solid;
  margin-bottom: 4px;
  cursor: pointer;

  > * {
    fill: #d2d2d2;
    margin: auto;
    margin-left: 17px;
    transform: skew(15deg);
    font-size: 20px;
  }
`;
