import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { API_URL } from "../../constants";
import { useTaskList } from "../../Hooks/useTaskList";
import { ProjectType } from "../../Types/Project.type";
import { AddNewCategoryForm } from "../Categories/AddNewCategoryForm";
import { Categories } from "../Categories/Categories";
import { Sidebar } from "../Shared/StyledComponents/Sidebar";
import { AddNewTaskForm } from "../Tasks/AddNewTaskForm";
import { TaskList } from "../Tasks/TaskList";

const fetchProject = async (projectID: string) => {
  const res = await fetch(`${API_URL}/time-lord-projects/${projectID}`);
  const data = res.json();

  return data;
};

type ProjectProps = {
  projectID: string;
};

export const Project = ({ projectID }: ProjectProps) => {
  const [isComplementaryActive, setIsComplementaryActive] = useState(true);
  // const [isLoading, taskList, addNewTask, categories] = useTaskList(
  //   String(projectID)
  // );

  const addCategoryHandler = () => {
    console.log("Adding category...");
    setIsComplementaryActive((value) => !value);
  };

  const {
    isLoading,
    error,
    data: project,
  } = useQuery<ProjectType, Error>("categories", () => fetchProject(projectID));
  console.log("data", project);

  const variants = {
    hidden: { opacity: 1, x: 0, width: "auto" },
    closed: { opacity: 0, x: "100%", width: 0 },
  };

  if (isLoading || project === undefined) {
    return <ContentWrapper>Loading...</ContentWrapper>;
  }

  if (error) {
    return (
      <ContentWrapper>
        {`An error has occurred: ${error.message}`}
      </ContentWrapper>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <AddNewTaskForm
          projectID={projectID}
          // handleAddNewProject={addNewTask}
        />
        <Categories
          categories={project.categories}
          onNewCategoryAdd={() => addCategoryHandler()}
        />
        <TaskList taskList={project.time_lord_tasks} />
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
          <AddNewCategoryForm
            categories={project.categories}
            projectID={String(projectID)}
          />
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
