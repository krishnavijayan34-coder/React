import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px"
      }}
    >
      <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;