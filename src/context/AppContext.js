import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  const [theme, setTheme] = useState("#F4C531");
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(30);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        width,
        setWidth,
        height,
        setHeight,
        color,
        setColor
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
