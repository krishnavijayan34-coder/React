import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//import MyComponent from "./newcomponent";
//import MyName from "./myname";
//import Welcome from "./welcome.jsx"
//import ProductCard from './productcard.jsx';
import UserInfo from './userinfo.jsx';


function App() {
const userData = {
    name: "Krishna",
    age: 22
  };
  return (
    <div>
     <UserInfo name={userData.name} age={userData.age} />
    </div>
  );
      
}

export default App;
