import styled, { css } from "styled-components";

const basicInput = css`
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid transparent;
  background: ${({ theme }) => theme.colors.inputBackground};
  outline: none;

  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  ${basicInput}
`;

export const Textarea = styled.textarea`
  ${basicInput}
  resize: vertical;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.small};
  margin-bottom: 8px;
`;

export const WarningMessage = styled.p<{ position?: string }>`
  color: ${({ theme }) => theme.colors.warningRed};
  margin: 10px ${({ position }) => (position === "center" ? "auto" : "5px")};
  font-size: ${({ theme }) => theme.font.small};
  text-align: ${({ position }) => (position === "center" ? "center" : "left")};
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 2rem;
  text-align: left;
`;
