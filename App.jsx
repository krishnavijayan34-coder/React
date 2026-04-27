import { useState } from "react";
import DoubleNumber from "./DoubleNumber";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Simple useMemo Example</h2>

      <DoubleNumber number={number} />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <br /><br />

      <button onClick={() => setNumber(number + 1)}>
        Change Number ({number})
      </button>
    </div>
  );
}

export default App;