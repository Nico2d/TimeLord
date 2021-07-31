import styled from "styled-components";

export const Scroll = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #424242;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  flex-flow: row;
  margin-bottom: 1rem;
  width: fill-available;
  overflow: hidden;
`;

export const AddCategory = styled.div<{ isFill: boolean }>`
  position: absolute;
  right: -6px;
  height: 100%;
  width: ${({ isFill }) => (isFill ? "calc(100% + 15px)" : "80px")};
  display: flex;
  background: #424242;
  transform: skew(-15deg);
  border-left: 5px #121212 solid;
  margin-bottom: 4px;
  cursor: pointer;
  text-align: center;
  justify-content: center;

  > * {
    fill: #d2d2d2;
    margin: auto 0;
    transform: skew(15deg);
  }

  > P {
    margin-left: 5px;
  }
`;
