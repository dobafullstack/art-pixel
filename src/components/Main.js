import styled from "styled-components";

export const Box = styled.div`
  width: 40%;
  height: 80%;
  background-color: white;
  border-radius: 8px;
  padding: 3rem;
`;

export const Main = ({ children }) => {
  return <Box>{children}</Box>;
};
