import styled from "styled-components";

export const Section = styled.section`
  margin-top: auto;
  margin-bottom: 1rem;
  text-align: left;

  h4 {
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  h5 {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.font.normal};
    opacity: 0.9;
    font-weight: lighter;
  }
`;

export const Whitespace = styled.div`
  margin-bottom: 1rem;
`;

export const SidebarParagraph = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.font.small};
  opacity: 0.75; ;
`;
