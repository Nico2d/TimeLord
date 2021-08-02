import styled from "styled-components";

const SELECT_HEIGHT = 45;

export const HiddenSelect = styled.select`
  display: none;
`;

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  height: ${SELECT_HEIGHT}px;
  line-height: ${SELECT_HEIGHT}px;
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.black};
  outline: none;
  text-transform: uppercase;
`;

export const SelectedValue = styled.p`
  margin: 0;
  padding-left: 10px;
  font-weight: 600;

  > svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
`;

export const Options = styled.ul<{ isHidden: boolean }>`
  position: absolute;
  list-style: none;
  background: ${({ theme }) => theme.colors.inputBackground};
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  flex-flow: column;
  left: 0;
  top: ${SELECT_HEIGHT + 1}px;
  width: 100%;
  padding: 0;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  border: 1px black solid;
  user-select: none;
  overflow: hidden;

  > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    font-weight: 200;
    font-size: ${({ theme }) => theme.font.small};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  > li:last-child {
    border-bottom: none;
  }
`;
