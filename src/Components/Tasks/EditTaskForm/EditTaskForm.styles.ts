import styled from "styled-components";

export const Form = styled.form`
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-flow: column;

  *:last-child {
    margin-top: auto;
  }
`;

export const Field = styled.div`
  margin-bottom: 1rem;

  > label {
    margin-bottom: 8px;
    text-align: left;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: inline-flex;

  svg {
    margin: auto;
    margin-right: 5px;
  }
`;
