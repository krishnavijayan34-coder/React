import { useState, useEffect } from "react";

function ToggleComponent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Show state changed:", show);
  }, [show]);

  return (
    <div>
      <h2>Toggle Component Example</h2>

      <button onClick={() => setShow(true)}>
        Show Component
      </button>

      <button onClick={() => setShow(false)}>
        Hide Component
      </button>

      {show && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "lightgray" }}>
          <h3>I am the Div Component</h3>
          <p>This is shown using useState</p>
        </div>
      )}
    </div>
  );
}

export default ToggleComponent;