import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { ColorPicker } from "./ColorPick";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Btn = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({ color, children, onClick, disabled = false }) => {
  return (
    <Btn
      style={{
        backgroundColor: color
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
};

export const GroupButton = ({ createGrid, clearGrid, handleErase }) => {
  const { theme, width, height } = useContext(AppContext);

  return (
    <Wrapper>
      <Button
        color={theme}
        onClick={createGrid}
        disabled={width !== 0 && height !== 0}
      >
        Create grid
      </Button>
      <Button color={theme} onClick={clearGrid}>
        Clear grid
      </Button>
      <ColorPicker />
      <Button color={theme} onClick={handleErase}>
        Erase
      </Button>
      <Button color={theme}>Paint</Button>
    </Wrapper>
  );
};
