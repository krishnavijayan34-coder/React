import { useReducer, useState } from "react";
import { reducer } from "./todoReducer";

function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: input
    });

    setInput("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo App</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;