import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectType } from "../../../Types/Project.type";
import { Categories } from "../../Categories/Categories/Categories";
import { CategoryType } from "../../Categories/Categories/Categories.types";
import { EmptyCategory } from "../../Categories/EmptyCategory";
import { AddNewTaskForm } from "../../Tasks/AddNewTaskForm";
import { TaskList } from "../../Tasks/TaskList/TaskList";

type ProjectMainProps = {
  project: ProjectType;
};

export const ProjectMain = ({ project }: ProjectMainProps) => {
  const categoryList = [EmptyCategory, ...(project.categories ?? [])];
  const [filterList, setFilterList] = useState<CategoryType[]>(categoryList);

  useEffect(() => {
    if (project.categories) {
      const newAddedCategory =
        project.categories[project.categories.length - 1];
      setFilterList((prev) => [...prev, newAddedCategory]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.categories]);

  return (
    <ContentWrapper>
      <AddNewTaskForm projectID={project.id} />
      <Categories
        categories={categoryList}
        filterList={filterList}
        setFilterList={setFilterList}
        projectID={project.id}
      />
      <TaskList projectID={project.id} flirtedCategoryList={filterList} />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 0;
`;
