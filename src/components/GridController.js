import { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { GroupButton } from "./GroupButton";

const Range = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 1.5rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input``;

export const GridController = ({ title }) => {
  const { width, setWidth, height, setHeight, setColor } =
    useContext(AppContext);
  const [w, setW] = useState(width);
  const [h, setH] = useState(height);

  const createGrid = () => {
    setWidth(w);
    setHeight(h);
  };

  const clearGrid = () => {
    setWidth(0);
    setHeight(0);
    setW(0);
    setH(0);
  };

  const handleErase = () => {
    setColor("transparent");
  };

  return (
    <>
      <Box>
        <Range>
          <Title>Grid width:</Title>
          <Box style={{ gap: "0.5rem" }}>
            <Input
              value={w}
              type="range"
              min="0"
              max="30"
              onChange={(e) => setW(+e.target.value)}
            />
            <p>{w}</p>
          </Box>
        </Range>

        <Range>
          <Title>Grid height:</Title>
          <Box style={{ gap: "0.5rem" }}>
            <Input
              value={h}
              type="range"
              min="0"
              max="30"
              onChange={(e) => setH(+e.target.value)}
            />
            <p>{h}</p>
          </Box>
        </Range>
      </Box>
      <GroupButton
        createGrid={createGrid}
        clearGrid={clearGrid}
        handleErase={handleErase}
      />
    </>
  );
};
