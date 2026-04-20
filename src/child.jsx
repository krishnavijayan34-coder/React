import { useState } from "react";

function Child(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Give Rating</h2>

      <input
        type="number"
        placeholder="Enter rating (1-5)"
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => props.sendRating(value)}>
        Submit Rating
      </button>
    </div>
  );
}

export default Child;