import logo from "./logo.svg";
import "./App.css";
import { Task } from "./Components/ToDoList/Task";
import styled from "styled-components";
import { Timer } from "./Components/Timer/Timer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <Container>
        {/* <Task /> */}

        <Timer />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: gray;
`;
