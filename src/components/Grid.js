import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { Pixel } from "./Pixel";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = () => {
  const { width, height } = useContext(AppContext);

  return (
    <Wrapper>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${width}, 1fr)`,
          gridTemplateRows: `repeat(${height}, 1fr)`
        }}
      >
        {Array.apply(null, Array(width * height)).map((row) => (
          <Pixel />
        ))}
      </div>
    </Wrapper>
  );
};
