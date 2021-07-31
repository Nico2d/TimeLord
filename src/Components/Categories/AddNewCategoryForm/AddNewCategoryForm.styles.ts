import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

export const ColorContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
`;

export const ColorSampleWrapper = styled.label`
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;

  :hover {
    background: #191919;
  }

  &.isActive {
    border-color: #ddd;
  }
`;

export const StyleRadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

export const ColorSample = styled.div<{
  background: string;
}>`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: ${({ background }) => background};
`;
