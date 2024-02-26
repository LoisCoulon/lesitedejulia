import { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#D79A2B");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleColorChange() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  return (
    <div
      className="container"
      style={{
        width: "auto",
        height: "100vh",
        background: color,
      }}
    >
      <h2>Couleur actuelle : {color}</h2>
      <button onClick={() => handleColorChange()}>
        Changer la couleur du site
      </button>
    </div>
  );
}
