import { useState, useEffect } from "react";

function BackgroundColorChanger() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h2>Background Color Changer</h2>

      <button onClick={() => setColor("purple")}>purple</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

export default BackgroundColorChanger;
