import styled from "styled-components";

export const TimeCounterWrapper = styled.div`
  color: white;
  margin-left: auto;
  z-index: 1;
  padding-right: 10px;
  font-size: 14px;
  text-decoration: none !important;
`;

export const TextWrapper = styled.p<{ isCompleted: boolean }>`
  text-align: left;
  margin: auto 0;
  font-size: 14px;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "auto")};
  z-index: 1;
`;

export const CheckboxWrapper = styled.div`
  padding: 0 1rem;
  font-size: 24px;
  display: flex;
  z-index: 1;
  cursor: pointer;

  > * {
    margin: auto;
  }
`;

export const PlayWrapper = styled(CheckboxWrapper)`
  color: #202020;
  margin-left: auto;
  cursor: pointer;
`;

export const Container = styled.div<{
  progressBar?: number;
  categoryColor?: string;
}>`
  position: relative;
  display: inline-flex;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.panelColor};
  color: white;
  align-items: center;
  margin-bottom: 0.5rem;
  overflow: hidden;
  user-select: none;

  ::before {
    content: "";
    position: absolute;
    right: -7px;
    background: ${({ categoryColor }) => categoryColor ?? "#424242"};
    width: calc(
      80px +
        ${({ progressBar }) => (progressBar === undefined ? 0 : progressBar)}px
    );

    height: 70px;
    transform: skewX(-15deg);
    transition: width 0.5s ease-in-out;
  }
`;
