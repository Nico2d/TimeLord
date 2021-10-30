import { BiError } from "react-icons/bi";
import styled from "styled-components";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <ErrorContainer>
      <BiError size={16} />
      <span>{message}</span>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  margin-top: 10px;
  color: red;
  
  font-size: 16px;
  line-height: 16px;

  > svg {
    align-self: center;
    margin-right: 5px;
  }
`;
