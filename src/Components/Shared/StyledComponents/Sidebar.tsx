import React from "react";
import styled from "styled-components";

type SidebarProps = {
  location?: string;
  width?: string;
  children: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({
  location,
  width,
  children,
}) => {
  return (
    <Container location={location} width={width}>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

const ContentWrapper = styled.div`
  overflow-y: scroll;
  padding: 0 1rem;
  background: #202020;
  height: 100%;

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
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

const Container = styled.div<{
  location?: string;
  width?: string;
}>`
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: column;
  background: #202020;
  color: white;
  width: ${({ width }) => width ?? "200px"};
  min-width: ${({ width }) => width ?? "200px"};
  height: 100vh;

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    filter: blur(5px);
    width: 100%;
    height: 100%;

    background-size: 500% 500%;
    animation: rainbow 30s linear infinite;
  }

  @keyframes rainbow {
    0% {
      background-position: 30% 0%;
    }
    50% {
      background-position: 30% 100%;
    }
    100% {
      background-position: 30% 0%;
    }
  }
`;
