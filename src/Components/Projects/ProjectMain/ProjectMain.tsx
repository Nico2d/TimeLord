import { useState } from "react";
import styled from "styled-components";
import { CategoryType } from "../../../Types/Category.type";
import { ProjectType } from "../../../Types/Project.type";
import { Categories } from "../../Categories/Categories";
import { EmptyCategory } from "../../Categories/EmptyCategory";
import { AddNewTaskForm } from "../../Tasks/AddNewTaskForm";
import { TaskList } from "../../Tasks/TaskList";

type ProjectMainProps = {
  project: ProjectType;
  onNewCategoryAdd: () => void;
};

export const ProjectMain = ({
  project,
  onNewCategoryAdd,
}: ProjectMainProps) => {
  const categoryList = [EmptyCategory, ...(project.categories ?? [])];
  const [filterList, setFilterList] = useState<CategoryType[]>(categoryList);

  return (
    <ContentWrapper>
      <AddNewTaskForm projectID={project.id} />
      <Categories
        categories={categoryList}
        onNewCategoryAdd={onNewCategoryAdd}
        filterList={filterList}
        setFilterList={setFilterList}
      />
      <TaskList projectID={project.id} flirtedCategoryList={filterList} />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: auto;
  padding: 0 20px;
`;
