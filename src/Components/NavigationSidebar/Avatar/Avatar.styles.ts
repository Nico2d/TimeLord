import styled from "styled-components";

export const Avatar = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? "24px"};
  height: ${({ height }) => height ?? "24px"};
  border-radius: 50%;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 20px;
  margin-top: 0.5rem;
  text-align: center;
`;

export const AvatarContainer = styled.div`
  margin: 2rem auto;
`;
