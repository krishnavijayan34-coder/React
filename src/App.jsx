import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginToggle from "./Login.jsx";
import UserStatus from "./userstatus.jsx";

function App() {
 return (
    <div>
    <LoginToggle />  
    <UserStatus status="active" />
    <UserStatus status="inactive" />
    <UserStatus status="xyz" />
    </div>
  );
}

export default App;
