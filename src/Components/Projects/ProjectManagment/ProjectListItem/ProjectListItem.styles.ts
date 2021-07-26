import styled from "styled-components";

export const Container = styled.li`
  display: inline-flex;
  height: 50px;
  border-radius: 8px;
  background: #202020;
  color: white;
  align-items: center;
  margin-bottom: 0.5rem;
  user-select: none;
  padding: 0 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  margin-left: auto;

  :hover {
    background: red;
  }
`;
