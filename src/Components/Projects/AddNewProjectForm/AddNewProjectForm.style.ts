import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
`;

export const RedirectContainer = styled.div`
  p {
    margin-bottom: 5px;
  }

  a {
    color: #ff0000;
  }
`;

export const StyleRadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  display: block;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const IconWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin: auto;
  cursor: pointer;
  border: 1px solid transparent;

  :hover {
    background: ${({ theme }) => theme.colors.inactiveGray};
  }

  &.isActive {
    border-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const IconsContainer = styled.ul`
  display: grid;
  font-size: ${({ theme }) => theme.font.big};
  grid-template-columns: repeat(5, 1fr);
`;
