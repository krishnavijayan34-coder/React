import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";


function Login() {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username);
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;