import styled from "styled-components";

export const Sidebar = styled.div<{ location?: string; width?: string }>`
  position: relative;
  display: flex;
  flex-flow: column;
  background: #202020;
  color: white;
  width: ${(props) => props.width ?? "200px"};
  height: 100vh;
  padding: 0 1.5rem;

  ::before {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    ${(props) => (props.location === "right" ? "left" : "right")}: 0;
    content: "";

    /* background: linear-gradient(
      to bottom,
      #df6d6d,
      #f9c182,
      #fafa9a,
      #85e099,
      #80c8ff,
      #bf80ff
    ); */

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
