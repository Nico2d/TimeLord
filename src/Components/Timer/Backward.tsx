import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { slugify } from "../../Utils/slugify";

type BackwardProps = {
  projectName: string;
};

export const Backward = ({ projectName }: BackwardProps) => {
  return (
    <BackwardWrapper as={Link} to={`/projects/${slugify(projectName)}`}>
      <MdKeyboardArrowLeft size="24px" />
      {projectName}
    </BackwardWrapper>
  );
};

const BackwardWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  display: flex;
  text-decoration: none;
`;
