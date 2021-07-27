import styled from "styled-components";

export const ContentWrapper = styled.div<{ width?: string }>`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.panelColor};
  height: 100vh;
  display: flex;
  flex-flow: column;
  scrollbar-width: thin;
  width: ${({ width }) => width ?? "200px"};
  min-width: ${({ width }) => width ?? "200px"};

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

export const StyledSidebar = styled.div<{
  position?: string;
  width?: string;
  isMobile?: boolean;
}>`
  position: ${({ isMobile }) => (isMobile ? "fixed" : "sticky")};
  z-index: 500;
  top: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  color: white;
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
