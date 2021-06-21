import { BiError } from "react-icons/bi";
import styled from "styled-components";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ErrorContainer>
      <BiError size={16} />
      {message}
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  margin-top: 10px;
  color: red;
  text-align: left;
  font-size: 16px;

  > svg {
    align-self: center;
    margin-right: 5px;
  }
`;
