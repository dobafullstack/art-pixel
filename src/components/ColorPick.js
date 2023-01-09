import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { SketchPicker } from "react-color";

export const ColorPicker = () => {
  const [showPick, setShowPick] = useState(false);
  const { color, setColor } = useContext(AppContext);

  const handleShow = () => setShowPick(!showPick);

  const handleChange = (color) => {
    setColor(color.hex);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    setShowPick(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "2.5rem",
          height: "1.5rem",
          border: "3px solid black",
          backgroundColor: color,
          cursor: "pointer"
        }}
        onClick={handleShow}
      ></div>
      {showPick && (
        <div
          style={{
            position: "absolute"
          }}
        >
          <SketchPicker
            color={color}
            onChange={handleChange}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      )}
    </div>
  );
};
