import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        height: "100vh",
        padding: "20px"
      }}
    >
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

export default Home;