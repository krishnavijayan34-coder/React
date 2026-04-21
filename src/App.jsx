import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
 const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>

      <button onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
