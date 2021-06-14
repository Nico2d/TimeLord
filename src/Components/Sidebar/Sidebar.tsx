import styled from "styled-components";
import { Projects } from "./Projects";

export const Sidebar = () => {
  return (
    <Container>
      <Title>Witaj Nico!</Title>
      <Heading>Projekty</Heading>
      <Projects />

      <NavWrapper>
        <Heading>Statystyki</Heading>
        <Heading>Ustawienia</Heading>
        <Heading>Wyloguj</Heading>
      </NavWrapper>
    </Container>
  );
};

const NavWrapper = styled.nav`
  margin-top: auto;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 400;
`;

const Title = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  background: #202020;
  color: white;
  width: 200px;
  height: 100vh;
  padding: 0 1.5rem;

  ::before {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    right: 0;
    content: "";

    background: linear-gradient(
      to bottom,
      #df6d6d,
      #f9c182,
      #fafa9a,
      #85e099,
      #80c8ff,
      #bf80ff
    );

    background: linear-gradient(
      to bottom,
      red,
      orange,
      yellow,
      green,
      blue,
      purple
    );
  }
`;
