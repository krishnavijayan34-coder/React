//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import { useState, useCallback } from "react";

//import Child from "./child.jsx";
import Weather from "./Weather";
import WeatherContext from "./WeatherContext";

function App() {
  const theme = "light";

  return (
    <WeatherContext.Provider value={theme}>
      <Weather />
    </WeatherContext.Provider>
  );
}

export default App;