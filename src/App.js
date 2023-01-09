import { useContext } from "react";
import styled from "styled-components";
import { Grid } from "./components/Grid";
import { GridController } from "./components/GridController";
import { Main } from "./components/Main";
import { AppContext } from "./context/AppContext";

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const { theme } = useContext(AppContext);

  return (
    <Body style={{ backgroundColor: theme }}>
      <Main>
        <GridController />
        <Grid />
      </Main>
    </Body>
  );
}

export default App;
