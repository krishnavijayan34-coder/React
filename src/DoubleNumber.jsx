import { useMemo } from "react";
function DoubleNumber({ number }) {

  const doubled = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h3>Double: {doubled}</h3>
    </div>
  );
}

export default DoubleNumber;