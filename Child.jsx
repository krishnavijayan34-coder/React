import React from "react";

function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
}

export default React.memo(Child);