import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { useTaskList } from "../../Hooks/useTaskList";
import { AddNewCategoryForm } from "../Categories/AddNewCategoryForm";
import { Categories } from "../Categories/Categories";
import { Complementary } from "../Complementary/Complementary";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";
import { AddNewTaskForm } from "../Tasks/AddNewTaskForm";
import { TaskList } from "../Tasks/TaskList";

type ProjectProps = {
  projectID: number;
};

export const Project = ({ projectID }: ProjectProps) => {
  const [isComplementaryActive, setIsComplementaryActive] = useState(true);
  const [isLoading, taskList, addNewTask, categories] = useTaskList(
    String(projectID)
  );

  const addCategoryHandler = () => {
    console.log("Adding category...");
    setIsComplementaryActive((value) => !value);
  };

  const variants = {
    hidden: { opacity: 1, x: 0, width: "auto" },
    closed: { opacity: 0, x: "100%", width: 0 },
  };

  if (isLoading) {
    return <ContentWrapper>Loading...</ContentWrapper>;
  }

  return (
    <Container>
      <ContentWrapper>
        <AddNewTaskForm
          projectID={projectID}
          handleAddNewProject={addNewTask}
        />
        <Categories
          categories={categories}
          onNewCategoryAdd={() => addCategoryHandler()}
        />
        <TaskList taskList={taskList} />
      </ContentWrapper>

      <motion.div
        animate={isComplementaryActive ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween", ease: [0, 0, 0, 0] }}
      >
        <Sidebar location="right" width="250px">
          Complementary
        </Sidebar>
      </motion.div>

      <motion.div
        animate={!isComplementaryActive ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween", ease: [0, 0, 0, 0] }}
      >
        <Sidebar location="right" width="300px">
          <AddNewCategoryForm categories={categories} projectID={String(projectID)} />
        </Sidebar>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: auto;
  padding: 0 20px;
`;
