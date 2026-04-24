//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import { useState, useCallback } from "react";

// import EmployeeContext from "./EmployeeContext.jsx";
// import Dashboard from "./Dashboard.jsx";
//import CounterRef from "./CounterRef";
//import LeaveApply from "./LeaveApply";
//import ToggleComponent from "./ToggleComponent";
import Child from "./Child.jsx";

function App() {
  const [count, setCount] = useState(0);

  /*const handleClick = () => {*/
  const handleClick = useCallback(() => {
    console.log("Clicked");
  },[]);

  return (
    <div>
     <h2>Without useCallback</h2>
     <h2>With useCallback</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <p>Count: {count}</p>

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;