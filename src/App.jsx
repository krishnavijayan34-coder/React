import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//import MyComponent from "./newcomponent";
//import MyName from "./myname";
//import Welcome from "./welcome.jsx"
//import ProductCard from './productcard.jsx';
//import UserInfo from './userinfo.jsx';
//import { useState } from "react";
import Child from "./child.jsx";

function App() {
const [rating, setRating] = useState(0);

  function handleRating(value) {
    setRating(value);
  }

  return (
    <div>
      <h1>Rating Component</h1>

      <h2>{"⭐".repeat(rating)}</h2>

      <Child sendRating={handleRating} />
    </div>
  );
}

export default App;

