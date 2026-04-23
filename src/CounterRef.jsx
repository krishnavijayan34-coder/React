import { useRef } from "react";

function CounterRef() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log("Count:", countRef.current);
  };

  return (
    <div>
      <h2>useRef Counter Example</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default CounterRef;