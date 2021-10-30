import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: calc(100% - 2rem);
  max-width: 500px;
  margin: auto;
  background: ${({ theme }) => theme.colors.panelColor};
  padding: 20px;
  border-radius: 10px;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 15px;
  text-align: left;

  > a {
    padding-left: 3px;
  }
`;

export const FormButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;

  > button {
    width: 100%;
    margin: 0;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 50px;
  letter-spacing: 3px;
`;
