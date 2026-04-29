import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        
    setTimeout(() => {
    navigate("/", { replace: true });
  }, 0);  
  };

  return (
    <div>
      <h2>Welcome {user}</h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;