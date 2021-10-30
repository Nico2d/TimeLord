import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

type BackwardProps = {
  text: string;
  to: string;
};

export const Backward = ({ text, to }: BackwardProps) => {
  return (
    <BackwardWrapper as={Link} to={to}>
      <MdKeyboardArrowLeft size="24px" />
      {text}
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
