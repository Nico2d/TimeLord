import styled from "styled-components";

export const LandingPage = () => {
  return (
    <>
      <Header>Tutaj jest landing page</Header>
      <a href="/dashboard">Przejdź do panelu</a>
    </>
  );
};

const Header = styled.h1`
  margin-top: 0;
`;
