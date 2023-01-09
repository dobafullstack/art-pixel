import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const Pixel = () => {
  const [isHover, setIsHover] = useState(false);
  const [itemColor, setItemColor] = useState("transparent");
  const { color } = useContext(AppContext);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleOnClick = () => {
    setItemColor(color);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
      style={{
        width: "1rem",
        height: "1rem",
        border: "1px solid #ddd",
        backgroundColor: isHover ? color : itemColor
      }}
    ></div>
  );
};
